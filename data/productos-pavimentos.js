// ==================== BASE DE DATOS DE PRODUCTOS: PAVIMENTOS Y CERÁMICA ====================
const PRODUCTOS_PAVIMENTOS = [
    {
        id: 'gres-33x33',
        nombre: 'Gres Porcelánico 33x33',
        largo: 33.3, // cm
        ancho: 33.3, // cm
        m2PorCaja: 1.55, // m² por caja estándar
        precioCaja: 12.32,
        merma: 10, // %
        tienda: 'Obramat',
        precioM2: 7.95,
        descripcion: 'Gres básico para suelos de interior. Modelo Ter Cotton.'
    },
    {
        id: 'porcelanico-60x60',
        nombre: 'Porcelánico Rectificado 60x60',
        largo: 60, // cm
        ancho: 60, // cm
        m2PorCaja: 1.44,
        precioCaja: 14.33,
        merma: 10,
        tienda: 'Obramat',
        precioM2: 9.95,
        descripcion: 'Formatos grandes para salones y zonas amplias. Modelo Galaxy Grey.'
    },
    {
        id: 'porcelanico-60x60-leroy',
        nombre: 'Porcelánico Rectificado 60x60',
        largo: 60, // cm
        ancho: 60, // cm
        m2PorCaja: 1.44,
        precioCaja: 14.33,
        merma: 10,
        tienda: 'Leroy Merlin',
        precioM2: 9.95,
        descripcion: 'Gres porcelánico rectificado para suelos de interior.'
    },
    {
        id: 'porcelanico-60x60-bricodepot',
        nombre: 'Porcelánico Aruma 60x60',
        largo: 60, // cm
        ancho: 60, // cm
        m2PorCaja: 1.44,
        precioCaja: 12.48,
        merma: 10,
        tienda: 'BricoDépot',
        precioM2: 8.67,
        descripcion: 'Gres porcelánico efecto cemento para interiores.'
    },
    {
        id: 'porcelanico-60x120',
        nombre: 'Porcelánico Rectificado 60x120 Reggio',
        largo: 120, // cm
        ancho: 60, // cm
        m2PorCaja: 1.44,
        precioCaja: 53.27,
        merma: 10,
        tienda: 'Leroy Merlin',
        precioM2: 36.99,
        descripcion: 'Formato grande efecto piedra para salones y zonas nobles.'
    },
    {
        id: 'gres-45x45',
        nombre: 'Gres New Unno 45x45',
        largo: 45, // cm
        ancho: 45, // cm
        m2PorCaja: 1.62,
        precioCaja: 16.18,
        merma: 10,
        tienda: 'Leroy Merlin',
        precioM2: 9.99,
        descripcion: 'Gres porcelánico efecto cemento para interiores.'
    },
    {
        id: 'ceramica-muro-20x60',
        nombre: 'Azulejo Revestimiento 20x60',
        largo: 60, // cm
        ancho: 20, // cm
        m2PorCaja: 1.20,
        precioCaja: 15.60,
        merma: 12,
        tienda: 'BricoDépot',
        precioM2: 13.00,
        descripcion: 'Cerámica ideal para paredes de baños y cocinas.'
    },
    {
        id: 'subway-10x20',
        nombre: 'Azulejo Tipo Metro 10x20',
        largo: 20, // cm
        ancho: 10, // cm
        m2PorCaja: 1.00,
        precioCaja: 22.00,
        merma: 15,
        tienda: 'Leroy Merlin',
        precioM2: 22.00,
        descripcion: 'Clásico azulejo biselado para paredes.'
    },
    {
        id: 'tarima-porcelanica-20x120',
        nombre: 'Tarima Porcelánica 20x120',
        largo: 120, // cm
        ancho: 20, // cm
        m2PorCaja: 1.08,
        precioCaja: 28.50,
        merma: 10,
        tienda: 'Obramat',
        precioM2: 26.39,
        descripcion: 'Efecto madera de alta resistencia.'
    },
    {
        id: 'tarima-porcelanica-23x120-bricodepot',
        nombre: 'Tarima Porcelánica Colton Haya 23x120',
        largo: 120, // cm
        ancho: 23, // cm
        m2PorCaja: 1.10,
        precioCaja: 10.95,
        merma: 10,
        tienda: 'BricoDépot',
        precioM2: 9.95,
        descripcion: 'Efecto madera haya para interiores.'
    },
    {
        id: 'gres-30x120-obramat',
        nombre: 'Gres Carvallo Taupe 30x120',
        largo: 120, // cm
        ancho: 30, // cm
        m2PorCaja: 1.44,
        precioCaja: 14.33,
        merma: 10,
        tienda: 'Obramat',
        precioM2: 9.95,
        descripcion: 'Gres porcelánico efecto madera roble.'
    },
    {
        id: 'gres-austin-grey-obramat',
        nombre: 'Gres Austin Grey 60x60',
        largo: 60, // cm
        ancho: 60, // cm
        m2PorCaja: 1.44,
        precioCaja: 12.89,
        merma: 10,
        tienda: 'Obramat',
        precioM2: 8.95,
        descripcion: 'Gres porcelánico efecto piedra gris.'
    },
    {
        id: 'gres-33x33-ter-cotton',
        nombre: 'Gres Ter Cotton 33x33',
        largo: 33.3, // cm
        ancho: 33.3, // cm
        m2PorCaja: 1.55,
        precioCaja: 12.32,
        merma: 10,
        tienda: 'Obramat',
        precioM2: 7.95,
        descripcion: 'Gres porcelánico efecto cemento en formato cuadrado.'
    },
    {
        id: 'porcelanico-60x60-obramat-economico',
        nombre: 'Porcelánico Galaxy Grey 60x60',
        largo: 60, // cm
        ancho: 60, // cm
        m2PorCaja: 1.44,
        precioCaja: 9.63,
        merma: 10,
        tienda: 'Obramat',
        precioM2: 6.69,
        descripcion: 'Gres porcelánico económico para grandes superficies.'
    }
];

function obtenerProductosPavimentos() {
    return PRODUCTOS_PAVIMENTOS;
}

function obtenerProductoPavimento(id) {
    return PRODUCTOS_PAVIMENTOS.find(p => p.id === id);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCTOS_PAVIMENTOS, obtenerProductosPavimentos, obtenerProductoPavimento };
}
