// Calculadora de Ladrillos - Lógica principal

class CalculadoraLadrillos {
    constructor() {
        this.productoSeleccionado = null;
        this.resultado = null;
        this.inicializar();
    }

    inicializar() {
        this.rellenarProductos();
        this.agregarEventListeners();
        this.calcular();
    }

    rellenarProductos() {
        const select = document.getElementById('productSelector');
        select.innerHTML = '<option value="">-- Selecciona un producto --</option>';
        
        PRODUCTOS_LADRILLOS.forEach(producto => {
            const option = document.createElement('option');
            option.value = producto.id;
            option.textContent = `${producto.nombre} - €${producto.precio.toFixed(2)}/ud`;
            select.appendChild(option);
        });
    }

    agregarEventListeners() {
        // Selector de producto
        document.getElementById('productSelector').addEventListener('change', (e) => {
            if (e.target.value) {
                this.productoSeleccionado = obtenerProducto(e.target.value);
                document.getElementById('productInfo').style.display = 'block';
                this.mostrarInfoProducto();
            } else {
                this.productoSeleccionado = null;
                document.getElementById('productInfo').style.display = 'none';
            }
            this.calcular();
        });

        // Dimensiones
        document.getElementById('altura').addEventListener('input', () => this.calcular());
        document.getElementById('largo').addEventListener('input', () => this.calcular());
        document.getElementById('espesor').addEventListener('change', () => this.calcular());
        document.getElementById('cantidad').addEventListener('input', () => this.calcular());
        document.getElementById('merma').addEventListener('input', () => this.calcular());
    }

    mostrarInfoProducto() {
        if (!this.productoSeleccionado) return;

        const producto = this.productoSeleccionado;
        document.getElementById('dimensionesValue').textContent = producto.dimensiones;
        document.getElementById('unidadValue').textContent = producto.tipo;
        document.getElementById('precioUnitarioValue').textContent = producto.precio.toFixed(2);
        document.getElementById('tiendaValue').textContent = producto.tienda;

        // Actualizar link de Leroy Merlin
        const linkLeroy = document.getElementById('linkLeroy');
        const nombreProductoBusqueda = encodeURIComponent(producto.nombre);
        linkLeroy.href = `https://www.leroymerlin.es/productos?q=${nombreProductoBusqueda}`;
        linkLeroy.style.display = 'block';
    }

    calcularSuperficie() {
        const altura = parseFloat(document.getElementById('altura').value) || 0;
        const largo = parseFloat(document.getElementById('largo').value) || 0;
        const cantidad = parseInt(document.getElementById('cantidad').value) || 1;

        return altura * largo * cantidad;
    }

    calcularLadrillosNecesarios(superficie) {
        if (!this.productoSeleccionado) return 0;

        const producto = this.productoSeleccionado;
        const espesorSelect = document.getElementById('espesor').value;
        
        // Factor de ajuste por espesor
        // El espesor afecta cuántos ladrillos necesitas por m²
        const factorEspesor = parseFloat(espesorSelect);
        
        // Cálculo base: ~50 ladrillos por m² (aproximado para 240x115x80)
        // Se ajusta según espesor
        const ladrillosPorM2 = 52 / factorEspesor;
        
        return superficie * ladrillosPorM2;
    }

    calcular() {
        const superficie = this.calcularSuperficie();
        const merma = parseInt(document.getElementById('merma').value) || 0;

        // Actualizar display de superficie
        document.getElementById('superficieStat').textContent = superficie.toFixed(2);

        if (!this.productoSeleccionado) {
            this.limpiarResultados();
            return;
        }

        const producto = this.productoSeleccionado;
        
        // Cálculo de ladrillos
        const ladrillosExactos = this.calcularLadrillosNecesarios(superficie);
        const ladrillosConMerma = ladrillosExactos * (1 + merma / 100);
        const ladrillosCompra = Math.ceil(ladrillosConMerma);

        // Cálculo de cajas
        const cajasNecesarias = Math.ceil(ladrillosCompra / producto.cantidadPorCaja);
        const ladrillosEnCajas = cajasNecesarias * producto.cantidadPorCaja;

        // Almacenar resultado
        this.resultado = {
            superficie,
            ladrillosExactos,
            ladrillosConMerma,
            ladrillosCompra,
            cajasNecesarias,
            ladrillosEnCajas,
            precioUnitario: producto.precio,
            precioCaja: producto.precioCaja,
            precioTotal: cajasNecesarias * producto.precioCaja
        };

        this.mostrarResultados();
    }

    mostrarResultados() {
        if (!this.resultado) return;

        const r = this.resultado;
        const producto = this.productoSeleccionado;

        // Stats principales
        document.getElementById('superficieStat').textContent = r.superficie.toFixed(2);
        document.getElementById('ladrillosExactosStat').textContent = Math.round(r.ladrillosExactos);
        document.getElementById('cajasComprarStat').textContent = r.cajasNecesarias;

        // Resultado principal
        document.getElementById('totalResult').textContent = r.ladrillosEnCajas;

        // Detalles de cálculo
        const merma = parseInt(document.getElementById('merma').value);
        const detalles = `
            ${r.superficie.toFixed(2)} m² × ${(r.ladrillosExactos/r.superficie).toFixed(0)} ladrillos/m² = ${r.ladrillosExactos.toFixed(0)} ladrillos
            + ${merma}% merma = ${r.ladrillosConMerma.toFixed(0)} ladrillos
            → ${r.ladrillosCompra} unidades exactas
            = ${r.cajasNecesarias} cajas de ${producto.cantidadPorCaja} ud
        `;
        document.getElementById('calcDetail').textContent = detalles;

        // Precios
        document.getElementById('precioUnitario').textContent = r.precioUnitario.toFixed(2);
        document.getElementById('precioCaja').textContent = r.precioCaja.toFixed(2);
        document.getElementById('precioTotal').textContent = r.precioTotal.toFixed(2);
    }

    limpiarResultados() {
        document.getElementById('superficieStat').textContent = '0.00';
        document.getElementById('ladrillosExactosStat').textContent = '0';
        document.getElementById('cajasComprarStat').textContent = '0';
        document.getElementById('totalResult').textContent = '0';
        document.getElementById('calcDetail').textContent = '';
        document.getElementById('precioUnitario').textContent = '-';
        document.getElementById('precioCaja').textContent = '-';
        document.getElementById('precioTotal').textContent = '-';
    }
}

// Inicializar cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    new CalculadoraLadrillos();
});