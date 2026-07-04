# RenkaiDev - IT Consulting Portfolio

Este repositorio contiene el código fuente del sitio web del portafolio profesional y catálogo de servicios de RenkaiDev. 

El sitio está construido enfocándose en alto rendimiento, accesibilidad y diseño centrado en el producto, sirviendo como una plataforma rápida y segura para la exhibición de casos de estudio y servicios de consultoría TI.

## 🚀 Tecnologías Principales

- **[Astro](https://astro.build/)**: Framework web para la generación de sitios estáticos (SSG) de carga ultrarrápida.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidades CSS para diseño responsivo y moderno.
- **[GSAP](https://gsap.com/)**: Biblioteca robusta de animaciones para transiciones fluidas de interfaz.
- **TypeScript**: Para tipado estricto y seguridad en el código (colecciones de contenido).

## 📂 Estructura del Proyecto

- `/src/pages`: Rutas y vistas de la aplicación.
- `/src/components`: Componentes modulares y reutilizables (UI, Header, Footer).
- `/src/layouts`: Plantillas maestras de diseño.
- `/src/content`: Colecciones de contenido Markdown (Casos de Estudio).
- `/docs`: Documentación técnica y de arquitectura.

## 🛠️ Instalación y Desarrollo Local

1. Instala las dependencias:
   ```sh
   npm install
   ```

2. Inicia el servidor de desarrollo local:
   ```sh
   npm run dev
   ```

3. Compila para producción:
   ```sh
   npm run build
   ```

## 🔐 Privacidad y Seguridad (Cloudflare Ready)
Este proyecto está diseñado estructuralmente para ser hospedado en infraestructuras Edge gratuitas como Cloudflare Pages. 
- **Sin backend (No-Backend Architecture)**: Los formularios de contacto utilizan la API de correo nativa (`mailto:`) vía JavaScript en el cliente para evitar el procesamiento y almacenamiento de datos sensibles (Cumplimiento de normativas de Protección de Datos).
- Toda la data es inmutable (SSG).

## 📄 Licencia
Este proyecto es una página de servicios profesional y no se distribuye bajo licencias de código abierto de libre uso comercial sin previa autorización. Todos los derechos reservados.
