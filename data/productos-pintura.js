// ==================== BASE DE DATOS DE PRODUCTOS ====================
// Sistema flexible para integrar APIs reales después (Leroy, Amazon, etc.)

const PRODUCTOS_PINTURA = [
    {
        id: 'leroy-plastica-mate-4L',
        nombre: 'Pintura Plástica Mate Blanca',
        marca: 'Leroy Merlin CPP',
        capacidad: 4, // litros
        rendimiento: 12, // m² por litro (estimado)
        precio: 12.00,
        tienda: 'Leroy Merlin',
        tiendaLink: 'https://www.leroymerlin.es/productos/pinturas',
        color: '#ffffff',
        tipo: 'plastica',
        interior: true,
        exterior: false,
        descripcion: 'Pintura plástica mate para interiores'
    },
    {
        id: 'leroy-kroma-satinada-4L',
        nombre: 'Pintura Kroma Satinada Blanca',
        marca: 'Leroy Merlin Kroma',
        capacidad: 4,
        rendimiento: 13,
        precio: 14.00,
        tienda: 'Leroy Merlin',
        tiendaLink: 'https://www.leroymerlin.es/productos/pinturas',
        color: '#ffffff',
        tipo: 'satinada',
        interior: true,
        exterior: false,
        descripcion: 'Pintura satinada de alta calidad para interiores'
    },
    {
        id: 'leroy-exterior-blanca-10L',
        nombre: 'Pintura Exterior Blanca',
        marca: 'Leroy Merlin Exterior',
        capacidad: 10, // litros
        rendimiento: 10, // m² por litro (exterior = menor rendimiento)
        precio: 45.99,
        tienda: 'Leroy Merlin',
        tiendaLink: 'https://www.leroymerlin.es/productos/pinturas',
        color: '#ffffff',
        tipo: 'exterior',
        interior: false,
        exterior: true,
        descripcion: 'Pintura para fachadas y exteriores'
    },
    {
        id: 'leroy-anti-humedad-blanca-5L',
        nombre: 'Pintura Anti-Humedad',
        marca: 'Leroy Merlin Professional',
        capacidad: 5,
        rendimiento: 10,
        precio: 24.99,
        tienda: 'Leroy Merlin',
        tiendaLink: 'https://www.leroymerlin.es/productos/pinturas',
        color: '#ffffff',
        tipo: 'anti-humedad',
        interior: true,
        exterior: false,
        descripcion: 'Pintura especial resistente a la humedad'
    },
    {
        id: 'brico-antimoho-4L',
        nombre: 'Pintura Antimoho Blanca',
        marca: 'BricoDépot Antimoho',
        capacidad: 4,
        rendimiento: 11,
        precio: 12.95,
        tienda: 'BricoDépot',
        tiendaLink: 'https://www.bricodepot.com/productos/pinturas',
        color: '#ffffff',
        tipo: 'antimoho',
        interior: true,
        exterior: false,
        descripcion: 'Pintura antimoho para baños y cocinas'
    },
    {
        id: 'brico-interior-satinada-15L',
        nombre: 'Pintura Interior Satinada Blanca',
        marca: 'BricoDépot Interior',
        capacidad: 15,
        rendimiento: 14,
        precio: 25.00,
        tienda: 'BricoDépot',
        tiendaLink: 'https://www.bricodepot.com/productos/pinturas',
        color: '#ffffff',
        tipo: 'satinada',
        interior: true,
        exterior: false,
        descripcion: 'Pintura satinada para interiores en formato grande'
    },
    {
        id: 'brico-profesional-blanca-20L',
        nombre: 'Pintura Profesional Blanca',
        marca: 'BricoDépot Pro',
        capacidad: 20,
        rendimiento: 15,
        precio: 55.99,
        tienda: 'BricoDépot',
        tiendaLink: 'https://www.bricodepot.com/productos/pinturas',
        color: '#ffffff',
        tipo: 'profesional',
        interior: true,
        exterior: false,
        descripcion: 'Pintura profesional de alto rendimiento'
    },
    {
        id: 'obramat-l5000-4L',
        nombre: 'Pintura L5000 Blanca',
        marca: 'Obramat L5000',
        capacidad: 4,
        rendimiento: 12,
        precio: 15.00,
        tienda: 'Obramat',
        tiendaLink: 'https://www.obramat.es/productos/pinturas',
        color: '#ffffff',
        tipo: 'plastica',
        interior: true,
        exterior: false,
        descripcion: 'Pintura plástica de alta calidad para interiores'
    },
    {
        id: 'obramat-l5000-15L',
        nombre: 'Pintura L5000 Blanca 15L',
        marca: 'Obramat L5000',
        capacidad: 15,
        rendimiento: 14,
        precio: 43.00,
        tienda: 'Obramat',
        tiendaLink: 'https://www.obramat.es/productos/pinturas',
        color: '#ffffff',
        tipo: 'plastica',
        interior: true,
        exterior: false,
        descripcion: 'Pintura plástica de alta calidad en formato económico'
    },
    {
        id: 'obramat-l3000-14L',
        nombre: 'Pintura L3000 Blanca 14L',
        marca: 'Obramat L3000',
        capacidad: 14,
        rendimiento: 13,
        precio: 31.00,
        tienda: 'Obramat',
        tiendaLink: 'https://www.obramat.es/productos/pinturas',
        color: '#ffffff',
        tipo: 'plastica',
        interior: true,
        exterior: false,
        descripcion: 'Pintura plástica de calidad media para interiores'
    },
    {
        id: 'obramat-l2000-14L',
        nombre: 'Pintura L2000 Blanca 14L',
        marca: 'Obramat L2000',
        capacidad: 14,
        rendimiento: 12,
        precio: 23.00,
        tienda: 'Obramat',
        tiendaLink: 'https://www.obramat.es/productos/pinturas',
        color: '#ffffff',
        tipo: 'plastica',
        interior: true,
        exterior: false,
        descripcion: 'Pintura plástica económica para obras'
    },
    {
        id: 'obramat-maxima-cubricion-15L',
        nombre: 'Pintura Máxima Cubrición Blanca 15L',
        marca: 'Obramat Máxima Cubrición',
        capacidad: 15,
        rendimiento: 15,
        precio: 29.00,
        tienda: 'Obramat',
        tiendaLink: 'https://www.obramat.es/productos/pinturas',
        color: '#ffffff',
        tipo: 'plastica',
        interior: true,
        exterior: false,
        descripcion: 'Pintura de máxima cubrición para renovación'
    },
    {
        id: 'obramat-pro40-20kg',
        nombre: 'Pintura PRO-40 Blanca 20kg',
        marca: 'Obramat PRO-40',
        capacidad: 20,
        rendimiento: 8,
        precio: 33.50,
        tienda: 'Obramat',
        tiendaLink: 'https://www.obramat.es/productos/pinturas',
        color: '#ffffff',
        tipo: 'profesional',
        interior: true,
        exterior: true,
        descripcion: 'Pintura profesional para interior y exterior en polvo'
    },
    {
        id: 'obramat-piscinas-15L',
        nombre: 'Pintura para Piscinas Blanca 15L',
        marca: 'Obramat Piscinas',
        capacidad: 15,
        rendimiento: 10,
        precio: 47.00,
        tienda: 'Obramat',
        tiendaLink: 'https://www.obramat.es/productos/pinturas',
        color: '#ffffff',
        tipo: 'piscina',
        interior: false,
        exterior: true,
        descripcion: 'Pintura especial para piscinas y depósitos de agua'
    },
    {
        id: 'obramat-exterior-blanca-15L',
        nombre: 'Pintura Exterior Blanca 15L',
        marca: 'Obramat Exterior',
        capacidad: 15,
        rendimiento: 10,
        precio: 39.00,
        tienda: 'Obramat',
        tiendaLink: 'https://www.obramat.es/productos/pinturas',
        color: '#ffffff',
        tipo: 'exterior',
        interior: false,
        exterior: true,
        descripcion: 'Pintura para fachadas y exteriores'
    }
];

// Función para obtener productos por filtro
function obtenerProductos(filtros = {}) {
    let productos = PRODUCTOS_PINTURA;

    if (filtros.interior !== undefined) {
        productos = productos.filter(p => p.interior === filtros.interior);
    }

    if (filtros.exterior !== undefined) {
        productos = productos.filter(p => p.exterior === filtros.exterior);
    }

    if (filtros.tienda) {
        productos = productos.filter(p => p.tienda === filtros.tienda);
    }

    return productos;
}

// Función para obtener un producto por ID
function obtenerProducto(id) {
    return PRODUCTOS_PINTURA.find(p => p.id === id);
}

// Exportar para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCTOS_PINTURA, obtenerProductos, obtenerProducto };
}
