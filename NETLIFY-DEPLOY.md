# 🚀 DESPLEGAR ENCAJA.APP EN NETLIFY (5 MINUTOS)

## ¿Por qué Netlify?

- ✅ **Gratis** (hasta 100 GB/mes)
- ✅ **Rápido** (CDN global)
- ✅ **Fácil** (arrastra y cuelga)
- ✅ **Seguro** (HTTPS automático)
- ✅ **Sin configuración** (para HTML/CSS/JS puro)
- ✅ **Analytics gratis** (visitas, comportamiento)

---

## Opción 1: Drag & Drop (LA MÁS FÁCIL)

### Paso 1: Abre Netlify
```
https://app.netlify.com
```

### Paso 2: Crea una cuenta (si no tienes)
```
Usa GitHub, Google o email
(Recomendado: GitHub para actualizaciones automáticas)
```

### Paso 3: Sube tu carpeta
```
Arrastra encaja-app/ a la zona de "Drag and drop your site folder here"
```

### Paso 4: ¡Listo! 🎉
```
Tu sitio está en: random-name.netlify.app
(Ejemplo: optimistic-euler-a1b2c3.netlify.app)
```

---

## Opción 2: Conectar GitHub (RECOMENDADO)

### Paso 1: Sube a GitHub
```bash
# En tu terminal, dentro de encaja-app/
git init
git add .
git commit -m "Initial commit: Encaja.app platform"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/encaja-app.git
git push -u origin main
```

### Paso 2: Conecta Netlify a GitHub
```
1. Abre https://app.netlify.com
2. Click en "New site from Git"
3. Selecciona GitHub
4. Autoriza Netlify
5. Selecciona repo "encaja-app"
6. Click Deploy
```

### Paso 3: Configuración (Opcional)
```
Build command:         (dejar vacío - es HTML puro)
Publish directory:     . (o encaja-app/ si está en subfolder)
```

### Ventaja
```
Cada vez que hagas push a GitHub, Netlify redeploy automático ✨
```

---

## Opción 3: Netlify CLI (Para Desarrolladores)

```bash
# Instalar CLI
npm install -g netlify-cli

# Desde la carpeta encaja-app/
netlify login
netlify init
netlify deploy

# Para deploy en producción
netlify deploy --prod
```

---

## Después del Deploy: Configurar Dominio

### 1. Comprar dominio
```
Registrars recomendados:
- Namecheap.com (barato, $5-9/año)
- GoDaddy.com (popular)
- Nilo.es (España)
```

### 2. Conectar en Netlify
```
1. En tu sitio de Netlify → Settings → Domain Management
2. Click "Add custom domain"
3. Escribe: encaja.app
4. Sigue las instrucciones para DNS (generalmente 5 minutos)
```

### 3. Email personal (Opcional)
```
Si tienes G Suite o similar, apunta MX records a tu proveedor
```

---

## Optimizaciones Post-Despliegue

### 1. Renombrar tu sitio
```
Settings → General → Site name
De: optimistic-euler-a1b2c3
A: encaja
→ encaja.netlify.app
```

### 2. Habilitar Analytics
```
Analytics → Enable Analytics
(Gratis - ve cuántas visitas tienes)
```

### 3. Agregar redirects (Opcional)
Crear `netlify.toml` en raíz:
```toml
[build]
  publish = "."
  command = ""

[[redirects]]
  from = "/privacy"
  to = "/privacy.html"
  status = 200
```

### 4. Cache Headers (Opcional)
Crear archivo `_headers` en raíz:
```
/* 
  Cache-Control: public, max-age=3600
  
/style.css
  Cache-Control: public, max-age=31536000
  
/js/*
  Cache-Control: public, max-age=31536000
```

---

## Problemas Comunes

### "Mi sitio no se ve"
```
→ Verifica que index.html está en la raíz
→ Verifica que los paths son relativos (../style.css)
→ Hard refresh: Ctrl+Shift+R
```

### "Los estilos no cargan"
```
→ Verifica ruta: ../style.css (debe ser relativa)
→ En browser: F12 → Network → revisa si style.css devuelve 404
→ Si falta: comprueba que style.css está en la carpeta correcta
```

### "Las calculadoras no aparecen"
```
→ Abre Console (F12) → ve si hay errores JavaScript
→ Verifica que productos-pintura.js existe
→ Verifica que calculadora-pintura.js existe
```

---

## Estructura de Carpetas para Netlify

```
encaja-app/
├── index.html                    ← Tu entrada principal
├── style-landing.css
├── style.css
├── QUICK-START.md
├── ARQUITECTURA.md
├── NETLIFY-DEPLOY.md
├── calculadoras/
│   └── pintura.html
├── js/
│   └── calculadora-pintura.js
├── data/
│   └── productos-pintura.js
└── (opcional) netlify.toml       ← Configuración avanzada
```

**Importante**: Netlify sirve TODO desde la raíz, así que:
- `/index.html` → `https://encaja.app/`
- `/calculadoras/pintura.html` → `https://encaja.app/calculadoras/pintura.html`
- `/style.css` → `https://encaja.app/style.css`

---

## Monitorear Tráfico

### Google Analytics (Recomendado)

En `index.html` y todos los HTMLs, antes del `</body>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Luego:
1. Ve a https://analytics.google.com
2. Crea propiedad (Google Analytics 4)
3. Obtén tu ID
4. Reemplaza `G-XXXXXXXXXX` arriba

### Netlify Analytics (Incluido)
```
Ir a tu sitio en Netlify
Analytics → Mostrar datos de visitas + dispositivos
```

---

## Actualizaciones Futuras

### Si usas Opción 1 (Drag & Drop)
```
1. Haz cambios local
2. Arrastra carpeta a Netlify de nuevo
3. Click "Deploy" para actualizar
```

### Si usas Opción 2 (GitHub)
```
1. Haz cambios
2. git add . && git commit -m "Update" && git push
3. Netlify actualiza automático en 30 segundos
```

---

## Próximos Pasos (Después de Deploy)

### Checklist
```
☐ Sitio activo en encaja.netlify.app
☐ Dominio custom (encaja.app)
☐ Google Analytics configurado
☐ Calculadora de pintura probada en producción
☐ Links a tiendas funcionan
☐ Responsive correcto en móvil
```

### Entonces
```
1. Agrega calculadora de ladrillos (siguiendo ARQUITECTURA.md)
2. Configura Google AdSense (en ad-placeholder)
3. Comienza a promocionar en redes/comunidades construcción
```

---

## Costo Total (Primer Año)

```
Netlify hosting:    $0 (gratis)
Dominio (.app):     €12 (encaja.app)
Analytics:          $0 (gratis en Netlify + Google)
AdSense:            $0 (comisión solo si hay ingresos)

TOTAL:              ~€12/año
```

---

## FAQ Despliegue

**P: ¿Necesito Node.js o servidor?**
R: No. Netlify sirve HTML/CSS/JS directamente.

**P: ¿Puedo usar base de datos?**
R: No en plan gratis. Pero no la necesitas (todo es client-side).

**P: ¿Cómo agrego formularios?**
R: Netlify Forms (gratis 100/mes):
```html
<form name="contacto" method="POST" netlify>
  <input type="email" name="email" required>
  <textarea name="mensaje"></textarea>
  <button type="submit">Enviar</button>
</form>
```

**P: ¿Qué pasa con el SSL?**
R: Automático en todos los sitios Netlify.

**P: ¿Dónde veo el tráfico?**
R: Netlify → Analytics, o Google Analytics si lo añades.

---

## Soporte

Si algo no funciona:
1. Revisa console (F12 en el navegador)
2. Verifica rutas de archivos
3. Comprueba que todos los archivos se subieron
4. Contacta Netlify support (muy rápidos)

---

## ¡Ya está!

Tu **Encaja.app** está viva en internet.

**Próximo hito**: Agregar más calculadoras y comenzar a traficar usuarios.

---

**¡Felicidades! 🚀🎉**

Tu startup de calculadoras está viva.
Ahora a crecer. 📈