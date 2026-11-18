# Memoria del proyecto

## Decisiones vigentes

- La raíz del proyecto es esta carpeta: `presentacion-ncp`.
- La presentación se entrega como sitio web, no como PowerPoint.
- El sitio de ChatGPT Sites se mantiene privado. El enlace publicado se conserva fuera de este archivo para evitar duplicar configuración de acceso.
- Todos los cambios se trabajan dentro del proyecto.
- El proyecto Git usa la rama `main` y el remoto `origin` apunta a `Carlosgrm1444/proyecto-final-evaluacion-de-proyectos`.

## Supuestos académicos declarados

| Tema | Supuesto | Uso |
| --- | --- | --- |
| Capacidad | 60 % de concurrencia, 20 sesiones simultáneas y prueba de 60 minutos | Explicar cómo validar capacidad, no afirmar rendimiento. |
| Jornada | 8 horas de jornada y 6 horas humanas efectivas | Condición de planeación para la prueba. |
| Lange | 3 años y tasa de descuento de 10 % | Igual que el ejemplo de la Unidad III. |
| Lange interactivo | 0–20 licencias nuevas, tipo de cambio 16–22 MXN/USD y Odoo.sh 0–6,000 MXN/mes | Sensibilidad de costos faltantes. |
| Personal | 45 min por prueba, 360 min efectivos por persona/día y 5 días | Planeación de 57 pruebas, resultado: 2 personas. |
| Localización | Pesos y calificaciones de Odoo.sh frente a servidor en matriz | Ejercicio preliminar por puntos, pendiente de evidencia. |

## Reglas de cálculo

- Capacidad del proceso: menor capacidad de las etapas que pasan todos los pedidos.
- Pendiente diario: `máximo(0, demanda/h − capacidad/h) × horas efectivas`.
- Lange: inversión inicial más costo de operación anual descontado para los tres periodos.
- Personal: carga de trabajo dividida entre tiempo efectivo disponible por persona.

## Verificación realizada

- Sintaxis de `dist/app.js` validada con Node.
- Se revisaron 22 diapositivas y los identificadores HTML.
- Se hicieron capturas en 1024×768, 1366×768, 1440×900 y móvil de 390×844.
- Se corrigió el recorte del diagrama UML y el ajuste de las diapositivas de tecnología en formato 1024×768.

## No olvidar

- Las cifras del ejemplo de clase no pertenecen al caso.
- El soporte se sustituye al avanzar de fase. No se suman las mensualidades de cada fase.
- No sumar USD y MXN sin un tipo de cambio explícito.
- Los costos de Enterprise relacionados con licencias y Odoo.sh requieren contratación o cotización.
