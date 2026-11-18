# Contexto del proyecto

## Producto

Sitio web estático que funciona como presentación interactiva de 22 diapositivas para defender ante un comité escolar el proyecto de ERP de Nueva Central de Plásticos. Se navega desde el navegador con teclado, botones, pantalla completa, vista general, fuentes y una simulación interactiva del método de Lange.

## Stack y estructura

| Elemento | Decisión |
| --- | --- |
| Frontend | HTML, CSS y JavaScript sin compilación |
| Publicación | ChatGPT Sites, sitio privado configurado en `.openai/hosting.json` |
| Directorio publicado | `dist/` |
| Documentación | Markdown en la raíz del proyecto |
| Control de versiones | Git local en rama `main`; remoto `origin` en `Carlosgrm1444/proyecto-final-evaluacion-de-proyectos` |

## Fuentes de autoridad

1. `Unidad_3.pdf`: método de capacidad, cursograma, Lange, localización, personal e indicadores.
2. Diagnóstico final de Nueva Central de Plásticos: hallazgos, procesos, riesgos, usuarios y propuesta recomendada.
3. Propuesta comercial de ROMEX: fases, saldos, soporte, límites del servicio y costos separados.
4. `Proyecto_2_corregido_Carlos_y_Alejandro.docx`: síntesis previa, UML y estudio de mercado.
5. W3C WCAG 2.2 y Glosario Digital de LSM: accesibilidad y actividad de LSM.

## Hechos relevantes del caso

- El estudio considera 20 usuarios principales y 34 procesos funcionales.
- El diagnóstico registra 202 hallazgos, 34 procesos principales, 57 pruebas diseñadas y 20 riesgos.
- La fase 1 cubre la operación mexicana. La propuesta estima 25–26 semanas Enterprise o 33–34 semanas Community.
- Enterprise requiere licencias y Odoo.sh por separado. Community incluye servidor estándar conforme al alcance comercial.
- La recomendación técnica de ROMEX es Enterprise por cobertura estándar y menor desarrollo propio. La decisión final depende de pruebas y costos completos.

## Límites conocidos

- No hay resultado de encuestas aplicado al grupo de 20 personas.
- No hay medición real de concurrencia, capacidad, tiempos por etapa, conectividad, inventario físico ni horas laborales del personal.
- No hay cotización contractual de licencias Enterprise, Odoo.sh, hardware, PAC o timbres.
- Las cantidades marcadas como escenarios académicos no describen operaciones ya medidas.
