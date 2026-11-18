# Guía breve para exponer el proyecto ERP de Nueva Central

Esta guía acompaña la presentación del navegador. Los ejemplos de la Unidad III explican métodos. Sus cifras de clínicas, expedientes, escáneres y oficinas **no son datos de Nueva Central de Plásticos**.

## Recorrido de la presentación

| Apartado solicitado | Diapositivas | Idea que deben defender |
| --- | ---: | --- |
| Empresa, problema, objetivo y alcance | 2–4 | El circuito operativo cruza áreas y registros. La evaluación aún no autoriza la implantación. |
| ERP, usuarios, UML y calidad | 5–7 | La integración, trazabilidad y permisos por rol son esenciales. |
| Mercado y alternativas | 8–9 | La demanda del estudio se expresa en 20 usuarios principales y 34 procesos, unidades distintas. |
| Muestra y cuestionario | 10 | La muestra calculada se redondea a 20: se propone censar al grupo delimitado. No hay respuestas reportadas. |
| Tamaño y capacidad | 11 | Las cuentas habilitadas no equivalen a usuarios simultáneos ni al rendimiento observado. |
| Proceso y cuello de botella | 12 | El cursograma identifica una espera candidata. Hace falta medir tiempos para confirmarla. |
| Tecnología y Lange | 13–15 | Se comparan inversión y operación con el mismo horizonte y tasa. Los controles permiten explorar costos no contratados. |
| Localización | 16 | Los pesos suman 1.00 y se prefiere la mayor puntuación entre opciones que satisfagan requisitos obligatorios. |
| Organización y personal | 17 | Se distinguen funciones temporales y permanentes; el cálculo de pruebas produce dos personas. |
| Inversión y operación | 18–19 | Las versiones son excluyentes y sus cuotas de soporte cambian por fase. |
| Riesgos, indicadores y conclusión | 20–21 | La recomendación técnica y el costo hipotético son dimensiones de decisión que aún requieren pruebas. |
| Inclusión y LSM | 22 | Practiquen ambos el saludo, la presentación y el agradecimiento con la fuente de LSM citada. |

## Cinco métodos de la Unidad III aplicados al caso

### 1. Tamaño y capacidad

La profesora distingue capacidad de **diseño** (meta técnica), del **sistema** (límite del conjunto con sus restricciones) y **real** (lo observado en operación), y pide una unidad por tiempo. En el caso hay 20 usuarios principales para la fase 1. El diagnóstico no mide cuántos coinciden en una hora pico ni el rendimiento de la solución. Por eso la diapositiva 11 plantea una **prueba de 20 sesiones simultáneas durante 60 minutos**, no una capacidad ya conseguida.

El escenario académico usa una concurrencia de 60 %: `20 × 0.60 = 12 usuarios simultáneos en la hora pico`. Si la prueba confirma 20, habría un margen de `20 − 12 = 8`. La jornada de 8 horas y 6 horas humanas efectivas también son supuestos para planear; deben confirmarse los horarios reales de ambas sedes. Las 40 cuentas de planeación y las 18 cuentas activas de una instancia histórica no demuestran rendimiento.

### 2. Proceso y cuello de botella

El cursograma clasifica **operación, inspección, transporte y demora**. La revisión de existencia, unidad y crédito, seguida de una posible espera de autorización, es una etapa candidata a limitar el pedido. El diagnóstico describe el riesgo, pero no ofrece tiempos por etapa. Para comprobarlo habría que registrar hora de entrada y salida, pedidos recibidos y pedidos terminados por etapa en la misma jornada.

Como en la actividad de clase: `capacidad del proceso = mínima capacidad de sus etapas`. Si llegan más pedidos por hora que los que puede completar la etapa limitante, `pendientes adicionales por día = (demanda/h − capacidad/h) × horas efectivas`. No se asignan números de pedidos porque no constan en el diagnóstico.

### 3. Método de Lange

Se usa el ejemplo didáctico de **tres periodos y tasa de 10 %**, aplicado a un escenario de tres años de operación una vez liberada la fase 3. La fórmula del ejemplo resuelto es `VP = I0 + C1/1.10 + C2/1.10² + C3/1.10³`. Si el costo anual es constante, el factor presente es `2.48685199`.

| Alternativa | I0 después del crédito del diagnóstico | Soporte mensual en fase 3 | Soporte anual | Valor presente parcial |
| --- | ---: | ---: | ---: | ---: |
| Enterprise | MXN $253,200 | MXN $7,900 | MXN $94,800 | MXN $488,954 |
| Community | MXN $384,400 | MXN $9,900 | MXN $118,800 | MXN $679,838 |

Los importes iniciales son el saldo completo de implementación, colocado en `I0` para comparar; en la propuesta los pagos ocurren por fases. La diferencia de los valores presentes parciales es **MXN $190,884**. Dividida entre el factor presente, Enterprise podría absorber hasta **MXN $76,757 de costo anual adicional** antes de superar a Community. Aquí faltan licencias y Odoo.sh de Enterprise.

La gráfica interactiva permite variar de 0 a 20 licencias nuevas, un tipo de cambio **supuesto** y un costo mensual **supuesto** de Odoo.sh. El precio regular de US$61 por usuario y mes procede del Proyecto 2 corregido, no de un contrato vigente. El ejemplo inicial del gráfico (20 licencias, 18 MXN/USD y MXN $3,000/mes de alojamiento) produce aproximadamente **MXN $1,233,815 Enterprise** y **MXN $679,838 Community**. Este resultado ilustra sensibilidad de costos; requiere confirmar suscripciones existentes, cotizaciones, impuestos y que ambas opciones cumplan funciones y capacidad.

**Si preguntan por qué ROMEX recomienda Enterprise aunque la gráfica puede favorecer Community:** el diagnóstico prioriza cobertura funcional estándar y menor desarrollo propio. La gráfica evalúa costos con supuestos. Antes de elegir, se necesita validar ambos aspectos con pruebas y ofertas completas.

### 4. Método cualitativo por puntos

Para cada factor se multiplica peso por calificación y se suman los resultados. Los pesos de la diapositiva 16 suman `0.30 + 0.25 + 0.20 + 0.15 + 0.10 = 1.00`. Odoo.sh recibe `7.10`; un servidor en la matriz, `5.35`. Las notas son **preliminares del equipo**, no auditorías de servicio. Se necesitan cotizaciones, acuerdo de nivel de servicio, pruebas de conectividad y evidencia de respaldo antes de decidir formalmente. La alternativa local sirve para evaluar la localización física; no sustituye automáticamente la propuesta de servidor Community administrado por ROMEX.

### 5. Cálculo del personal

La profesora usa `personas = carga de trabajo ÷ tiempo efectivo`. El diagnóstico enumera **57 pruebas funcionales diseñadas**, sin afirmar que ya se aprobaron. Para planear una semana de pruebas se supone `45 minutos por prueba`, `360 minutos efectivos por persona y día` y `5 días`: carga `57 × 45 = 2,565 minutos`; capacidad por persona `360 × 5 = 1,800 minutos`; `2,565 ÷ 1,800 = 1.425`, por lo que se requieren **2 personas equivalentes durante esa semana**. Después deben revisarse picos, ausencias y disponibilidad de los usuarios clave. No se confunden horas de máquina con horas humanas.

## Tres datos que conviene conseguir antes de entregar o defender

1. **Capacidad:** horario real por sede, concurrencia en la hora pico y resultado de una prueba de carga.
2. **Costos:** número de licencias Enterprise aprovechables, precio contractual de Odoo.sh, tipo de cambio de contratación e inventario de equipos.
3. **Proceso:** tiempos por etapa y número de pedidos que llegan y se terminan por hora para confirmar el cuello de botella y la línea base de indicadores.

## Fuentes del caso y del método

- Gómez Arellano, Athala Dulce Edith. *Unidad III. Estudio técnico*. Material de clase, noviembre de 2026; especialmente diapositivas 7–24, 36–47.
- ROMEX. *Diagnóstico final de Nueva Central de Plásticos*. 14 de octubre de 2026, pp. 3–17.
- ROMEX. *Propuesta comercial de implementación Odoo para Nueva Central*. 14 de octubre de 2026, pp. 2–4.
- Herrera García, Jesús Alejandro y Rodríguez Macías, Carlos Gabriel. *Proyecto 2 corregido*. Evaluación de proyectos informáticos, octubre de 2026.
