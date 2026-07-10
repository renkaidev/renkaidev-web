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
Mapeé el viaje del dato desde el terreno hasta el sistema central, evidenciando las múltiples etapas de reescritura de información. Quedó claro que el problema no era el ERP central, sino la desconexión del punto de origen de los datos con el sistema, generando fricción administrativa innecesaria.

## Solución
Desarrollé un sistema digital *mobile-first* diseñado específicamente para centralizar y estandarizar la recolección de datos de forma directa en el lugar de trabajo (terreno). Diseñé la arquitectura backend, normalicé el modelo de datos y construí los endpoints para conectar la app sin fricciones con el backend, eliminando el trabajo de digitación manual en la oficina.

## Estado Actual
Es un MVP en desarrollo. Actualmente se encuentra en fase de pruebas iniciales, sin datos de producción medidos aún. La proyección es eliminar completamente la duplicidad de entrada de datos y reducir los errores de transcripción a cero.

## Tecnologías
Backend API con FastAPI, modelado de datos en PostgreSQL, cliente móvil en Flutter consumiendo servicios REST.
