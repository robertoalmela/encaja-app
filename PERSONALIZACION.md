# 🎨 GUÍA DE CUSTOMIZACIÓN - ENCAJA.APP

## Tu Brand vs Encaja.app

Este documento te ayuda a transformar "Encaja.app" en tu propia marca mientras mantienes toda la funcionalidad.

---

## 1️⃣ NOMBRE Y TAGLINE

### Archivos a editar:
- `index.html`
- `style-landing.css`
- `calculadoras/*.html` (todos)

### Cambios específicos:

#### En `index.html` (líneas 1-30):
```html
<!-- ANTES -->
<title>Encaja.app - Calculadoras de Construcción</title>

<!-- DESPUÉS (tu marca) -->
<title>TuBrand - Calculadoras de Obra Profesionales</title>
```

```html
<!-- ANTES (línea 16) -->
<h1>Las cuentas de tu próxima obra,<br><span class="highlight">resueltas antes de empezar</span></h1>

<!-- DESPUÉS -->
<h1>Tus cálculos de obra,<br><span class="highlight">hechos en segundos</span></h1>
```

#### En cada `/calculadoras/*.html`:
```html
<!-- ANTES (línea 15) -->
<a href="../index.html" class="back-link">← Volver a Encaja</a>

<!-- DESPUÉS -->
<a href="../index.html" class="back-link">← Volver a TuBrand</a>
```

---

## 2️⃣ COLORES

### Archivo principal:
```
style-landing.css     (líneas 1-20 y donde se usa)
style.css             (líneas 1-15 - variables CSS)
```

### Variables a cambiar (en ambos archivos):

```css
:root {
    /* ANTES */
    --primary: #2563eb;        /* Azul */
    --secondary: #10b981;      /* Verde */
    --accent: #f59e0b;         /* Ámbar */

    /* DESPUÉS - elige tus colores */
    --primary: #FF6B6B;        /* Rojo vivo (ejemplo) */
    --secondary: #4ECDC4;      /* Turquesa (ejemplo) */
    --accent: #FFE66D;         /* Amarillo (ejemplo) */
}
```

### Paletas recomendadas:

#### Opción 1: Profesional (Servicios)
```css
--primary: #1e3a8a;      /* Azul oscuro */
--secondary: #0891b2;    /* Cian */
--accent: #d97706;       /* Ámbar */
```

#### Opción 2: Energético (Startup)
```css
--primary: #dc2626;      /* Rojo */
--secondary: #16a34a;    /* Verde */
--accent: #f59e0b;       /* Ámbar */
```

#### Opción 3: Premium (Lujo)
```css
--primary: #7c3aed;      /* Púrpura */
--secondary: #06b6d4;    /* Cian */
--accent: #fbbf24;       /* Oro */
```

#### Opción 4: Minimalista (Tech)
```css
--primary: #111827;      /* Negro profundo */
--secondary: #6366f1;    /* Índigo */
--accent: #ec4899;       /* Rosa */
```

### Verificar cambios:
```
1. Abre index.html
2. Busca "Encaja" en el CSS (Ctrl+F)
3. Verifica que todos los colores coinciden
4. Prueba responsividad en mobile
```

---

## 3️⃣ LOGO Y FAVICON

### Cambiar Logo (en la navbar):

#### En `index.html` (línea 17):
```html
<!-- ANTES -->
<a href="/" class="logo">⚙️ Encaja.app</a>

<!-- DESPUÉS (opción 1: emoji) -->
<a href="/" class="logo">🔨 TuBrand</a>

<!-- DESPUÉS (opción 2: texto solo) -->
<a href="/" class="logo">TuBrand</a>

<!-- DESPUÉS (opción 3: imagen) -->
<a href="/" class="logo"><img src="images/logo.png" alt="Logo"></a>
```

Si usas imagen, ajusta en `style-landing.css`:
```css
.logo img {
    height: 32px;
    width: auto;
    margin-right: 8px;
}
```

### Favicon (pestaña del navegador):

#### En `index.html` (dentro de `<head>`):
```html
<!-- ANTES (sin favicon específico) -->

<!-- DESPUÉS -->
<link rel="icon" type="image/png" href="images/favicon.png">
<!-- O emoji -->
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>🔨</text></svg>">
```

---

## 4️⃣ TEXTOS Y COPY

### Cambios por sección:

#### Hero Section (index.html línea 60+):
```html
<!-- ANTES -->
<div class="hero-stats">
    <div class="stat">
        <div class="stat-number">50k+</div>
        <div class="stat-label">Cálculos realizados</div>
    </div>
</div>

<!-- DESPUÉS (tus números) -->
<div class="hero-stats">
    <div class="stat">
        <div class="stat-number">10k+</div>
        <div class="stat-label">Usuarios activos</div>
    </div>
</div>
```

#### Descripciones de Calculadoras (index.html línea 100+):
```html
<!-- ANTES -->
<a href="calculadoras/pintura.html" class="calc-card">
    <div class="calc-icon">🎨</div>
    <h3>Pintura</h3>
    <p>Calcula botes exactos con productos reales de tiendas.</p>
</a>

<!-- DESPUÉS (personalizado) -->
<a href="calculadoras/pintura.html" class="calc-card">
    <div class="calc-icon">🎨</div>
    <h3>Cálculo de Pintura</h3>
    <p>Evita comprar de más. Botes exactos para tu habitación.</p>
</a>
```

#### Sección Features (index.html línea 130+):
```html
<!-- ANTES -->
<h3>Cálculos precisos</h3>
<p>Basados en especificaciones reales de productos.</p>

<!-- DESPUÉS -->
<h3>Precisión garantizada</h3>
<p>Algoritmos verificados por profesionales del sector.</p>
```

---

## 5️⃣ INTEGRACIÓN CON TUS AFILIADOS

### Cambiar links de tiendas:

#### En `data/productos-pintura.js` (todas las líneas con tiendaLink):
```javascript
/* ANTES */
{
    nombre: "...",
    tienda: "Leroy Merlin",
    tiendaLink: "https://www.leroymerlin.es/?utm_source=encaja&utm_medium=calculator",
}

/* DESPUÉS - agregar tu código de afiliado */
{
    nombre: "...",
    tienda: "Leroy Merlin",
    tiendaLink: "https://www.leroymerlin.es/?utm_source=TU_CODIGO_AFILIADO&utm_medium=calculator&utm_campaign=encaja-calc",
}
```

### Obtener códigos de afiliado:

1. **Leroy Merlin Afiliados**
   - https://programas.leroy-merlin.es/
   - Registra tu email
   - Te dan ID de afiliado
   - Usa en URLs: `?utm_source=tu_id`

2. **Amazon Afiliados**
   - https://afiliados.amazon.es/
   - Obtén ASIN de productos
   - Usa en URLs: `amazon.es/dp/B0XXXXX?tag=tu_tag`

3. **Otros**
   - Contacta directamente a tiendas para programa de afiliados

---

## 6️⃣ PUBLICIDAD (Google AdSense)

### Dónde van los anuncios:

Ya hay espacios preparados en el HTML. Solo necesitas:

1. **Registrarse en Google AdSense**
   - https://www.google.com/adsense/
   - Necesitas tráfico de sitio
   - Google revisa en 24h

2. **Obtener tu Google Publisher ID**
   - Ejemplo: `ca-pub-1234567890123456`

3. **Reemplazar placeholders:**

#### En `index.html` (busca `ad-placeholder`):
```html
<!-- ANTES -->
<div class="ad-placeholder">
    <!-- Google AdSense aquí -->
</div>

<!-- DESPUÉS -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="auto"
     data-ad-client="ca-pub-XXXXXXXXXX"
     data-ad-slot="1234567890"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

#### En cada `/calculadoras/*.html`:
```html
<!-- Similar arriba en Google AdSense -->
```

---

## 7️⃣ EMAIL Y CONTACTO

### Newsletter/Contact Form:

#### En `index.html` - CTA section (línea 200+):
```html
<!-- ANTES -->
<h2>¿Listo para calcular?</h2>

<!-- DESPUÉS - Agregar formulario -->
<h2>Recibe tips de construcción en tu email</h2>
<form name="newsletter" method="POST" netlify>
    <input type="email" name="email" placeholder="tu@email.com" required>
    <button type="submit">Suscribirse</button>
</form>
```

**Nota**: Si usas Netlify, automáticamente recibos los datos en tu dashboard.

### Email de contacto en footer:

```html
<!-- En footer -->
<p>
    © 2024 TuBrand - 
    <a href="mailto:soporte@tubrand.com">Soporte</a> | 
    <a href="/privacidad">Privacidad</a>
</p>
```

---

## 8️⃣ FOTOS/IMÁGENES

### Crear carpeta de imágenes:
```
encaja-app/
├── images/
│   ├── logo.png
│   ├── favicon.png
│   ├── header-bg.jpg
│   └── feature-1.svg
```

### Agregar imagen de fondo:

En `style-landing.css`:
```css
.calc-header {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    background-image: 
        linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9)),
        url('../images/header-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

---

## 9️⃣ PRIVACIDAD Y LEGALES

### Crear `/privacidad.html`:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <title>Privacidad | TuBrand</title>
</head>
<body>
    <h1>Política de Privacidad</h1>
    <p>TuBrand no recopila datos personales...</p>
    
    <h2>Cookies</h2>
    <p>Solo usamos Google Analytics para análisis anónimos...</p>
    
    <h2>Tus derechos</h2>
    <p>Puedes contactarnos en: soporte@tubrand.com</p>
</body>
</html>
```

### Agregar link en footer:
```html
<a href="/privacidad.html">Privacidad</a>
```

---

## 🔟 SEO BÁSICO

### Meta tags en `index.html`:

```html
<head>
    <!-- ANTES -->
    <meta name="description" content="Encaja.app - Calculadoras online para construcción">

    <!-- DESPUÉS -->
    <meta name="description" content="TuBrand - Calcula materiales de construcción en segundos. Pintura, ladrillos, madera.">
    <meta name="keywords" content="calculadora, construcción, pintura, ladrillos, presupuesto">
    <meta name="author" content="TuBrand">
    
    <!-- Open Graph para redes sociales -->
    <meta property="og:title" content="TuBrand - Cálculos de obra al instante">
    <meta property="og:description" content="Las cuentas de tu próxima obra, resueltas antes de empezar">
    <meta property="og:image" content="https://tubrand.com/images/og-image.jpg">
    <meta property="og:url" content="https://tubrand.com">
</head>
```

### URL structure:
```
https://tubrand.com/           ← Landing
https://tubrand.com/calculadoras/pintura.html
https://tubrand.com/privacidad
```

---

## CHECKLIST DE CUSTOMIZACIÓN

```
☐ Nombre/tagline principal
☐ Colores CSS actualizados
☐ Logo en navbar
☐ Favicon en tab
☐ Descripción en cada calculadora
☐ Links de afiliados configurados
☐ Google Analytics instalado
☐ Google AdSense configurado (cuando tengas tráfico)
☐ Email de contacto funcionando
☐ Página de privacidad creada
☐ Meta tags SEO completados
☐ Probado en desktop + mobile + tablet
☐ Deploy en Netlify
☐ Dominio custom (tubrand.com)
```

---

## PALABRAS DE INSPIRACIÓN

Tu marca es especial. Encaja.app fue el punto de partida, pero la personalización es lo que te distingue.

**No copies. Inspírate y crea tu versión.**

Algunos nombres alternativos si quieres ideas:
- **ObracCalc** - Para construcción general
- **MaterialCount** - Profesional/Neutral
- **PresupuestoRápido** - Local/Español
- **BuildMath** - Internacional
- **TallerCalc** - Talleres
- **ProBuilder** - Profesionales

---

## Soporte

Si necesitas ayuda:
1. Lee ARQUITECTURA.md (cómo agregar más calculadoras)
2. Lee QUICK-START.md (inicio rápido)
3. Lee NETLIFY-DEPLOY.md (subir a web)
4. Revisa style-landing.css y style.css (para CSS personalizado)

---

**¡Tu marca espera! 🚀**

Personaliza, lanza, crece.

En ese orden. 💪