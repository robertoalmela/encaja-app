// ==================== BASE DE DATOS DE PRODUCTOS: MUROS Y TABIQUES ====================
const PRODUCTOS_MUROS = [
    {
        id: 'ladrillo-hueco-sencillo',
        nombre: 'Ladrillo Hueco Sencillo',
        largo: 24, // cm
        ancho: 11.5, // cm
        alto: 4, // cm
        merma: 5, // %
        precio: 0.22,
        tienda: 'Obramat',
        descripcion: 'Para tabicón fino y trasdosados.'
    },
    {
        id: 'ladrillo-hueco-doble',
        nombre: 'Ladrillo Hueco Doble',
        largo: 24, // cm
        ancho: 11.5, // cm
        alto: 7, // cm
        merma: 5,
        precio: 0.35,
        tienda: 'Leroy Merlin',
        descripcion: 'Para tabiquería interior estándar.'
    },
    {
        id: 'ladrillo-hueco-triple',
        nombre: 'Ladrillo Hueco Triple',
        largo: 24, // cm
        ancho: 11.5, // cm
        alto: 10, // cm
        merma: 5,
        precio: 0.42,
        tienda: 'Leroy Merlin',
        descripcion: 'Para tabiquería con mayor aislamiento.'
    },
    {
        id: 'ladrillo-macizo',
        nombre: 'Ladrillo Macizo (Macho)',
        largo: 24, // cm
        ancho: 11.5, // cm
        alto: 5, // cm
        merma: 7,
        precio: 0.45,
        tienda: 'Leroy Merlin',
        descripcion: 'Para muros de carga y fachadas visto.'
    },
    {
        id: 'bloque-hormigon-40x20x20',
        nombre: 'Bloque de Hormigón 40x20x20',
        largo: 40, // cm
        ancho: 20, // cm
        alto: 20, // cm
        merma: 3,
        precio: 1.19,
        tienda: 'Leroy Merlin',
        descripcion: 'Bloque estándar para muros exteriores y cerramientos.'
    },
    {
        id: 'bloque-hormigon-obramat-40x20x20',
        nombre: 'Bloque de Hormigón 40x20x20',
        largo: 40, // cm
        ancho: 20, // cm
        alto: 20, // cm
        merma: 3,
        precio: 0.51,
        tienda: 'Obramat',
        descripcion: 'Bloque económico para muros exteriores y cerramientos.'
    },
    {
        id: 'bloque-hormigon-40x20x15',
        nombre: 'Bloque de Hormigón 40x20x15',
        largo: 40, // cm
        ancho: 20, // cm
        alto: 15, // cm
        merma: 3,
        precio: 0.48,
        tienda: 'Obramat',
        descripcion: 'Bloque de menor altura para cerramientos ligeros.'
    },
    {
        id: 'termoarcilla-30x24x19',
        nombre: 'Bloque Termoarcilla 30x24x19',
        largo: 30, // cm
        ancho: 24, // cm
        alto: 19, // cm
        merma: 5,
        precio: 0.92,
        tienda: 'Obramat',
        descripcion: 'Bloque cerámico de alto aislamiento térmico.'
    },
    {
        id: 'termoarcilla-30x19x19',
        nombre: 'Bloque Termoarcilla 30x19x19',
        largo: 30, // cm
        ancho: 19, // cm
        alto: 19, // cm
        merma: 5,
        precio: 0.95,
        tienda: 'Obramat',
        descripcion: 'Bloque cerámico estándar de alto aislamiento térmico.'
    },
    {
        id: 'termoceramico-30x19x24',
        nombre: 'Bloque Termocerámico 30x19x24',
        largo: 30, // cm
        ancho: 19, // cm
        alto: 24, // cm
        merma: 5,
        precio: 1.00,
        tienda: 'Obramat',
        descripcion: 'Bloque cerámico de altas prestaciones térmicas y acústicas.'
    },
    {
        id: 'ladrillo-hueco-bricodepot',
        nombre: 'Ladrillo Hueco Doble',
        largo: 24, // cm
        ancho: 11.5, // cm
        alto: 7, // cm
        merma: 5,
        precio: 0.32,
        tienda: 'BricoDépot',
        descripcion: 'Para tabiquería interior económica.'
    },
    {
        id: 'ladrillo-macizo-bricodepot',
        nombre: 'Ladrillo Macizo',
        largo: 24, // cm
        ancho: 11.5, // cm
        alto: 5, // cm
        merma: 7,
        precio: 0.40,
        tienda: 'BricoDépot',
        descripcion: 'Ladrillo macizo para muros de carga.'
    },
    {
        id: 'bloque-hormigon-liso-crema',
        nombre: 'Bloque Hormigón Liso Crema 40x20x20',
        largo: 40, // cm
        ancho: 20, // cm
        alto: 20, // cm
        merma: 3,
        precio: 1.58,
        tienda: 'Obramat',
        descripcion: 'Bloque hormigón cara vista color crema.'
    },
    {
        id: 'bloque-hormigon-split-albero',
        nombre: 'Bloque Hormigón Split Albero 40x20x20',
        largo: 40, // cm
        ancho: 20, // cm
        alto: 20, // cm
        merma: 3,
        precio: 1.70,
        tienda: 'Obramat',
        descripcion: 'Bloque hormigón cara vista acabado split color albero.'
    },
    {
        id: 'bloque-hormigon-bricodepot',
        nombre: 'Bloque de Hormigón 40x20x20',
        largo: 40, // cm
        ancho: 20, // cm
        alto: 20, // cm
        merma: 3,
        precio: 0.95,
        tienda: 'BricoDépot',
        descripcion: 'Bloque estándar para muros exteriores y cerramientos.'
    }
];

function obtenerProductosMuros() {
    return PRODUCTOS_MUROS;
}

function obtenerProductoMuro(id) {
    return PRODUCTOS_MUROS.find(p => p.id === id);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCTOS_MUROS, obtenerProductosMuros, obtenerProductoMuro };
}
