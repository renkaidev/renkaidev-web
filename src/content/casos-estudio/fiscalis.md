---
title: "Fiscalis"
description: "Digitalización de la recolección de datos en terreno mediante un sistema móvil integrado para eliminar redundancia operativa."
year: 2026
status: "Completado"
role: "Desarrollo End-to-End"
tags: ["Transformación Digital", "Aplicación Móvil", "Flutter", "FastAPI", "PostgreSQL", "CI/CD"]
---

## Problema
La empresa sufría de una grave redundancia operativa. Los empleados registraban la misma información múltiples veces a través de distintos medios no estandarizados: formularios de papel, mensajes de WhatsApp, cuadernos físicos y, finalmente, un ERP. Este proceso causaba cuellos de botella masivos, era ineficiente y muy propenso a errores.

## Análisis
Se mapeó el viaje del dato desde el terreno hasta el sistema central, evidenciando las múltiples etapas de reescritura de información. Quedó claro que el problema no era el ERP central, sino la desconexión del punto de origen de los datos con el sistema, generando fricción administrativa innecesaria.

## Solución
Se desarrolló un sistema digital *mobile-first* diseñado específicamente para centralizar y estandarizar la recolección de datos de forma directa en el lugar de trabajo (terreno), conectándose sin fricciones con el backend para eliminar el trabajo de digitación manual en la oficina.

## Resultado Esperado
Eliminación completa de la duplicidad de entrada de datos, reducción de errores de transcripción a cero y recuperación de horas de trabajo administrativo que antes se perdían pasando datos de papel a digital.

## Tecnologías
El desarrollo se realizó con un enfoque Full-Stack moderno:
- **Aplicación Móvil**: Flutter
- **Backend API**: FastAPI
- **Base de Datos**: PostgreSQL
