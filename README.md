# 🏗️ Encaja.app - Plataforma Modular de Calculadoras para Construcción

## 📋 ¿Qué es Encaja.app?

**Encaja.app** es una plataforma web de código abierto que proporciona calculadoras para la construcción y reformas.

**Claim**: *"Las cuentas de tu próxima obra, resueltas antes de empezar."*

**🌐 Publicada**: https://robertoalmela.github.io/encaja-app/ (GitHub Pages desde `main`; pendiente apuntar el dominio encaja.app). Calculadoras online: pintura, ladrillos, pavimentos, pladur y despiece de tableros.

### Características Principales

```
✅ Calculadora de Pintura (FUNCIONAL)
   - Selecciona pintura real de tiendas
   - Ingresa dimensiones de habitación
   - Obtén botes exactos necesarios
   - Links directos a Leroy, BricoDépot, Obramat

🔜 Próximas Calculadoras (Plantilla lista)
   - Ladrillos (despiece y merma)
   - Madera (tableros y consumo)
   - Suelos (laminate, gres, tarima)
   - Azulejos (consumo y formato)
   - Yeso (paneles y perfiles)
   + cualquier otra que necesites

✨ Características Técnicas
   - 100% HTML/CSS/JavaScript (sin frameworks)
   - 100% client-side (privado, sin servidor)
   - 100% responsive (móvil/tablet/desktop)
   - 100% gratis (Netlify)
   - Modular y escalable
   - Integración de afiliados
   - Espacio para Google AdSense
```

---

## 🚀 Inicio Rápido

### Opción A: Abrir Localmente (1 minuto)

```bash
# Windows Explorer
Navega a: c:\Users\Usuario\Documents\GitHub\encaja-app\

# Haz doble clic en: index.html
# Se abre el sitio en tu navegador
```

### Opción B: Subir a Web (5 minutos)

```bash
# Ve a https://app.netlify.com
# Arrastra la carpeta encaja-app/
# ¡Tu sitio está vivo!
```

Ver: **[NETLIFY-DEPLOY.md](NETLIFY-DEPLOY.md)**

### Opción C: Usar con Git

```bash
cd c:\Users\Usuario\Documents\GitHub\encaja-app\
git init
git add .
git commit -m "Initial commit"
git push origin main
```

---

## 📁 Estructura del Proyecto

```
encaja-app/
├── 📄 index.html              # Landing page principal
├── 🎨 style-landing.css       # Estilos landing
├── 🎨 style.css               # Estilos calculadoras
│
├── 📚 DOCUMENTACIÓN/
│   ├── README.md              # Este archivo
│   ├── QUICK-START.md         # Guía de 30 minutos
│   ├── ARQUITECTURA.md        # Cómo agregar calculadoras
│   ├── PERSONALIZACION.md     # Cambiar colores/textos
│   └── NETLIFY-DEPLOY.md      # Subir a web
│
├── 📂 calculadoras/
│   └── pintura.html           # ✅ LISTA - Calc. Pintura
│
├── 📂 js/
│   └── calculadora-pintura.js # ✅ LISTA - Lógica pintura
│
└── 📂 data/
    └── productos-pintura.js   # ✅ LISTA - 10 productos reales
```

---

## 📖 Documentación por Caso

### 👨‍💻 "Quiero lanzar el sitio YA"

**Tiempo: 5 minutos**

1. Lee: [NETLIFY-DEPLOY.md](NETLIFY-DEPLOY.md)
2. Arrastra carpeta a Netlify
3. Obtén tu dominio
4. ¡Lanzado!

### 🎨 "Quiero cambiar colores/nombre"

**Tiempo: 15 minutos**

1. Lee: [PERSONALIZACION.md](PERSONALIZACION.md)
2. Edita `style.css` (colores)
3. Edita `index.html` (textos)
4. Redeploy

### 🧮 "Quiero agregar una calculadora"

**Tiempo: 1-2 horas**

1. Lee: [ARQUITECTURA.md](ARQUITECTURA.md)
2. Copia patrón de pintura
3. Adapta HTML/JS/Datos
4. Agrega a landing page
5. Prueba y lanza

### 🚀 "Quiero monetizar"

**Tiempo: Variable**

1. Configura Google AdSense (cuando tengas tráfico)
2. Agrega códigos de afiliado a las tiendas
3. Implementa programa propio de afiliados

Ver: [ARQUITECTURA.md - Monetización](ARQUITECTURA.md#monetización)

### 💰 "Quiero escalar a 6+ calculadoras"

**Tiempo: 4-6 semanas (dedicación part-time)**

1. Planifica tus 6 materiales
2. Crea 1-2 por semana
3. Prueba y lanza cada una
4. Comienza a traficar

---

## 🎯 Hoja de Ruta

### ✅ Completado
- Landing page profesional
- Calculadora de pintura con integración de tiendas
- Sistema modular de calculadoras
- Documentación técnica completa
- Responsividad total

### 🔄 Próximo (Semana 1)
- Subir a Netlify + dominio custom
- Agregar Calculadora de Ladrillos
- Configurar Google Analytics

### 📋 Próximas 4 Semanas
- Calculadora de Madera
- Calculadora de Suelos
- Calculadora de Azulejos
- Google AdSense configurado

### 🎯 Mes 2+
- Programa de afiliados propio
- Blog con SEO
- Presupuestos descargables (PDF)
- Versión móvil nativa (si crece)

---

## 🛠️ Stack Técnico

### Frontend
```
HTML5              → Semántica
CSS3               → Grid, Flexbox, variables personalizadas
JavaScript ES6+    → Sin frameworks (vanilla JS)
Google Fonts       → Poppins para UI moderna
```

### Infraestructura
```
Netlify            → Hosting gratis (100 GB/mes)
Google Analytics   → Tracking de visitas
Google AdSense     → Monetización de anuncios
Afiliados          → Comisiones por venta
```

### Integraciones
```
Leroy Merlin API   → (Próxima mejora)
Amazon Product API → (Próxima mejora)
Google Tag Manager → (Analytics avanzado)
```

---

## 📊 Casos de Uso

### Para Desarrolladores
- Aprende arquitectura modular
- Practica vanilla JavaScript
- Entiende responsive design
- Despliega en Netlify

### Para Emprendedores
- Plataforma lista para monetizar
- Modelo de afiliados comprobado
- Baja inversión inicial
- Escalable a múltiples países

### Para Tiendas de Construcción
- Integración white-label
- Aumenta visitas a tu tienda
- Programa de afiliados
- Bajo costo de implementación

---

## 🌟 Destacados

### Diseño Responsivo
```
Desktop  (1400px+)   → 2 columnas (sidebar + contenido)
Tablet   (1024px)    → Adaptado
Mobile   (768px ↓)   → 1 columna (stack vertical)
```

### Privacidad Primera
```
✅ Sin login requerido
✅ Sin guardar datos en servidor
✅ Cálculos 100% local
✅ HTTPS automático
✅ Compliant GDPR
```

### Monetización Múltiple
```
1. Google AdSense        → Ingresos por visualización
2. Afiliados (Leroy...)  → Comisión por venta
3. Programa propio       → Comisión personalizada
4. Premium (futuro)      → Características avanzadas
```

---

## 📈 Métricas Esperadas

### Conservadores (Año 1)
```
Visitantes/mes:    1,000 - 5,000
CTR a tiendas:     5% - 10%
Conversión:        0.5% - 2%
Revenue:           €100 - €500/mes (con AdSense)
```

### Optimistas (Año 2)
```
Visitantes/mes:    20,000 - 50,000
CTR a tiendas:     10% - 15%
Conversión:        2% - 5%
Revenue:           €1,000 - €3,000/mes
```

### Con Escala Viral
```
Visitantes/mes:    100,000+
CTR a tiendas:     15%+
Conversión:        5%+
Revenue:           €5,000+/mes
```

---

## 🔐 Seguridad y Privacidad

### Datos Personales
```
✅ No se recopilan
✅ No se guardan
✅ No se venden
✅ 100% transparent
```

### Certificados
```
✅ HTTPS (automático Netlify)
✅ GDPR compliant
✅ Sin cookies de seguimiento (solo Analytics)
✅ Política privacidad clara
```

---

## 🤝 Contribuciones

Este proyecto es **público y escalable**. Si quieres:

### Agregar Calculadora
1. Fork el repositorio
2. Crea rama `feature/calc-nueva`
3. Sigue patrón en [ARQUITECTURA.md](ARQUITECTURA.md)
4. Submit pull request

### Mejorar Documentación
1. Identifica sección incompleta
2. Mejora/expande
3. Submit PR

### Reporte de Bugs
1. Abre issue en GitHub
2. Incluye pasos para reproducir
3. Ambiente (navegador, SO, etc.)

---

## 📞 Soporte

### Preguntas Frecuentes
**Ver: [QUICK-START.md - FAQ](QUICK-START.md#-dudas)**

### Problemas Técnicos
1. Revisa Console (F12)
2. Verifica rutas de archivos
3. Hard refresh (Ctrl+Shift+R)
4. Contacta soporte Netlify

### Sugiero Mejora
1. Abre issue en GitHub
2. Describe mejora
3. Proporciona contexto

---

## 📄 Licencia

**MIT License** - Libre para usar, modificar, distribuir

Simplemente mantén crédito: "Basado en Encaja.app"

---

## 🎓 Recursos Recomendados

### Para Aprender
- **CSS Variables**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- **Grid Layout**: [CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
- **Vanilla JS**: [JavaScript.info](https://javascript.info/)

### Para Monetizar
- **Google AdSense**: [Comienza aquí](https://www.google.com/adsense/)
- **Programas de afiliados**: Leroy, Amazon, Obramat

### Para Escalar
- **Netlify Analytics**: [Dashboard](https://app.netlify.com)
- **Google Analytics**: [Setup guía](https://support.google.com/analytics/)

---

## 🎉 ¿Por Dónde Empezar?

### Si tienes 5 minutos
```
→ Abre index.html en tu navegador
→ Prueba la calculadora de pintura
→ Explora el código
```

### Si tienes 30 minutos
```
→ Lee QUICK-START.md
→ Entiende la arquitectura
→ Planifica tu primera mejora
```

### Si tienes 2 horas
```
→ Lee ARQUITECTURA.md
→ Despliega a Netlify (NETLIFY-DEPLOY.md)
→ Comienza a personalizar (PERSONALIZACION.md)
```

### Si tienes el día libre
```
→ Agrega 2ª calculadora (ladrillos)
→ Configura analytics
→ Lanza en redes sociales
```

---

## 📬 Últimas Palabras

**Encaja.app** es tu punto de partida, no tu destino.

La verdadera magia sucede cuando:
1. **Lanzas** (Netlify, 5 minutos)
2. **Expandes** (Más calculadoras, 1-2 horas cada una)
3. **Promocionas** (Redes, comunidades, SEO)
4. **Monetizas** (AdSense + Afiliados)
5. **Escalas** (Múltiples idiomas, móvil app, APIs)

**¡Empieza hoy. Crece mañana. Triunfa el próximo mes.** 🚀

---

## 📞 Contacto y Créditos

**Proyecto**: Encaja.app - Plataforma modular de calculadoras
**Versión**: 1.0 (MVP Completo)
**Licencia**: MIT
**Año**: 2024

### Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript ES6+
- Netlify (hosting)
- Google Analytics
- Google AdSense

---

**¡Que disfrutes construyendo tu éxito!** 💪🏗️

```
Las cuentas de tu próxima obra, resueltas antes de empezar.
```