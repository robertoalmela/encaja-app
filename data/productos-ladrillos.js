// ==================== BASE DE DATOS DE PRODUCTOS: LADRILLOS Y BLOQUES ====================
const PRODUCTOS_LADRILLOS = [
    {
        id: 'ladrillo-hueco-leroy',
        nombre: 'Ladrillo Hueco Doble',
        marca: 'Leroy Merlin',
        dimensiones: '24x11.5x7 cm',
        tipo: 'hueco',
        unidad: 'unidad',
        cantidadPorCaja: 50,
        precio: 0.35,
        precioCaja: 17.50,
        tienda: 'Leroy Merlin',
        descripcion: 'Ladrillo hueco para tabiquería interior estándar.'
    },
    {
        id: 'ladrillo-macizo-leroy',
        nombre: 'Ladrillo Macizo',
        marca: 'Leroy Merlin',
        dimensiones: '24x11.5x5 cm',
        tipo: 'macizo',
        unidad: 'unidad',
        cantidadPorCaja: 50,
        precio: 0.45,
        precioCaja: 22.50,
        tienda: 'Leroy Merlin',
        descripcion: 'Ladrillo macizo para muros de carga y fachadas.'
    },
    {
        id: 'ladrillo-hueco-bricodepot',
        nombre: 'Ladrillo Hueco Doble',
        marca: 'BricoDépot',
        dimensiones: '24x11.5x8 cm',
        tipo: 'hueco',
        unidad: 'unidad',
        cantidadPorCaja: 50,
        precio: 0.32,
        precioCaja: 16.00,
        tienda: 'BricoDépot',
        descripcion: 'Ladrillo hueco económico para tabiquería interior.'
    },
    {
        id: 'ladrillo-macizo-bricodepot',
        nombre: 'Ladrillo Macizo',
        marca: 'BricoDépot',
        dimensiones: '24x11.5x5 cm',
        tipo: 'macizo',
        unidad: 'unidad',
        cantidadPorCaja: 50,
        precio: 0.40,
        precioCaja: 20.00,
        tienda: 'BricoDépot',
        descripcion: 'Ladrillo macizo para muros de carga.'
    },
    {
        id: 'ladrillo-hueco-obramat',
        nombre: 'Ladrillo Hueco Sencillo Totxana',
        marca: 'Obramat',
        dimensiones: '28x13.5x9 cm',
        tipo: 'hueco',
        unidad: 'unidad',
        cantidadPorCaja: 40,
        precio: 0.22,
        precioCaja: 8.80,
        tienda: 'Obramat',
        descripcion: 'Ladrillo hueco económico para tabicón fino y trasdosados.'
    },
    {
        id: 'bloque-hormigon-leroy',
        nombre: 'Bloque de Hormigón 39x19x19',
        marca: 'Leroy Merlin',
        dimensiones: '39x19x19 cm',
        tipo: 'bloque-hormigon',
        unidad: 'unidad',
        cantidadPorCaja: 40,
        precio: 1.19,
        precioCaja: 47.60,
        tienda: 'Leroy Merlin',
        descripcion: 'Bloque de hormigón estándar para muros exteriores.'
    },
    {
        id: 'bloque-hormigon-obramat',
        nombre: 'Bloque de Hormigón 39x19x19',
        marca: 'Obramat',
        dimensiones: '39x19x19 cm',
        tipo: 'bloque-hormigon',
        unidad: 'unidad',
        cantidadPorCaja: 40,
        precio: 0.51,
        precioCaja: 20.40,
        tienda: 'Obramat',
        descripcion: 'Bloque de hormigón económico para muros y cerramientos.'
    },
    {
        id: 'bloque-hormigon-39x19x15-obramat',
        nombre: 'Bloque de Hormigón 39x19x15',
        marca: 'Obramat',
        dimensiones: '39x19x15 cm',
        tipo: 'bloque-hormigon',
        unidad: 'unidad',
        cantidadPorCaja: 40,
        precio: 0.48,
        precioCaja: 19.20,
        tienda: 'Obramat',
        descripcion: 'Bloque de hormigón de menor altura para cerramientos ligeros.'
    },
    {
        id: 'termoarcilla-obramat',
        nombre: 'Bloque Termoarcilla 30x24x19',
        marca: 'Obramat',
        dimensiones: '30x24x19 cm',
        tipo: 'termoarcilla',
        unidad: 'unidad',
        cantidadPorCaja: 30,
        precio: 0.92,
        precioCaja: 27.60,
        tienda: 'Obramat',
        descripcion: 'Bloque cerámico de alto aislamiento térmico.'
    },
    {
        id: 'termoarcilla-visto-obramat',
        nombre: 'Bloque Termoarcilla Visto 30x24x19',
        marca: 'Obramat',
        dimensiones: '30x24x19 cm',
        tipo: 'termoarcilla-visto',
        unidad: 'unidad',
        cantidadPorCaja: 30,
        precio: 0.65,
        precioCaja: 19.50,
        tienda: 'Obramat',
        descripcion: 'Bloque termoarcilla cara vista para fachadas sin revestir.'
    },
    {
        id: 'termoceramico-obramat',
        nombre: 'Bloque Termocerámico 30x19x24',
        marca: 'Obramat',
        dimensiones: '30x19x24 cm',
        tipo: 'termoceramico',
        unidad: 'unidad',
        cantidadPorCaja: 30,
        precio: 1.00,
        precioCaja: 30.00,
        tienda: 'Obramat',
        descripcion: 'Bloque cerámico de altas prestaciones térmicas y acústicas.'
    },
    {
        id: 'ladrillo-refractario-obramat',
        nombre: 'Ladrillo Refractario',
        marca: 'Obramat',
        dimensiones: '24x12x6 cm',
        tipo: 'refractario',
        unidad: 'unidad',
        cantidadPorCaja: 50,
        precio: 0.95,
        precioCaja: 47.50,
        tienda: 'Obramat',
        descripcion: 'Ladrillo refractario resistente a altas temperaturas.'
    },
    {
        id: 'bloque-hormigon-liso-crema-obramat',
        nombre: 'Bloque Hormigón Liso Crema 39x19x19',
        marca: 'Obramat',
        dimensiones: '39x19x19 cm',
        tipo: 'bloque-visto',
        unidad: 'unidad',
        cantidadPorCaja: 40,
        precio: 1.58,
        precioCaja: 63.20,
        tienda: 'Obramat',
        descripcion: 'Bloque hormigón cara vista color crema para fachadas.'
    },
    {
        id: 'bloque-hormigon-split-albero-obramat',
        nombre: 'Bloque Hormigón Split Albero 39x19x19',
        marca: 'Obramat',
        dimensiones: '39x19x19 cm',
        tipo: 'bloque-visto',
        unidad: 'unidad',
        cantidadPorCaja: 40,
        precio: 1.70,
        precioCaja: 68.00,
        tienda: 'Obramat',
        descripcion: 'Bloque hormigón cara vista acabado split color albero.'
    }
];

// Función para obtener productos por filtro
function obtenerProductos(filtros = {}) {
    let productos = PRODUCTOS_LADRILLOS;

    if (filtros.tienda) {
        productos = productos.filter(p => p.tienda === filtros.tienda);
    }

    if (filtros.tipo) {
        productos = productos.filter(p => p.tipo === filtros.tipo);
    }

    return productos;
}

// Función para obtener un producto por ID
function obtenerProducto(id) {
    return PRODUCTOS_LADRILLOS.find(p => p.id === id);
}

// Exportar para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCTOS_LADRILLOS, obtenerProductos, obtenerProducto };
}
