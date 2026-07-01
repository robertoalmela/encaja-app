# 🏗️ Encaja.app - Documentación de Arquitectura

## 📋 Descripción General

**Encaja.app** es una plataforma escalable de calculadoras para construcción y reformas.

**Claim**: "Las cuentas de tu próxima obra, resueltas antes de empezar."

**Características**:
- Multi-calculadora (ladrillos, pintura, madera, suelos, azulejos, etc.)
- Integración con tiendas online (Leroy Merlin, BricoDépot, Obramat)
- 100% privado (sin guardar datos)
- 100% gratis
- Sistema modular y escalable

---

## 📁 Estructura de Carpetas

```
encaja-app/
├── index.html                 # Landing page principal
├── style-landing.css          # Estilos landing page
├── style.css                  # Estilos globales para calculadoras
│
├── calculadoras/
│   ├── pintura.html          # Calculadora de pintura
│   ├── ladrillos.html        # Calculadora de ladrillos (próxima)
│   ├── madera.html           # Calculadora de madera (próxima)
│   ├── suelos.html           # Calculadora de suelos (próxima)
│   ├── azulejos.html         # Calculadora de azulejos (próxima)
│   └── yeso.html             # Calculadora de yeso/escayola (próxima)
│
├── js/
│   ├── app.js                # Sistema central (navegación, eventos globales)
│   ├── calculadora-pintura.js # Lógica calculadora de pintura
│   ├── calculadora-ladrillos.js
│   ├── calculadora-madera.js
│   └── ... (una por cada calculadora)
│
├── data/
│   ├── productos-pintura.js  # BD productos pintura (Leroy, Brico, Obramat)
│   ├── productos-madera.js   # BD productos madera
│   ├── productos-suelos.js   # BD productos suelos
│   └── ... (una por cada categoría)
│
└── README.md                  # Este archivo
```

---

## 🎨 Sistema de Diseño

### Colores
```css
--primary: #2563eb       (Azul - acciones principales)
--secondary: #10b981     (Verde - éxito/confirmación)
--accent: #f59e0b        (Ámbar - atención)
--bg-dark: #0f172a       (Fondos oscuros)
--text-light: #64748b    (Texto secundario)
```

### Tipografía
- **Poppins**: Encabezados y interfaz
- **System fonts**: Texto de cuerpo

### Componentes Reutilizables
- `.card`: Contenedor de sección
- `.result-card`: Tarjeta de resultados
- `.btn`: Botones
- `.stat-box`: Caja de estadísticas
- `.info-box`: Cuadro de información

---

## 🧮 Arquitectura de Calculadoras

### 1. Estructura de Archivo HTML

**Patrón**: `/calculadoras/[nombre].html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Meta tags, title, estilos -->
    <title>Calculadora de [Nombre] | Encaja.app</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <div class="app-container">
        <header class="calc-header">
            <!-- Back link y título -->
        </header>
        <main class="main-layout">
            <!-- Sidebar: inputs/configuración -->
            <!-- Main content: resultados -->
        </main>
        <footer class="footer"></footer>
    </div>
    <!-- Scripts -->
    <script src="../data/productos-[categoria].js"></script>
    <script src="../js/calculadora-[nombre].js"></script>
</body>
</html>
```

### 2. Estructura de Archivo JS

**Patrón**: `/js/calculadora-[nombre].js`

```javascript
// ==================== STATE ====================
let estado = {
    // Variables de entrada del usuario
    parametro1: valor,
    parametro2: valor
};

// ==================== DOM ELEMENTS ====================
const elemento1 = document.getElementById('elementId');
// ... más elementos

// ==================== EVENT LISTENERS ====================
elemento1.addEventListener('change', (e) => {
    estado.parametro1 = e.target.value;
    calcular();
});

// ==================== FUNCIONES PRINCIPALES ====================
function calcular() {
    // Lógica de cálculo
    // Actualizar UI con resultados
}

function inicializar() {
    // Setup inicial
    // Poblar selects si es necesario
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', inicializar);
```

### 3. Estructura de BD de Productos

**Patrón**: `/data/productos-[categoria].js`

```javascript
const PRODUCTOS_[CATEGORIA] = [
    {
        id: 'leroy-producto-1',
        nombre: 'Nombre del producto',
        marca: 'Marca',
        capacidad: 4,              // Unidad principal (litros, piezas, m², etc)
        rendimiento: 12,           // m² por capacidad, piezas por m², etc
        precio: 12.99,
        tienda: 'Leroy Merlin',
        tiendaLink: 'https://...',
        // Propiedades específicas según categoría
    }
    // Más productos...
];

function obtenerProductos(filtros = {}) {
    // Devuelve productos filtrados
}

function obtenerProducto(id) {
    // Devuelve un producto por ID
}
```

---

## 🚀 Cómo Agregar una Nueva Calculadora

### Paso 1: Crear archivo HTML

Crear `/calculadoras/[nombre].html` con la estructura HTML básica.

### Paso 2: Crear archivo de datos

Crear `/data/productos-[categoria].js` con la base de datos de productos.

**Importante**: 
- Mantener consistencia con campos: `id`, `nombre`, `marca`, `precio`, `tienda`
- Agregar campos específicos según la categoría (rendimiento, capacidad, etc.)

### Paso 3: Crear lógica JavaScript

Crear `/js/calculadora-[nombre].js` con:
- State object
- Event listeners
- Función `calcular()`
- Función `inicializar()`

### Paso 4: Agregar a landing page

En `index.html`, dentro de `.calculadoras-grid`, agregar tarjeta:

```html
<a href="calculadoras/[nombre].html" class="calc-card">
    <div class="calc-icon">[emoji]</div>
    <h3>[Nombre]</h3>
    <p>[Descripción]</p>
    <div class="calc-features">
        <span>Feature 1</span>
        <span>Feature 2</span>
    </div>
    <div class="calc-cta">Usar Calculadora →</div>
</a>
```

---

## 📊 Estructura de Estado (State Management)

Cada calculadora mantiene su propio objeto `estado`:

```javascript
let estado = {
    parametro1: valor,
    parametro2: valor,
    // ...
};
```

**Ventajas**:
- Simple y sin dependencias
- Fácil de debugguear
- Escalable para pequeñas apps

**Mejora futura**: Migraría a Vuex o Pinia si crecemos.

---

## 🔌 Integración con APIs Externas

### Actualmente

Las BDs de productos son **mock/estáticas**. 

### Próximas Mejoras

```javascript
// Opción 1: Scraping con servidor Node
async function obtenerProductosLeroy(query) {
    const response = await fetch('/api/leroy-search', {
        method: 'POST',
        body: JSON.stringify({ query })
    });
    return await response.json();
}

// Opción 2: Amazon Product Advertising API
async function obtenerProductosAmazon(asin) {
    const response = await fetch('/api/amazon', {
        method: 'GET',
        headers: { 'x-api-key': API_KEY }
    });
    return await response.json();
}

// Opción 3: APIs propias de tiendas (si las proporcionan)
```

---

## 📱 Responsive Design

Todos los componentes son mobile-first:

```css
/* Mobile por defecto */
.sidebar {
    width: 100%;
}

/* Tablet y desktop */
@media (min-width: 1024px) {
    .main-layout {
        grid-template-columns: 350px 1fr;
    }
}
```

---

## 🎯 Checklist para Nueva Calculadora

- [ ] HTML con estructura base
- [ ] Estilos CSS (reutilizar existentes)
- [ ] Base de datos de productos
- [ ] Lógica de cálculo en JS
- [ ] Función `calcular()` para updates en tiempo real
- [ ] Función `inicializar()` para setup
- [ ] Integración con tiendas (links de búsqueda)
- [ ] Añadir a landing page
- [ ] Testing en desktop + mobile
- [ ] SEO (meta tags, keywords)

---

## 🔐 Privacidad y Datos

**Encaja.app es 100% client-side**:
- ❌ NO guarda datos en servidor
- ❌ NO requiere login
- ❌ NO recoge datos personales

**Cálculos**:
- Ocurren en el navegador del usuario
- Se pierden al cerrar pestaña
- Privado por defecto

---

## 📈 Analytics y Tracking

Para seguimiento (sin violar privacidad):

```javascript
// Registrar cuando se completa un cálculo
gtag('event', 'calculate', {
    'event_category': 'engagement',
    'calculator': 'pintura',
    'resultado': 5,
    'producto_seleccionado': 'leroy-acrílica'
});

// Registrar clicks en tiendas
gtag('event', 'click_store', {
    'event_category': 'conversion',
    'store': 'leroy-merlin'
});
```

---

## 🌍 Multiidioma (Próximo)

Estructura preparada para i18n:

```javascript
const i18n = {
    es: {
        'sidebar.titulo': '① Selecciona tu pintura',
        'result.label': 'TOTAL A COMPRAR'
    },
    en: {
        'sidebar.titulo': '① Select your paint',
        'result.label': 'TOTAL TO BUY'
    }
};
```

---

## 🚀 Próximas Características

### Corto plazo
- [ ] Calculadora de madera (despiece con anidación)
- [ ] Calculadora de suelos (con juntas)
- [ ] Calculadora de azulejos
- [ ] Exportar resultados a PDF

### Mediano plazo
- [ ] Presupuestos guardados (localStorage)
- [ ] Newsletter con tips
- [ ] Blog integrado
- [ ] Programa de afiliados propio

### Largo plazo
- [ ] App móvil nativa
- [ ] API para partners
- [ ] Integración en tiendas
- [ ] Histórico de precios

---

## 📞 Soporte para Desarrolladores

### Preguntas Frecuentes

**P: ¿Cómo agrego un producto a la BD?**
```javascript
// En /data/productos-[categoria].js
const PRODUCTOS_[CATEGORIA] = [
    {
        id: 'tienda-marca-codigo',
        nombre: 'Nombre exacto',
        // ... más campos
    }
];
```

**P: ¿Cómo cambio los colores?**
```css
/* En style.css, sección :root */
:root {
    --primary: #tu-color;
}
```

**P: ¿Cómo hago el cálculo en tiempo real?**
```javascript
// Agregar event listeners a todos los inputs
input.addEventListener('change', calcular);
input.addEventListener('input', calcular); // Para números
```

---

## 📄 Licencia y Créditos

**Encaja.app** © 2024 - Todos los derechos reservados

### Librerías utilizadas
- Google Fonts (Poppins)
- Ninguna otra dependencia (vanilla JS/CSS)

---

## 📞 Contacto

Para reportar bugs o sugerencias:
- GitHub Issues
- Email: dev@encaja.app
- Twitter: @encaja_app

---

**Mantén la calidad. Mantén simple. Escala cuando sea necesario.** 🚀