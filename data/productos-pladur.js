// ==================== BASE DE DATOS DE PRODUCTOS: PLADUR Y PERFILES ====================
const PRODUCTOS_PLADUR = [
    {
        id: 'placa-erGO-leroy',
        nombre: 'Placa Yeso erGO 120x260x12.5mm',
        tipo: 'estandar',
        largo: 260, // cm
        ancho: 120, // cm
        espesor: 12.5, // mm
        precioM2: 2.78,
        precioUd: 8.34,
        tienda: 'Leroy Merlin',
        descripcion: 'Placa de yeso laminado estándar para tabiques y techos.'
    },
    {
        id: 'placa-erGO-leroy-7mm',
        nombre: 'Placa Yeso erGO 120x260x7mm',
        tipo: 'estandar',
        largo: 260, // cm
        ancho: 120, // cm
        espesor: 7, // mm
        precioM2: 2.78,
        precioUd: 6.66,
        tienda: 'Leroy Merlin',
        descripcion: 'Placa de yeso laminado fino para tabiques ligeros.'
    },
    {
        id: 'placa-ppm-ignifuga-leroy',
        nombre: 'Placa PPM Ignífuga 120x200x12.5mm',
        tipo: 'ignifugo',
        largo: 200, // cm
        ancho: 120, // cm
        espesor: 12.5, // mm
        precioM2: 6.82,
        precioUd: 16.37,
        tienda: 'Leroy Merlin',
        descripcion: 'Placa de yeso ignífuga con fibra de vidrio para protección contra incendios.'
    },
    {
        id: 'placa-ppf-15mm-leroy',
        nombre: 'Placa PPF 15mm 120x200x15mm',
        tipo: 'estandar',
        largo: 200, // cm
        ancho: 120, // cm
        espesor: 15, // mm
        precioM2: 7.21,
        precioUd: 21.64,
        tienda: 'Leroy Merlin',
        descripcion: 'Placa de yeso de 15mm para mayor rigidez y aislamiento.'
    },
    {
        id: 'placa-phonique-acustica-leroy',
        nombre: 'Placa Phonique Acústica 120x300x12.5mm',
        tipo: 'acustico',
        largo: 300, // cm
        ancho: 120, // cm
        espesor: 12.5, // mm
        precioM2: 6.95,
        precioUd: 25.01,
        tienda: 'Leroy Merlin',
        descripcion: 'Placa acústica de yeso para aislamiento sonoro en tabiques.'
    },
    {
        id: 'placa-aquaroc-hidrofuga-leroy',
        nombre: 'Placa Aquaroc Hidrófuga 120x200x12.5mm',
        tipo: 'hidrofugo',
        largo: 200, // cm
        ancho: 120, // cm
        espesor: 12.5, // mm
        precioM2: 31.00,
        precioUd: 92.99,
        tienda: 'Leroy Merlin',
        descripcion: 'Placa de yeso hidrófuga resistente a la humedad para baños y cocinas.'
    },
    {
        id: 'placa-l-tec-bricodepot',
        nombre: 'Placa L-Tec 120x250x12.5mm',
        tipo: 'estandar',
        largo: 250, // cm
        ancho: 120, // cm
        espesor: 12.5, // mm
        precioM2: 3.99,
        precioUd: 11.97,
        tienda: 'BricoDépot',
        descripcion: 'Placa de yeso laminado estándar para tabiques interiores.'
    },
    {
        id: 'placa-hidrofuga-bricodepot',
        nombre: 'Placa Hidrófuga 120x250x12.5mm',
        tipo: 'hidrofugo',
        largo: 250, // cm
        ancho: 120, // cm
        espesor: 12.5, // mm
        precioM2: 28.58,
        precioUd: 85.74,
        tienda: 'BricoDépot',
        descripcion: 'Placa de yeso hidrófuga para zonas húmedas.'
    },
    {
        id: 'placa-ba-obramat',
        nombre: 'Placa BA 120x260x12.5mm',
        tipo: 'estandar',
        largo: 260, // cm
        ancho: 120, // cm
        espesor: 12.5, // mm
        precioM2: 3.05,
        precioUd: 1.60,
        tienda: 'Obramat',
        descripcion: 'Placa de yeso laminado básica para tabiques económicos.'
    },
    {
        id: 'placa-4pro-obramat',
        nombre: 'Placa 4PRO 120x260x12.5mm',
        tipo: 'estandar',
        largo: 260, // cm
        ancho: 120, // cm
        espesor: 12.5, // mm
        precioM2: 3.05,
        precioUd: 9.52,
        tienda: 'Obramat',
        descripcion: 'Placa de yeso profesional para obra nueva.'
    },
    {
        id: 'perfil-montante-48x30-leroy',
        nombre: 'Perfil Montante 48x30x3000mm',
        tipo: 'perfil',
        largo: 300, // cm
        ancho: 4.8, // cm
        espesor: 0.6, // mm
        precioM2: null,
        precioUd: 2.03,
        tienda: 'Leroy Merlin',
        descripcion: 'Perfil metálico montante de 48x30 para tabiquería en seco.'
    },
    {
        id: 'perfil-montante-70mm-leroy',
        nombre: 'Perfil Montante 70x30x3000mm',
        tipo: 'perfil',
        largo: 300, // cm
        ancho: 7, // cm
        espesor: 0.6, // mm
        precioM2: null,
        precioUd: 4.55,
        tienda: 'Leroy Merlin',
        descripcion: 'Perfil montante de 70mm para tabiques con mayor aislamiento.'
    },
    {
        id: 'perfil-techo-f530-leroy',
        nombre: 'Perfil Techo F530 3600mm',
        tipo: 'perfil',
        largo: 360, // cm
        ancho: 4.8, // cm
        espesor: 0.6, // mm
        precioM2: null,
        precioUd: 7.30,
        tienda: 'Leroy Merlin',
        descripcion: 'Perfil metálico para techos continuos de pladur.'
    },
    {
        id: 'perfil-canal-48x30-leroy',
        nombre: 'Perfil Canal 48x30x3000mm',
        tipo: 'perfil',
        largo: 300, // cm
        ancho: 4.8, // cm
        espesor: 0.6, // mm
        precioM2: null,
        precioUd: 2.10,
        tienda: 'Leroy Merlin',
        descripcion: 'Perfil canal para guía inferior y superior de tabiques de pladur.'
    }
];

function obtenerProductosPladur() {
    return PRODUCTOS_PLADUR;
}

function obtenerProductoPladur(id) {
    return PRODUCTOS_PLADUR.find(p => p.id === id);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCTOS_PLADUR, obtenerProductosPladur, obtenerProductoPladur };
}
