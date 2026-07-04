# RenkaiDev Web - UI Memory & Style Guide

Este documento sirve como referencia para mantener la consistencia visual y arquitectónica en futuras sesiones de desarrollo (creación de nuevas vistas, componentes o secciones).

## 1. Estructura de Página (Astro)
Toda página pública debe incluir el `Header` y `Footer`, además del `Layout` principal.
```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="Título de la Página">
  <Header />
  <main class="pt-20"> <!-- Margen superior para el Header fijo -->
    <!-- Secciones de contenido -->
  </main>
  <Footer />
</Layout>
```

## 2. Contenedores y Secciones
Utilizar las clases de Tailwind predefinidas para mantener los márgenes consistentes.
- **Sección principal:** `<section class="py-section-gap px-gutter max-w-container-max mx-auto animate-on-scroll">`
- `animate-on-scroll`: Clase clave interceptada por el IntersectionObserver en `Layout.astro` para animaciones de entrada.

## 3. Tipografía (Design Tokens)
Las fuentes y tamaños están estandarizados mediante clases semánticas de Tailwind (font-* y text-*):
- **Títulos Hero (Display):** `font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface`
- **Subtítulos de Sección (Headline):** `font-headline-md text-headline-md text-on-surface`
- **Párrafos grandes:** `font-body-lg text-body-lg text-on-surface-variant`
- **Párrafos regulares:** `font-body-md text-body-md text-on-surface-variant`
- **Etiquetas y Metadatos:** `font-code-sm text-code-sm` (ideal para fechas, tags, estatus).

## 4. Colores Semánticos
El proyecto utiliza un sistema de colores adaptado al modo oscuro:
- `text-on-surface`: Color principal para texto (blanco/claro).
- `text-on-surface-variant`: Color secundario para texto descriptivo (gris).
- `text-primary`: Color de acento (azul/cyan).
- `bg-primary`, `bg-primary/10`, `border-primary/20`: Utilizados para botones, badges y efectos glow.
- `bg-surface-container`, `bg-surface-container-high`, `bg-surface-container-low`: Fondos de tarjetas y contenedores.

## 5. Componentes Recurrentes
### Tarjetas Glassmorphism
Las tarjetas utilizan la clase global `glass-card`:
```html
<div class="glass-card p-8 rounded-xl flex flex-col transition-all hover:-translate-y-1 hover:border-primary/40">
  <!-- Contenido -->
</div>
```

### Badges / Etiquetas
Para resaltar estados, años, o tecnologías:
```html
<span class="font-code-sm text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
  Activo
</span>
```

### Iconos
El proyecto utiliza Google Material Symbols (Outlined):
```html
<span class="material-symbols-outlined">arrow_back</span>
```

## 6. Renderizado de Markdown (Content Collections)
Dado que Tailwind Typography (`@tailwindcss/typography`) **no** está instalado, el contenido Markdown (`<Content />`) se debe estilizar explícitamente mediante directivas globales en la página contenedora:
```html
<style is:global>
  .markdown-content h2 { ... }
  .markdown-content p { color: var(--color-on-surface-variant); ... }
  .markdown-content li::before { content: "•"; color: var(--color-primary); ... }
</style>
```

---
*Mantener este documento actualizado cada vez que se creen nuevos tokens de diseño o patrones recurrentes en el frontend.*
