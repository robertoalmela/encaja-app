// ==================== CALCULADORA DE PINTURA ====================

let estado = {
    productoSeleccionado: null,
    ancho: 4,
    largo: 3,
    alto: 2.2,
    paredes: true,
    techo: false,
    zocalo: false,
    capas: 1,
    perdida: 10
};

// ==================== DOM ELEMENTS ====================

const productSelector = document.getElementById('productSelector');
const productInfo = document.getElementById('productInfo');
const ancho = document.getElementById('ancho');
const largo = document.getElementById('largo');
const alturaInput = document.getElementById('alto');
const paredes = document.getElementById('paredes');
const techo = document.getElementById('techo');
const zocalo = document.getElementById('zocalo');
const capas = document.getElementById('capas');
const perdida = document.getElementById('perdida');

// Elementos de resultado
const superficieStat = document.getElementById('superficieStat');
const litrosStat = document.getElementById('litrosStat');
const botesStat = document.getElementById('botesStat');
const totalResult = document.getElementById('totalResult');
const calcDetail = document.getElementById('calcDetail');
const precioUnitario = document.getElementById('precioUnitario');
const precioTotal = document.getElementById('precioTotal');

// Links de tiendas
const linkLeroy = document.getElementById('linkLeroy');
const linkBrico = document.getElementById('linkBrico');
const linkObramat = document.getElementById('linkObramat');

// ==================== EVENT LISTENERS ====================

productSelector.addEventListener('change', (e) => {
    estado.productoSeleccionado = obtenerProducto(e.target.value);
    mostrarInfoProducto();
    calcular();
});

ancho.addEventListener('input', (e) => {
    estado.ancho = parseFloat(e.target.value) || 0;
    calcular();
});

largo.addEventListener('input', (e) => {
    estado.largo = parseFloat(e.target.value) || 0;
    calcular();
});

alturaInput.addEventListener('input', (e) => {
    estado.alto = parseFloat(e.target.value) || 0;
    calcular();
});

paredes.addEventListener('change', (e) => {
    estado.paredes = e.target.checked;
    calcular();
});

techo.addEventListener('change', (e) => {
    estado.techo = e.target.checked;
    calcular();
});

zocalo.addEventListener('change', (e) => {
    estado.zocalo = e.target.checked;
    calcular();
});

capas.addEventListener('change', (e) => {
    estado.capas = parseInt(e.target.value) || 1;
    calcular();
});

perdida.addEventListener('input', (e) => {
    estado.perdida = parseFloat(e.target.value) || 0;
    calcular();
});

// ==================== FUNCIONES PRINCIPALES ====================

function inicializar() {
    // Llenar selector de productos
    const productosInteriores = obtenerProductos({ interior: true });
    
    productSelector.innerHTML = '<option value="">-- Elige un producto --</option>';
    productosInteriores.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.id;
        option.textContent = `${producto.nombre} (${producto.capacidad}L - ${producto.precio}€)`;
        productSelector.appendChild(option);
    });

    calcular();
}

function mostrarInfoProducto() {
    if (!estado.productoSeleccionado) {
        productInfo.style.display = 'none';
        return;
    }

    productInfo.style.display = 'block';
    document.getElementById('rendimientoValue').textContent = estado.productoSeleccionado.rendimiento;
    document.getElementById('capacidadValue').textContent = estado.productoSeleccionado.capacidad;
    document.getElementById('precioValue').textContent = estado.productoSeleccionado.precio;
    document.getElementById('tiendaValue').textContent = estado.productoSeleccionado.tienda;

    // Actualizar links de tiendas
    actualizarLinksCompra();
}

function actualizarLinksCompra() {
    if (!estado.productoSeleccionado) {
        linkLeroy.style.display = 'none';
        linkBrico.style.display = 'none';
        linkObramat.style.display = 'none';
        return;
    }

    const nombreProducto = encodeURIComponent(estado.productoSeleccionado.nombre);
    
    linkLeroy.href = `https://www.leroymerlin.es/search/?q=${nombreProducto}&utm_source=encaja&utm_medium=calculator`;
    linkLeroy.style.display = 'block';

    linkBrico.href = `https://www.bricodepot.com/search?query=${nombreProducto}&utm_source=encaja&utm_medium=calculator`;
    linkBrico.style.display = 'block';

    linkObramat.href = `https://www.obramat.es/search?q=${nombreProducto}&utm_source=encaja&utm_medium=calculator`;
    linkObramat.style.display = 'block';
}

function calcularSuperficie() {
    let superficie = 0;

    // Paredes
    if (estado.paredes) {
        const perimetro = 2 * (estado.ancho + estado.largo);
        const alturaParedes = estado.zocalo ? estado.alto - 0.3 : estado.alto;
        superficie += perimetro * alturaParedes;
    }

    // Zócalo
    if (estado.zocalo) {
        const perimetro = 2 * (estado.ancho + estado.largo);
        superficie += perimetro * 0.3; // 30cm de alto
    }

    // Techo
    if (estado.techo) {
        superficie += estado.ancho * estado.largo;
    }

    return superficie;
}

function calcular() {
    if (!estado.productoSeleccionado) {
        superficieStat.textContent = '0.00';
        litrosStat.textContent = '0.00';
        botesStat.textContent = '0';
        totalResult.textContent = '0';
        calcDetail.innerHTML = '';
        precioUnitario.textContent = '-';
        precioTotal.textContent = '-';
        return;
    }

    const producto = estado.productoSeleccionado;
    
    // Calcular superficie
    let superficie = calcularSuperficie();
    
    // Calcular litros necesarios
    let litrosNetos = (superficie / producto.rendimiento) * estado.capas;
    
    // Añadir pérdida
    let litrosTotal = litrosNetos * (1 + estado.perdida / 100);
    
    // Calcular botes necesarios
    let botesNetos = Math.ceil(litrosTotal / producto.capacidad);
    
    // Añadir margen de seguridad (redondear a 0.5)
    let botesFinales = Math.ceil(botesNetos * 1.1); // 10% de seguridad
    
    // Actualizar UI
    superficieStat.textContent = superficie.toFixed(2);
    litrosStat.textContent = litrosTotal.toFixed(2);
    botesStat.textContent = botesNetos;
    totalResult.textContent = botesFinales;
    
    // Detalles de cálculo
    const detalles = `
        <div style="font-size: 0.85rem; line-height: 1.8; color: #666;">
            Superficie: ${superficie.toFixed(2)} m² 
            ÷ ${producto.rendimiento} m²/L = <strong>${(superficie / producto.rendimiento).toFixed(2)} L</strong><br>
            ${estado.capas} capa(s): ${(superficie / producto.rendimiento).toFixed(2)} × ${estado.capas} = <strong>${litrosNetos.toFixed(2)} L</strong><br>
            + ${estado.perdida}% pérdida: <strong>${litrosTotal.toFixed(2)} L</strong><br>
            ÷ ${producto.capacidad}L/bote = <strong>${botesNetos} botes</strong> + 10% seguridad = <strong>${botesFinales} botes</strong>
        </div>
    `;
    calcDetail.innerHTML = detalles;
    
    // Precios
    precioUnitario.textContent = producto.precio.toFixed(2);
    precioTotal.textContent = (producto.precio * botesFinales).toFixed(2);
}

// ==================== INIT ====================

document.addEventListener('DOMContentLoaded', inicializar);