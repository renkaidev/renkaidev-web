---
title: "JPVS Web - Presencia Digital"
description: "Desarrollo de landing page de alta conversión para servicios técnicos, optimizada para SEO local y rendimiento."
year: 2026
status: "En Producción"
role: "Desarrollo Frontend y UI/UX"
tags: ["Astro", "Tailwind CSS v4", "GSAP", "SEO Local", "Landing Page", "CI/CD"]
---

## Contexto de Negocio
JPVS necesitaba profesionalizar su presencia digital para servicios técnicos integrales (gasfitería, soldadura, electricidad y construcción). El objetivo era crear una plataforma que generara confianza, expusiera una metodología clara y facilitara el contacto directo e inmediato mediante WhatsApp y llamadas telefónicas.

## Solución Propuesta
Se construyó una *Landing Page* enfocada en conversión y accesibilidad móvil:
- **Diseño "Blueprint Precision":** Una paleta de colores azul marino profundo con temática industrial y técnica, utilizando fuentes como *Barlow Condensed* para enfatizar la seriedad y robustez del servicio.
- **Interactividad y Dinamismo:** Implementación avanzada de **GSAP y ScrollTrigger** para crear un carrusel dinámico interactivo y transiciones de entrada fluidas, manteniendo un alto rendimiento en dispositivos móviles sin sacrificar la estética.
- **Rendimiento y SEO:** Construido sobre **Astro**, el sitio es estático, garantizando tiempos de carga casi instantáneos. Incorpora microdatos (Schema.org) orientados a SEO local estratégico en zonas específicas.

## Implementación Técnica
La arquitectura frontal se basó en los siguientes pilares:
- **Astro:** Motor de renderizado estático y gestión de rutas dinámicas para los diferentes servicios de la empresa.
- **Tailwind CSS v4:** Aprovechamiento de la nueva API `@theme` para gestionar el sistema de diseño nativamente sin archivos de configuración complejos.
- **GSAP:** Para resolver conflictos de opacidad entre CSS y animaciones JavaScript, se encapsularon componentes específicos (`.btn-wrapper`), logrando interacciones perfectas sin sobreescribir estilos.

## Lecciones Aprendidas
El proyecto demostró cómo una arquitectura moderna y sin servidor (SSG) puede proveer soluciones empresariales robustas y de alto impacto visual sin requerir mantenimiento backend complejo, maximizando el SEO y minimizando fricciones en el embudo de captación comercial.
