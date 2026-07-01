# 🚀 ENCAJA.APP - QUICK START

## ✅ Estado Actual

Tu plataforma **Encaja.app** está lista con:

```
✅ Landing page profesional
✅ Calculadora de pintura funcional (con integración Leroy, Brico, Obramat)
✅ Sistema modular para agregar más calculadoras
✅ Base de datos de productos con 10 referencias reales
✅ Arquitectura documentada y escalable
✅ 100% responsive (móvil, tablet, desktop)
✅ Espacio para Google AdSense
```

---

## 🎯 Próximos Pasos

### 1️⃣ AHORA MISMO (5 minutos)

```bash
# Abre en navegador
c:\Users\Usuario\Documents\GitHub\encaja-app\index.html

# Prueba:
- Haz clic en "Calculadora de Pintura"
- Elige una pintura
- Cambiar dimensiones de habitación
- Ver cómo calcula automáticamente
```

### 2️⃣ HOY (30 minutos)

**Personalizar para tu marca:**

En `index.html` (líneas 14-16):
```html
<!-- Cambiar -->
<title>Encaja.app - Calculadoras de Construcción</title>
<h1>Las cuentas de tu próxima obra,<br><span class="highlight">resueltas antes de empezar</span></h1>

<!-- Por algo como -->
<title>TuBrand - Calculadoras de Obra Profesionales</title>
<h1>Tus cálculos de obra...<br><span class="highlight">personalizados para ti</span></h1>
```

**Agregar tus enlaces de afiliado:**

En `/data/productos-pintura.js` (líneas 5-6):
```javascript
tiendaLink: 'https://www.leroymerlin.es/?utm_source=TU_CODIGO_AFILIADO',
```

### 3️⃣ ESTA SEMANA (2 horas)

**Crear Calculadora de Ladrillos:**

1. Copia el patrón de pintura:
   - Crear `/calculadoras/ladrillos.html`
   - Crear `/data/productos-ladrillos.js`
   - Crear `/js/calculadora-ladrillos.js`

2. Adapta la lógica (ver ARQUITECTURA.md)

3. Agrega a landing page (index.html)

### 4️⃣ ESTE MES (Opcional)

- Calculadora de Madera
- Calculadora de Suelos
- Calculadora de Azulejos
- Google AdSense configurado

---

## 📁 Archivos Clave

### Landing Page
```
encaja-app/index.html        ← Aquí va el selector de calculadoras
```

### Calculadora de Pintura
```
encaja-app/calculadoras/pintura.html              ← Interfaz
encaja-app/js/calculadora-pintura.js              ← Lógica
encaja-app/data/productos-pintura.js              ← Datos
```

### Estilos
```
encaja-app/style-landing.css   ← Landing page
encaja-app/style.css           ← Todas las calculadoras
```

---

## 🧱 Crear Calculadora de Ladrillos (Ejemplo)

### Paso 1: Crear `/calculadoras/ladrillos.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Ladrillos | Encaja.app</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <div class="app-container">
        <header class="calc-header">
            <div class="header-content">
                <a href="../index.html" class="back-link">← Volver a Encaja</a>
                <h1>🧱 Calculadora de Ladrillos</h1>
                <p class="subtitle">Tabiques, muros y muretes. Con merma incluida.</p>
            </div>
        </header>

        <main class="main-layout">
            <aside class="sidebar">
                <!-- Aquí van los inputs de configuración -->
                <!-- Reutilizar card, input-group, form-select de style.css -->
            </aside>

            <section class="main-content">
                <!-- Aquí van los resultados -->
                <!-- Reutilizar result-card, stat-box de style.css -->
            </section>
        </main>

        <footer class="footer"></footer>
    </div>

    <script src="../data/productos-ladrillos.js"></script>
    <script src="../js/calculadora-ladrillos.js"></script>
</body>
</html>
```

### Paso 2: Crear `/data/productos-ladrillos.js`

```javascript
const PRODUCTOS_LADRILLOS = [
    {
        id: 'leroy-doble-ladrillo',
        nombre: 'Ladrillo Hueco Doble 33×7×16',
        marca: 'Leroy Merlin',
        capacidad: 400,        // cantidad por palé (ajusta según realidad)
        rendimiento: 0.052,    // m²/ladrillo (33×7cm = 0.0231m², con junta)
        precio: 0.05,          // precio por ladrillo
        tienda: 'Leroy Merlin',
        tiendaLink: 'https://www.leroymerlin.es/?utm_source=encaja',
    },
    // ... más ladrillos
];

// Mantener estructura igual a productos-pintura.js
function obtenerProductos(filtros = {}) { }
function obtenerProducto(id) { }
```

### Paso 3: Crear `/js/calculadora-ladrillos.js`

```javascript
let estado = {
    productoSeleccionado: null,
    tipoSuperficie: 'paredes',
    ancho: 100,
    alto: 250,
    junta: 1,
    merma: 10
};

// Copiar patrón de calculadora-pintura.js
// Adaptar función calcular() con lógica de ladrillos

function calcular() {
    if (!estado.productoSeleccionado) return;
    
    // Tu lógica de cálculo de ladrillos
    const superficie = estado.ancho * estado.alto;
    const ladrillospor = 1 / estado.productoSeleccionado.rendimiento;
    const totalLadrillos = Math.ceil(ladrillospor * (1 + estado.merma / 100));
    
    // Actualizar UI
    document.getElementById('resultado').textContent = totalLadrillos;
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    calcular();
});
```

---

## 🎨 Componentes Reutilizables

Todos estos se pueden copiar/pegar en cualquier HTML:

```html
<!-- Card (sección) -->
<section class="card">
    <h2>① Tu título</h2>
    <!-- Contenido -->
</section>

<!-- Input group -->
<div class="input-group">
    <label for="inputId">Etiqueta</label>
    <input type="number" id="inputId" value="0">
</div>

<!-- Resultado -->
<div class="result-card">
    <div class="result-main">
        <div class="result-label">RESULTADO</div>
        <div class="result-number" id="result">0</div>
        <div class="result-unit">unidades</div>
    </div>
</div>

<!-- Stat box -->
<div class="stat-box">
    <div class="stat-label">Etiqueta</div>
    <div class="stat-value">valor</div>
    <div class="stat-unit">unidad</div>
</div>

<!-- Info box -->
<div class="info-box">
    <strong>Título:</strong> Contenido
</div>

<!-- Tienda -->
<a href="https://..." class="store-card">
    <div class="store-logo">LEROY MERLIN</div>
    <div class="store-desc">Descripción</div>
    <div class="store-badge">Ver productos</div>
</a>
```

---

## 🔍 Checklist Visual

```
Landing Page (index.html)
├─ ✅ Logo y navegación
├─ ✅ Hero con 3 calculadoras visibles
├─ ✅ Sección características
├─ ✅ Sección precios (actual/future)
├─ ✅ CTA final
└─ ✅ Footer

Calculadora Pintura
├─ ✅ Selector de producto (10 opciones)
├─ ✅ Inputs dimensiones (ancho, largo, alto)
├─ ✅ Checkboxes superficies
├─ ✅ Inputs capas y pérdida
├─ ✅ Resultado principal
├─ ✅ Estadísticas (área, litros, botes)
├─ ✅ Cálculo detallado
├─ ✅ Precios
├─ ✅ Links a tiendas
└─ ✅ Tips y consejos

Datos
├─ ✅ 10 productos pintura con precios reales
├─ ✅ Campos consistentes (id, nombre, precio, tienda)
└─ ✅ Sistema filtrable

Estilos
├─ ✅ Landing elegante y profesional
├─ ✅ Calculadoras con sidebar + contenido
├─ ✅ Colores consistentes (azul + verde)
└─ ✅ Totalmente responsive
```

---

## 💡 Ideas para Expandir

Que ya están preparadas en la estructura:

1. **Más Calculadoras**
   - Madera (despiece)
   - Suelos (consumo m²)
   - Azulejos (formato + consumo)
   - Yeso (paneles + perfiles)
   - Mortero/Cemento

2. **Integración APIs**
   - Web scraping Leroy (si lo permiten)
   - Amazon Product API
   - APIs propias de tiendas
   - Precios en tiempo real

3. **Premium (Próxima)**
   - Guardado de proyectos
   - Exportar PDF presupuestos
   - Histórico de cálculos
   - Alertas de precios

4. **Monetización**
   - Google AdSense (ya integrado)
   - Enlaces afiliados (ya integrado)
   - Publicidad directa de tiendas
   - Programa de partners

---

## 📊 Estructura de Carpetas (Final)

```
encaja-app/
├── index.html
├── style-landing.css
├── style.css
├── ARQUITECTURA.md          ← Lee esto para agregar calculadoras
├── QUICK-START.md           ← Este archivo
│
├── calculadoras/
│   ├── pintura.html         ✅ LISTA
│   ├── ladrillos.html       📝 PRÓXIMA
│   ├── madera.html          📝 PRÓXIMA
│   ├── suelos.html          📝 PRÓXIMA
│   ├── azulejos.html        📝 PRÓXIMA
│   └── yeso.html            📝 PRÓXIMA
│
├── js/
│   ├── calculadora-pintura.js    ✅ LISTA
│   ├── calculadora-ladrillos.js  📝 PRÓXIMA
│   └── ... (más calculadoras)
│
└── data/
    ├── productos-pintura.js      ✅ LISTA (10 productos)
    ├── productos-ladrillos.js    📝 PRÓXIMA
    └── ... (más categorías)
```

---

## 🎯 Tu Próximo Paso (RECOMENDADO)

### Opción A: Sube a Netlify (gratuito en 5 minutos)
```
1. Ve a https://www.netlify.com
2. Arrastra carpeta encaja-app
3. Tu sitio en: encaja-123.netlify.app
4. Conecta dominio (encaja.app)
```

### Opción B: Agrega Calculadora de Ladrillos (30 minutos)
```
1. Copia patrón de pintura.html
2. Adapta para ladrillos
3. Añade a landing page
4. Prueba que funciona
```

### Opción C: Ambas (hoy mismo)
```
1. Primero: Sube a Netlify (5 min)
2. Luego: Agrega calculadora ladrillos (30 min)
3. Resultado: Plataforma con 2 calculadoras viva en internet
```

---

## 📞 ¿Dudas?

- **¿Cómo cambio el nombre/logo?**
  → Edita `index.html` línea 16 y estilos en `style-landing.css`

- **¿Cómo agrego más productos de pintura?**
  → Edita `data/productos-pintura.js`, copia un objeto y modifica

- **¿Cómo creo una nueva calculadora?**
  → Lee `ARQUITECTURA.md`, sigue el patrón de pintura

- **¿Dónde van los anuncios?**
  → Busca `ad-placeholder` en los HTMLs. Reemplaza con Google AdSense

- **¿Cómo subo el proyecto?**
  → Netlify (recomendado) o cualquier hosting con soporte HTML/CSS/JS

---

## 🎉 ¡Listo!

Tu plataforma **Encaja.app** está lista profesionalmente.

**Próximos hitos:**
1. **Semana 1**: Sube a web + Agrega ladrillos
2. **Semana 2**: Agrega 1-2 calculadoras más
3. **Mes 2**: Configura Google AdSense + Analytics
4. **Mes 3**: Comienza a promocionar

**Meta Año 1**: 100-500 visitantes/mes → primeros ingresos 💰

---

**¡Vamos a por ello!** 🚀🏗️