// ==================== LÓGICA CALCULADORA MUROS Y TABIQUES ====================

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const productSelector = document.getElementById('productSelector');
    const productInfo = document.getElementById('productInfo');
    const inputs = ['largo', 'alto', 'puertas', 'ventanas', 'junta', 'merma'];
    const elements = {};
    
    inputs.forEach(id => elements[id] = document.getElementById(id));

    // Result Elements
    const resSuperficie = document.getElementById('superficieStat');
    const resDensidad = document.getElementById('densidadStat');
    const resTotalBruto = document.getElementById('totalBrutoStat');
    const resTotalResult = document.getElementById('totalResult');
    const resPrecioUnitario = document.getElementById('precioUnitario');
    const resPrecioTotal = document.getElementById('precioTotal');
    const resCalcDetail = document.getElementById('calcDetail');

    // Initialize Product Selector
    const productos = obtenerProductosMuros();
    productos.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.nombre;
        productSelector.appendChild(opt);
    });

    // Event Listeners
    productSelector.addEventListener('change', () => {
        actualizarInfoProducto();
        calcular();
    });

    inputs.forEach(id => {
        elements[id].addEventListener('input', calcular);
    });

    function actualizarInfoProducto() {
        const id = productSelector.value;
        const p = obtenerProductoMuro(id);

        if (p) {
            productInfo.style.display = 'block';
            document.getElementById('dimValue').textContent = `${p.largo} x ${p.ancho} x ${p.alto}`;
            document.getElementById('precioValue').textContent = p.precio.toFixed(2);
            document.getElementById('tiendaValue').textContent = p.tienda;
            
            // Set default merma if not manually touched (optional, we keep UI value)
            if (elements.merma.value == 5) elements.merma.value = p.merma;
        } else {
            productInfo.style.display = 'none';
        }
    }

    function calcular() {
        const id = productSelector.value;
        const p = obtenerProductoMuro(id);

        const largo = parseFloat(elements.largo.value) || 0;
        const alto = parseFloat(elements.alto.value) || 0;
        const puertas = parseInt(elements.puertas.value) || 0;
        const ventanas = parseInt(elements.ventanas.value) || 0;
        const junta = (parseFloat(elements.junta.value) || 0) / 100; // cm to m
        const merma = parseFloat(elements.merma.value) || 0;

        // 1. Superficie
        const areaBruta = largo * alto;
        const areaHuecos = (puertas * 2.0) + (ventanas * 1.2);
        const areaNeta = Math.max(0, areaBruta - areaHuecos);

        resSuperficie.textContent = areaNeta.toFixed(2);

        if (!p) {
            resetResultados();
            return;
        }

        // 2. Densidad (uds/m2)
        // El ladrillo se suele poner "al largo" (soga)
        // Superficie de la cara visible = (Largo + Junta) * (Alto + Junta)
        const largoEfectivo = (p.largo / 100) + junta;
        const altoEfectivo = (p.alto / 100) + junta;
        const densidadd = 1 / (largoEfectivo * altoEfectivo);
        
        resDensidad.textContent = densidadd.toFixed(2);

        // 3. Totales
        const totalBruto = areaNeta * densidadd;
        resTotalBruto.textContent = Math.ceil(totalBruto);

        const totalConMerma = Math.ceil(totalBruto * (1 + (merma / 100)));
        resTotalResult.textContent = totalConMerma;

        // 4. Precios
        resPrecioUnitario.textContent = p.precio.toFixed(2);
        resPrecioTotal.textContent = (totalConMerma * p.precio).toFixed(2);

        // Detalle
        resCalcDetail.innerHTML = `
            <small>
                Pared de ${areaNeta.toFixed(1)}m² netos × ${densidadd.toFixed(1)} uds/m² <br>
                + ${merma}% de desperdicio incluido.
            </small>
        `;
    }

    function resetResultados() {
        resDensidad.textContent = "0.00";
        resTotalBruto.textContent = "0";
        resTotalResult.textContent = "0";
        resPrecioUnitario.textContent = "-";
        resPrecioTotal.textContent = "-";
        resCalcDetail.innerHTML = "";
    }

    // Inicializar
    calcular();
});
