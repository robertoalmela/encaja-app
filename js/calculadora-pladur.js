// ==================== CALCULADORA DE PLADUR ====================
// Calcula placas de yeso, perfiles metálicos, tornillos y pasta de juntas
// Basada en la base de datos PRODUCTOS_PLADUR

let estado = {
    productoSeleccionado: null,
    superficie: 10,
    montaje: 'simple', // 'simple' | 'doble'
    merma: 10
};

// Precios de referencia para accesorios (por si no están en la BD)
const PRECIOS_ACCESORIOS = {
    tornilloPladur: 0.08,     // €/ud
    pastaJuntas: 8.50,        // €/kg (saco 5kg ~ 42.50€)
    cintaMalla: 3.50          // €/rollo 50m
};

// ==================== DOM ELEMENTS ====================

const productSelector = document.getElementById('productSelector');
const productInfo = document.getElementById('productInfo');
const superficie = document.getElementById('superficie');
const montaje = document.getElementById('montaje');
const merma = document.getElementById('merma');

// Elementos de resultado
const statSuperficie = document.getElementById('statSuperficie');
const statPlacas = document.getElementById('statPlacas');
const statTotal = document.getElementById('statTotal');
const totalResult = document.getElementById('totalResult');
const precioPlacas = document.getElementById('precioPlacas');
const precioPerfiles = document.getElementById('precioPerfiles');
const precioAccesorios = document.getElementById('precioAccesorios');
const precioTotal = document.getElementById('precioTotal');
const calcDetail = document.getElementById('calcDetail');
const breakdownBody = document.getElementById('breakdownBody');

// Links de tiendas
const linkLeroy = document.getElementById('linkLeroy');
const linkBrico = document.getElementById('linkBrico');
const linkObramat = document.getElementById('linkObramat');

// ==================== FUNCIONES DE PRODUCTOS ====================

function obtenerPlacas() {
    return PRODUCTOS_PLADUR.filter(p => p.tipo !== 'perfil');
}

function obtenerPerfiles() {
    return PRODUCTOS_PLADUR.filter(p => p.tipo === 'perfil');
}

function obtenerProducto(id) {
    return PRODUCTOS_PLADUR.find(p => p.id === id);
}

// ==================== EVENT LISTENERS ====================

productSelector.addEventListener('change', (e) => {
    const id = e.target.value;
    estado.productoSeleccionado = id ? obtenerProducto(id) : null;
    mostrarInfoProducto();
    calcular();
});

superficie.addEventListener('input', (e) => {
    estado.superficie = parseFloat(e.target.value) || 0;
    calcular();
});

montaje.addEventListener('change', (e) => {
    estado.montaje = e.target.value;
    calcular();
});

merma.addEventListener('input', (e) => {
    estado.merma = parseFloat(e.target.value) || 0;
    calcular();
});

// ==================== FUNCIONES PRINCIPALES ====================

function inicializar() {
    // Llenar selector de productos con solo placas (no perfiles)
    const placas = obtenerPlacas();
    
    productSelector.innerHTML = '<option value="">-- Elige una placa --</option>';
    placas.forEach(placa => {
        const option = document.createElement('option');
        option.value = placa.id;
        const tipoLabel = getTipoLabel(placa.tipo);
        option.textContent = `${placa.nombre} — ${tipoLabel} (${placa.precioM2.toFixed(2)} €/m²)`;
        productSelector.appendChild(option);
    });

    calcular();
}

function getTipoLabel(tipo) {
    const labels = {
        'estandar': 'Estándar',
        'ignifugo': 'Ignífuga',
        'acustico': 'Acústica',
        'hidrofugo': 'Hidrófuga'
    };
    return labels[tipo] || tipo;
}

function mostrarInfoProducto() {
    if (!estado.productoSeleccionado) {
        productInfo.style.display = 'none';
        return;
    }

    const p = estado.productoSeleccionado;
    productInfo.style.display = 'block';
    document.getElementById('dimValue').textContent = `${p.ancho}×${p.largo} cm (${p.espesor} mm)`;
    document.getElementById('precioM2Value').textContent = p.precioM2 ? p.precioM2.toFixed(2) : '—';
    document.getElementById('precioUdValue').textContent = p.precioUd ? p.precioUd.toFixed(2) : '—';
    document.getElementById('tiendaValue').textContent = p.tienda;

    actualizarLinksCompra();
}

function actualizarLinksCompra() {
    const nombreBusqueda = estado.productoSeleccionado
        ? encodeURIComponent(estado.productoSeleccionado.nombre.split(' ').slice(0, 4).join(' '))
        : 'pladur';

    linkLeroy.href = `https://www.leroymerlin.es/search/?q=${nombreBusqueda}&utm_source=encaja&utm_medium=calculator`;
    linkLeroy.style.display = 'block';

    linkBrico.href = `https://www.bricodepot.com/search?query=${nombreBusqueda}&utm_source=encaja&utm_medium=calculator`;
    linkBrico.style.display = 'block';

    linkObramat.href = `https://www.obramat.es/search?q=${nombreBusqueda}&utm_source=encaja&utm_medium=calculator`;
    linkObramat.style.display = 'block';
}

// ==================== CÁLCULOS PLADUR ====================

function calcular() {
    if (!estado.productoSeleccionado || !estado.superficie || estado.superficie <= 0) {
        // Estado vacío
        statSuperficie.textContent = '0.00';
        statPlacas.textContent = '0';
        statTotal.textContent = '0.00';
        totalResult.textContent = '0.00';
        precioPlacas.textContent = '0.00 €';
        precioPerfiles.textContent = '0.00 €';
        precioAccesorios.textContent = '0.00 €';
        precioTotal.textContent = '0.00 €';
        calcDetail.innerHTML = 'Selecciona una placa e introduce la superficie para calcular.';
        breakdownBody.innerHTML = '';
        return;
    }

    const producto = estado.productoSeleccionado;
    const sup = estado.superficie;
    const factorCapas = estado.montaje === 'doble' ? 2 : 1;
    const mermaPct = estado.merma / 100;

    // 1. Cálculo de placas
    // Superficie de una placa en m²
    const supPlaca = (producto.ancho / 100) * (producto.largo / 100);
    // Nº de placas neto
    let numPlacas = Math.ceil((sup * factorCapas) / supPlaca);
    // Aplicar merma
    numPlacas = Math.ceil(numPlacas * (1 + mermaPct));

    // 2. Perfiles metálicos
    // Estimación: para una superficie rectangular, asumimos largo = 2 * ancho como promedio
    // Mejor: calculamos lineal de montantes basado en m²
    // Montantes cada 60cm. Por cada m² estimamos perímetro lineal.
    // Regla práctica: ~2.5 m de montante por m² de superficie (para altura estándar 2.6m)
    const alturaEstimada = 2.6; // metros
    const anchoEstimado = sup / alturaEstimada;
    const perimetroEstimado = 2 * (anchoEstimado + alturaEstimada);
    
    // Montantes: cada 60cm en el ancho + extremos
    // Nº montantes = (ancho / 0.6) + 1, redondeado
    const numMontantes = Math.ceil(anchoEstimado / 0.6) + 1;
    // Largo montante = alturaEstimada
    const largoMontantes = numMontantes * alturaEstimada;

    // Canales: superior + inferior = 2 * anchoEstimado
    const largoCanales = 2 * anchoEstimado;

    // Total perfiles (para presupuesto)
    const totalMetrosPerfiles = largoMontantes + largoCanales;

    // Buscar perfiles en la BD para precios
    const perfilesMontante = obtenerPerfiles().filter(p =>
        p.nombre.toLowerCase().includes('montante')
    );
    const perfilesCanal = obtenerPerfiles().filter(p =>
        p.nombre.toLowerCase().includes('canal')
    );

    // Usar el primer montante y canal encontrados, o precios por defecto
    const precioMontanteUd = perfilesMontante.length > 0 ? perfilesMontante[0].precioUd : 2.03;
    const largoSegMontante = perfilesMontante.length > 0 ? perfilesMontante[0].largo / 100 : 3.0;
    const precioCanalUd = perfilesCanal.length > 0 ? perfilesCanal[0].precioUd : 2.10;
    const largoSegCanal = perfilesCanal.length > 0 ? perfilesCanal[0].largo / 100 : 3.0;

    // Unidades de perfiles (cada perfil viene en 3m)
    const udsMontantes = Math.ceil(largoMontantes / largoSegMontante);
    const udsCanales = Math.ceil(largoCanales / largoSegCanal);
    const costeMontantes = udsMontantes * precioMontanteUd;
    const costeCanales = udsCanales * precioCanalUd;
    const costePerfiles = costeMontantes + costeCanales;

    // 3. Tornillos: ~13 por placa
    const tornillosPorPlaca = 13;
    const totalTornillos = numPlacas * tornillosPorPlaca;
    const costeTornillos = totalTornillos * PRECIOS_ACCESORIOS.tornilloPladur;

    // 4. Pasta de juntas: 0.3 kg/m²
    const kgPasta = sup * 0.3 * factorCapas;
    const costePasta = kgPasta * PRECIOS_ACCESORIOS.pastaJuntas / 5; // ~8.50€/5kg

    // 5. Cinta de malla: 1.2m por placa
    const metrosCinta = numPlacas * 1.2;
    const rollosCinta = Math.ceil(metrosCinta / 50); // rollos de 50m
    const costeCinta = rollosCinta * PRECIOS_ACCESORIOS.cintaMalla;

    const costeAccesorios = costeTornillos + costePasta + costeCinta;

    // 6. Coste placas
    const costePlacas = numPlacas * producto.precioUd;

    // 7. Total
    const total = costePlacas + costePerfiles + costeAccesorios;

    // ==================== ACTUALIZAR UI ====================

    // Stats rápidas
    statSuperficie.textContent = sup.toFixed(2);
    statPlacas.textContent = numPlacas;
    statTotal.textContent = total.toFixed(2);
    totalResult.textContent = total.toFixed(2);

    // Precios
    precioPlacas.textContent = costePlacas.toFixed(2) + ' €';
    precioPerfiles.textContent = costePerfiles.toFixed(2) + ' €';
    precioAccesorios.textContent = costeAccesorios.toFixed(2) + ' €';
    precioTotal.textContent = total.toFixed(2) + ' €';

    // Detalle del cálculo
    const capasTexto = estado.montaje === 'doble' ? 'doble capa' : 'simple capa';
    const detalles = `
        <strong>📋 Desglose del cálculo:</strong><br>
        • Superficie: ${sup.toFixed(2)} m² × ${capasTexto} = ${(sup * factorCapas).toFixed(2)} m² efectivos<br>
        • Placa: ${producto.ancho}×${producto.largo} cm (${supPlaca.toFixed(2)} m²/placa)<br>
        • Placas netas: ${(sup * factorCapas) / supPlaca > 0 ? Math.ceil((sup * factorCapas) / supPlaca) : 0} uds + ${estado.merma}% merma = <strong>${numPlacas} placas</strong><br>
        • Montantes: ${numMontantes} uds × ${alturaEstimada.toFixed(1)}m = ${largoMontantes.toFixed(1)}m lineales<br>
        • Canales: ${anchoEstimado.toFixed(1)}m (sup) + ${anchoEstimado.toFixed(1)}m (inf) = ${largoCanales.toFixed(1)}m<br>
        • Tornillos: ${numPlacas} placas × ${tornillosPorPlaca} uds = <strong>${totalTornillos} uds</strong><br>
        • Pasta juntas: ${sup.toFixed(2)} m² × 0.3 kg/m² = <strong>${kgPasta.toFixed(1)} kg</strong><br>
        • Cinta malla: ${numPlacas} × 1.2m = ${metrosCinta.toFixed(0)}m (${rollosCinta} rollo(s))
    `;
    calcDetail.innerHTML = detalles;

    // Tabla de desglose
    const filas = [
        { material: producto.nombre, cantidad: numPlacas, ud: 'uds', precio: costePlacas.toFixed(2) + ' €' },
        { material: 'Montantes (' + largoSegMontante.toFixed(1) + 'm)', cantidad: udsMontantes, ud: 'uds', precio: costeMontantes.toFixed(2) + ' €' },
        { material: 'Canales (' + largoSegCanal.toFixed(1) + 'm)', cantidad: udsCanales, ud: 'uds', precio: costeCanales.toFixed(2) + ' €' },
        { material: 'Tornillos pladur', cantidad: totalTornillos, ud: 'uds', precio: costeTornillos.toFixed(2) + ' €' },
        { material: 'Pasta de juntas', cantidad: Math.ceil(kgPasta * 10) / 10, ud: 'kg', precio: costePasta.toFixed(2) + ' €' },
        { material: 'Cinta de malla', cantidad: rollosCinta, ud: 'rollo(s)', precio: costeCinta.toFixed(2) + ' €' }
    ];

    let htmlFilas = '';
    filas.forEach(f => {
        htmlFilas += `<tr><td>${f.material}</td><td>${f.cantidad}</td><td>${f.ud}</td><td>${f.precio}</td></tr>`;
    });
    // Fila total
    htmlFilas += `<tr><td><strong>TOTAL</strong></td><td></td><td></td><td><strong>${total.toFixed(2)} €</strong></td></tr>`;
    breakdownBody.innerHTML = htmlFilas;
}

// ==================== INIT ====================

document.addEventListener('DOMContentLoaded', inicializar);


function getCompraPladurUrl() {
    if (!estado.productoSeleccionado) return '';
    return linkLeroy.href || '';
}

function irACompraPladur(event) {
    if (event) event.preventDefault();
    const url = getCompraPladurUrl();
    if (!url) {
        alert('Selecciona una placa antes de ir a la compra.');
        return false;
    }
    window.open(url, '_blank', 'noopener');
    return false;
}

function imprimirInformePladur() {
    if (!estado.productoSeleccionado) {
        alert('Selecciona una placa antes de imprimir el informe.');
        return;
    }
    const tabla = document.querySelector('.breakdown-table')?.outerHTML || '';
    EncajaReport.printHtmlReport({
        title: 'Encaja.app · Informe de pladur',
        subtitle: 'Resumen imprimible de materiales y presupuesto.',
        summaryCards: [
            { label: 'Placa', value: estado.productoSeleccionado.nombre },
            { label: 'Superficie', value: `${document.getElementById('statSuperficie').textContent} m²` },
            { label: 'Placas', value: document.getElementById('statPlacas').textContent },
            { label: 'Total', value: `${document.getElementById('precioTotal').textContent} €` }
        ],
        sections: [{ title: 'Desglose del cálculo', html: `<div>${calcDetail.innerHTML}</div>` },
                   { title: 'Materiales estimados', html: tabla },
                   { title: 'Compra', html: `<p><strong>Enlace recomendado:</strong> <span class="muted">${EncajaReport.escapeHtml(getCompraPladurUrl())}</span></p>` }]
    });
}
