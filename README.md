# Espacio Dérmico - Sitio Web

Sitio web profesional para Espacio Dérmico, centro de estética y bienestar ubicado en Santos Lugares.

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de estilos
- **React Router** - Navegación SPA
- **Lucide React** - Iconos
- **CSS Variables** - Colores personalizables

## 📁 Estructura del Proyecto

```
espacio-dermico/
├── public/              # Archivos estáticos
│   ├── logoSolo.png     # Logo para navbar
│   ├── logoRedondo.png  # Logo para menú móvil
│   └── favicon.svg      # Favicon
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── common/      # Navbar, Footer, WhatsApp Button
│   │   ├── home/        # Hero Carousel, Consulta Banner, Quote
│   │   └── services/    # Service Card
│   ├── pages/           # Páginas principales
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── AboutMe.jsx
│   │   └── Contact.jsx
│   ├── data/            # Datos centralizados (fácil de editar)
│   ├── hooks/           # useScroll, useScrollToTop
│   ├── colores.css      # Variables de colores personalizables
│   ├── index.css        # Estilos globales
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Colores Personalizables

Los colores se definen en `src/colores.css` usando CSS variables:

```css
:root {
  --color-primary: #A68B6B;           /* Color principal - más claro */
  --color-primary-light: #C4AE98;     /* Hover de links */
  --color-primary-dark: #8B7355;      /* Botones hover */
  --color-primary-darker: #6B5344;    /* Footer, textos oscuros */
  
  --color-bg: #FDFCFB;                /* Fondo principal - casi blanco */
  --color-bg-alt: #FAF8F6;            /* Fondo alternativo (secciones) */
  --color-bg-card: #FFFFFF;           /* Fondo de cards */
  
  --color-text: #5A4538;              /* Texto principal */
  --color-text-light: #8B7355;        /* Texto secundario */
  --color-text-muted: #B8A090;        /* Texto suave */
}
```

Para cambiar los colores, edita solo los valores hexadecimales en ese archivo.

## 🛠️ Instalación y Desarrollo

### Requisitos previos
- Node.js 18 o superior
- npm o yarn

### Pasos para instalar

1. **Instalar dependencias:**
```bash
npm install
```

2. **Iniciar servidor de desarrollo:**
```bash
npm run dev
```

3. **Abrir en el navegador:**
```
http://localhost:5173
```

## 📦 Compilar para Producción

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

## ✏️ Cómo Editar Contenido

### Servicios y Tratamientos
Editar el archivo `src/data/services.js`:
- `services` - Lista de servicios y tratamientos detallados
- `contactInfo` - Teléfono, WhatsApp, email, redes sociales
- `quotes` - Frases motivacionales para el home
- `heroSlides` - Slides del carrusel principal

### Información de Contacto y Redes
En `src/data/services.js`, objeto `contactInfo`:
```javascript
export const contactInfo = {
  phone: '15-6507-2537',
  landline: '4757-4380',
  whatsapp: 'https://api.whatsapp.com/message/LTCMUGTXAYKSO1?autoload=1&app_absent=0&utm_source=ig',
  email: 'espaciodermico@gmail.com',
  address: 'Dr. Carbone 3748, Santos Lugares',
  hours: {
    weekdays: 'Martes a Viernes de 9 a 19 hs',
    saturday: 'Sábados de 9 a 16 hs'
  },
  social: {
    facebook: 'https://facebook.com/espaciodermico',
    instagram: 'https://www.instagram.com/elycosmiatra/',
    whatsapp: 'https://api.whatsapp.com/message/LTCMUGTXAYKSO1?autoload=1&app_absent=0&utm_source=ig'
  }
}
```

### Cambiar Colores
Editar `src/colores.css` - Solo modifica los valores hexadecimales (#XXXXXX). La página se actualizará automáticamente.

### Agregar Nuevas Imágenes
1. Agregar imágenes a la carpeta `public/`
2. Referenciar como `/nombreImagen.png` en el código
3. O usar URLs de imágenes externas (Unsplash, etc.)

## 🌐 Despliegue

### GitHub Pages (Recomendado)
El proyecto está configurado para desplegarse automáticamente en GitHub Pages.

#### Configuración inicial (una sola vez):
1. En tu repositorio de GitHub, ve a **Settings → Pages**
2. En **Source**, selecciona **Deploy from a branch**
3. Selecciona la rama **`gh-pages`** y directorio `/ (root)`
4. Guarda los cambios

#### Deploy automático:
1. Solo necesitas hacer `git push` a la rama `main`
2. GitHub Actions compilará el proyecto automáticamente
3. Se desplegará en: `https://AgustinPagliuca.github.io/EspacioDermico/`

#### Comandos para subir cambios:
```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```

Luego verifica en **Actions** que el workflow se ejecutó correctamente.

### Netlify (Alternativo)
1. Conectar repositorio GitHub a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. El sitio se despliega automáticamente con cada push

### Vercel (Alternativo)
1. Importar proyecto desde GitHub a Vercel
2. Configuración automática
3. Deploy automático en cada push

## 📱 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Navbar con efecto sticky y animación al scroll
- ✅ Carousel de imágenes en el hero
- ✅ Animaciones de aparición al scroll
- ✅ Botón flotante de WhatsApp
- ✅ Formulario de contacto con envío a WhatsApp
- ✅ Optimizado para SEO
- ✅ Carga rápida y rendimiento optimizado

## 📞 Soporte

Para consultas sobre el sitio web o modificaciones, contactar al desarrollador.

---

Hecho con ❤️ para Espacio Dérmico
