---
title: "RenkaiDev - Presencia Digital y Servicios TI"
description: "Desarrollo de la plataforma principal de RenkaiDev, diseñada para exhibir servicios de consultoría TI y establecer una presencia digital corporativa de alto rendimiento."
year: 2026
status: "En Producción"
role: "Arquitectura y Desarrollo End-to-End"
tags: ["Astro", "Tailwind CSS", "SSG", "Cloudflare Pages"]
---

## Contexto del Proyecto
RenkaiDev requería una plataforma web para exhibir su catálogo de servicios de consultoría TI y desarrollo de software. El objetivo principal era transmitir una filosofía de trabajo pragmática, orientada a resolver problemas reales de negocio mediante un diseño corporativo moderno y técnico ("Cyber").

## Desafío Técnico
El sitio debía ser ultrarrápido, seguro y cumplir estrictamente con normativas de protección de datos (como la Ley 21.719 en Chile). Para lograrlo, se requería evitar cualquier tipo de base de datos o almacenamiento de información sensible, sin sacrificar la funcionalidad de contacto comercial.

## Solución Propuesta
Se implementó una arquitectura **Zero-Backend** basada en generación de sitios estáticos (SSG):
- **Desarrollo Ultrarrápido:** Construido con **Astro v7** y **Tailwind CSS**, priorizando el rendimiento y minimizando la carga de JavaScript.
- **Privacidad desde el Diseño:** Formularios de contacto configurados nativamente (`mailto:`) para que la gestión comercial se realice directamente desde el cliente de correo, garantizando cero recopilación automatizada de datos en el servidor.
- **Diseño Estético:** Se adoptó una estética "Cyber" con un tema oscuro de alto contraste, tarjetas estilo *glassmorphism* (translúcidas) y brillos sutiles.
- **Despliegue Continuo (CI/CD):** Alojado en **Cloudflare Pages** directamente desde GitHub, garantizando distribución global (Edge) y alta disponibilidad.

## Lecciones Aprendidas
Durante el desarrollo se evidenció la importancia de adaptar las herramientas al entorno. Por ejemplo, se identificaron y resolvieron problemas de compatibilidad del componente nativo de optimización de imágenes de Astro en el pipeline de Cloudflare Pages, optando por soluciones HTML nativas para mantener la estabilidad del despliegue.
