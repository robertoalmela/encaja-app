// ==================== BASE DE DATOS DE PRODUCTOS: TABLEROS Y PANELES ====================
const PRODUCTOS_TABLEROS = [
    {
        id: 'mdf-leroy-16mm',
        nombre: 'Tablero MDF 122x244x16mm',
        material: 'MDF',
        largo: 244, // cm
        ancho: 122, // cm
        espesor: 16, // mm
        precio: 50.40,
        tienda: 'Leroy Merlin',
        descripcion: 'Tablero MDF estándar para carpintería y muebles.'
    },
    {
        id: 'contrachapado-leroy-10mm',
        nombre: 'Tablero Contrachapado 122x250x10mm',
        material: 'contrachapado',
        largo: 250, // cm
        ancho: 122, // cm
        espesor: 10, // mm
        precio: 32.00,
        tienda: 'Leroy Merlin',
        descripcion: 'Tablero contrachapado de madera para usos estructurales.'
    },
    {
        id: 'mdf-bricodepot-19mm',
        nombre: 'Tablero MDF 244x122x19mm',
        material: 'MDF',
        largo: 244, // cm
        ancho: 122, // cm
        espesor: 19, // mm
        precio: 55.00,
        tienda: 'BricoDépot',
        descripcion: 'Tablero MDF grueso para muebles de alta calidad.'
    },
    {
        id: 'mdf-obramat-3mm',
        nombre: 'Tablero MDF 244x122x3mm',
        material: 'MDF',
        largo: 244, // cm
        ancho: 122, // cm
        espesor: 3, // mm
        precio: 6.66,
        tienda: 'Obramat',
        descripcion: 'Tablero MDF fino para fondos de armario y traseras.'
    },
    {
        id: 'mdf-obramat-16mm',
        nombre: 'Tablero MDF 244x122x16mm',
        material: 'MDF',
        largo: 244, // cm
        ancho: 122, // cm
        espesor: 16, // mm
        precio: 24.00,
        tienda: 'Obramat',
        descripcion: 'Tablero MDF económico para carpintería general.'
    },
    {
        id: 'osb3-obramat-12mm',
        nombre: 'Tablero OSB3 250x67.5x12mm',
        material: 'OSB',
        largo: 250, // cm
        ancho: 67.5, // cm
        espesor: 12, // mm
        precio: 14.00,
        tienda: 'Obramat',
        descripcion: 'Tablero OSB3 estructural para revestimientos y suelos.'
    },
    {
        id: 'osb3-obramat-9mm',
        nombre: 'Tablero OSB3 250x125x9mm',
        material: 'OSB',
        largo: 250, // cm
        ancho: 125, // cm
        espesor: 9, // mm
        precio: 15.00,
        tienda: 'Obramat',
        descripcion: 'Tablero OSB3 fino para revestimientos ligeros.'
    },
    {
        id: 'osb3-obramat-15mm',
        nombre: 'Tablero OSB3 250x125x15mm',
        material: 'OSB',
        largo: 250, // cm
        ancho: 125, // cm
        espesor: 15, // mm
        precio: 19.98,
        tienda: 'Obramat',
        descripcion: 'Tablero OSB3 estructural de 15mm para usos resistentes.'
    },
    {
        id: 'osb3-machihembrado-obramat',
        nombre: 'Tablero OSB3 Machihembrado 205x62.5x15mm',
        material: 'OSB',
        largo: 205, // cm
        ancho: 62.5, // cm
        espesor: 15, // mm
        precio: 8.44,
        tienda: 'Obramat',
        descripcion: 'Tablero OSB3 machihembrado para suelos y techos.'
    },
    {
        id: 'melamina-blanca-obramat',
        nombre: 'Tablero Melamina Blanca 244x122x10mm',
        material: 'melamina',
        largo: 244, // cm
        ancho: 122, // cm
        espesor: 10, // mm
        precio: 10.97,
        tienda: 'Obramat',
        descripcion: 'Tablero melamina blanca para muebles de interior.'
    },
    {
        id: 'melamina-roble-obramat',
        nombre: 'Tablero Melamina Roble 244x122x16mm',
        material: 'melamina',
        largo: 244, // cm
        ancho: 122, // cm
        espesor: 16, // mm
        precio: 24.20,
        tienda: 'Obramat',
        descripcion: 'Tablero melamina acabado roble para muebles.'
    },
    {
        id: 'contrachapado-fenolico-obramat',
        nombre: 'Tablero Contrachapado Fenólico 250x122x9mm',
        material: 'contrachapado',
        largo: 250, // cm
        ancho: 122, // cm
        espesor: 9, // mm
        precio: 32.00,
        tienda: 'Obramat',
        descripcion: 'Tablero contrachapado fenólico resistente a la humedad.'
    },
    {
        id: 'contrachapado-acacia-obramat',
        nombre: 'Tablero Contrachapado Acacia 250x125x12mm',
        material: 'contrachapado',
        largo: 250, // cm
        ancho: 125, // cm
        espesor: 12, // mm
        precio: 52.00,
        tienda: 'Obramat',
        descripcion: 'Tablero contrachapado de acacia decorativo para mobiliario.'
    },
    {
        id: 'mdf-bricodepot-8mm',
        nombre: 'Tablero MDF 244x122x8mm',
        material: 'MDF',
        largo: 244, // cm
        ancho: 122, // cm
        espesor: 8, // mm
        precio: 28.00,
        tienda: 'BricoDépot',
        descripcion: 'Tablero MDF fino para carpintería ligera.'
    }
];

function obtenerProductosTableros() {
    return PRODUCTOS_TABLEROS;
}

function obtenerProductoTablero(id) {
    return PRODUCTOS_TABLEROS.find(p => p.id === id);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCTOS_TABLEROS, obtenerProductosTableros, obtenerProductoTablero };
}
