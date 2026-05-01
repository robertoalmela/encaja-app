// ==================== LÓGICA CALCULADORA PAVIMENTOS Y CERÁMICA ====================

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const productSelector = document.getElementById('productSelector');
    const customPieceInputs = document.getElementById('customPieceInputs');
    const productInfo = document.getElementById('productInfo');
    
    const inputIds = ['pLargo', 'pAncho', 'm2Caja', 'largo', 'ancho', 'junta', 'merma'];
    const elements = {};
    inputIds.forEach(id => elements[id] = document.getElementById(id));

    // Result Elements
    const resSuperficie = document.getElementById('superficieStat');
    const resTotalM2 = document.getElementById('totalM2Stat');
    const resPiezas = document.getElementById('piezasStat');
    const resTotalResult = document.getElementById('totalResult');
    const resPrecioCaja = document.getElementById('precioCajaDisplay');
    const resPrecioTotal = document.getElementById('precioTotal');
    const resCalcDetail = document.getElementById('calcDetail');

    // Initialize Product Selector
    const productos = obtenerProductosPavimentos();
    productos.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.nombre} (${p.largo}x${p.ancho})`;
        productSelector.appendChild(opt);
    });

    // Event Listeners
    productSelector.addEventListener('change', () => {
        const id = productSelector.value;
        if (id === 'custom') {
            customPieceInputs.style.display = 'grid';
            productInfo.style.display = 'none';
        } else {
            customPieceInputs.style.display = 'none';
            const p = obtenerProductoPavimento(id);
            if (p) {
                elements.pLargo.value = p.largo;
                elements.pAncho.value = p.ancho;
                elements.m2Caja.value = p.m2PorCaja;
                elements.merma.value = p.merma;
                
                productInfo.style.display = 'block';
                document.getElementById('precioCajaValue').textContent = p.precioCaja.toFixed(2);
                document.getElementById('tiendaValue').textContent = p.tienda;
            }
        }
        calcular();
    });

    inputIds.forEach(id => {
        elements[id].addEventListener('input', calcular);
    });

    function calcular() {
        const pLargo = parseFloat(elements.pLargo.value) || 0;
        const pAncho = parseFloat(elements.pAncho.value) || 0;
        const m2Caja = parseFloat(elements.m2Caja.value) || 0;
        const surfLargo = parseFloat(elements.largo.value) || 0;
        const surfAncho = parseFloat(elements.ancho.value) || 0;
        const junta = (parseFloat(elements.junta.value) || 0) / 10.0; // mm to cm
        const merma = parseFloat(elements.merma.value) || 0;

        // 1. Superficie Base
        const areaBase = surfLargo * surfAncho;
        resSuperficie.textContent = areaBase.toFixed(2);

        // 2. Superficie con Merma (m2 a comprar)
        const areaAComprar = areaBase * (1 + (merma / 100));
        resTotalM2.textContent = areaAComprar.toFixed(2);

        if (pLargo <= 0 || pAncho <= 0 || m2Caja <= 0) {
            resetResultados();
            return;
        }

        // 3. Unidades Estimadas
        // Area pieza en m2 = (Largo + Junta) * (Ancho + Junta)
        const areaPiezaM2 = ((pLargo + junta) / 100) * ((pAncho + junta) / 100);
        const piezasTotal = areaAComprar / areaPiezaM2;
        resPiezas.textContent = Math.ceil(piezasTotal);

        // 4. Paquetes/Cajas
        const cajasTotal = Math.ceil(areaAComprar / m2Caja);
        resTotalResult.textContent = cajasTotal;

        // 5. Precios
        const id = productSelector.value;
        const p = id !== 'custom' ? obtenerProductoPavimento(id) : null;
        
        if (p) {
            resPrecioCaja.textContent = p.precioCaja.toFixed(2);
            resPrecioTotal.textContent = (cajasTotal * p.precioCaja).toFixed(2);
        } else {
            resPrecioCaja.textContent = "-";
            resPrecioTotal.textContent = "-";
        }

        // Detalle
        resCalcDetail.innerHTML = `
            <small>
                Superficie de ${areaBase.toFixed(1)}m² <br>
                Cada caja cubre ${m2Caja}m². <br>
                Total ${areaAComprar.toFixed(1)}m² incluyendo un ${merma}% de merma.
            </small>
        `;
    }

    function resetResultados() {
        resTotalM2.textContent = "0.00";
        resPiezas.textContent = "0";
        resTotalResult.textContent = "0";
        resPrecioCaja.textContent = "-";
        resPrecioTotal.textContent = "-";
        resCalcDetail.innerHTML = "";
    }

    // Inicializar
    calcular();
});
