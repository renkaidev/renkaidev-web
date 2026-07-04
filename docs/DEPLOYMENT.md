# Guía de Despliegue (Deployment) - Cloudflare Pages

El proyecto **RenkaiDev Web** está construido con Astro.js bajo la modalidad de Generación de Sitios Estáticos (SSG). Esto lo hace ideal para ser desplegado en servicios gratuitos de Edge Computing como Cloudflare Pages, garantizando seguridad, distribución global inmediata y cero costos de alojamiento (Backend-less).

## Pasos para el Despliegue en Cloudflare Pages

1. **Subir el código a GitHub:**
   - Asegúrate de tener el código en un repositorio público o privado en tu cuenta de GitHub (`github.com/renkaidev`).
   - El archivo `README.md` ya está sanitizado y listo para ser público sin exponer infraestructura interna.

2. **Vincular Cloudflare:**
   - Inicia sesión en tu panel de [Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages).
   - Haz clic en **"Create a project"** y luego en **"Connect to Git"**.
   - Selecciona el repositorio de GitHub de RenkaiDev.

3. **Configurar el Build (Compilación):**
   - **Framework preset:** Selecciona `Astro`.
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

4. **Variables de Entorno (Environment Variables):**
   - Actualmente, al no depender de bases de datos ni servicios externos de backend, el proyecto **no requiere** variables de entorno (API Keys, Secrets) para funcionar, garantizando que ninguna credencial quede expuesta.

5. **Lanzamiento:**
   - Haz clic en **Save and Deploy**.
   - Cloudflare construirá el sitio automáticamente y te otorgará un dominio gratuito (ej: `renkaidev-web.pages.dev`).

## Consideraciones Post-Despliegue

- **Actualizaciones Continuas (CI/CD):** Cada vez que realices un `git push` a la rama `main`, Cloudflare Pages detectará los cambios y compilará automáticamente una nueva versión del sitio en menos de 1 minuto.
- **Formulario de Contacto:** Al funcionar con un enlace dinámico `mailto:` en JavaScript, el formulario seguirá operativo bajo el protocolo estándar de cliente de correo, manteniendo intacta tu Política de Privacidad de "Cero Recolección de Datos en el Servidor".
- **Dominio Personalizado:** Puedes configurar tu propio dominio (`renkaidev.com`) desde el panel de configuración del proyecto en Cloudflare Pages.
