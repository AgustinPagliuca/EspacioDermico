# Espacio Dérmico - Sitio Web

Sitio web profesional para Espacio Dérmico, centro de estética y bienestar ubicado en Santos Lugares.

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de estilos
- **React Router** - Navegación SPA
- **Lucide React** - Iconos
- **CSS Variables** - Colores personalizables

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