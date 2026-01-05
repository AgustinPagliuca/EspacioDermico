import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Read the built index.html to extract the compiled asset filenames
const distIndexPath = join(process.cwd(), 'dist', 'index.html');
const indexHtml = readFileSync(distIndexPath, 'utf-8');

// Extract the JS and CSS asset filenames
const jsMatch = indexHtml.match(/src="\/assets\/(index-[^"]+\.js)"/);
const cssMatch = indexHtml.match(/href="\/assets\/(index-[^"]+\.css)"/);

if (!jsMatch || !cssMatch) {
  console.error('Could not find asset filenames in index.html');
  process.exit(1);
}

const jsFile = jsMatch[1];
const cssFile = cssMatch[1];

// Create the 404.html content
const html404 = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logoSolo.svg" />
    <link rel="icon" type="image/png" href="/logoSolo.png" />
    <link rel="apple-touch-icon" href="/logoSolo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Espacio Dérmico - Centro de estética, cosmiatría y bienestar en Santos Lugares. Tratamientos faciales, corporales, manicuría, pedicuría y más." />
    <meta name="keywords" content="estética, cosmiatría, belleza, Santos Lugares, tratamientos faciales, manicuría, pedicuría, depilación, masajes" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <title>Espacio Dérmico | Estética & Bienestar</title>
    <script>
      // Store the original path for React Router
      sessionStorage.setItem('redirectPath', window.location.pathname + window.location.search + window.location.hash);
    </script>
    <script type="module" crossorigin src="/assets/${jsFile}"></script>
    <link rel="stylesheet" crossorigin href="/assets/${cssFile}">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

// Write the 404.html to dist
const dist404Path = join(process.cwd(), 'dist', '404.html');
writeFileSync(dist404Path, html404, 'utf-8');

console.log('✓ 404.html created successfully in dist/ with compiled assets');
console.log(`  JS: ${jsFile}`);
console.log(`  CSS: ${cssFile}`);
