# Huellitas · App de adopción

Diseño de una app móvil para adoptar perros y gatos rescatados en Tulancingo de Bravo, Hidalgo. Es la continuación del sitio web [Huellitas Tulancingo](https://arturomqii005.github.io/Huellitas-WEB/) y conserva su identidad de **lotería mexicana**: cada peludo es una carta con número, nombre y un verso.

- **Integrantes:** Luis Arturo Jiménez Morales y Sebastián Banda Pasquel
- **Institución:** Universidad Politécnica de Tulancingo
- **Herramienta de diseño:** Google Stitch
- **Sitio web del proyecto:** https://arturomqii005.github.io/Huellitas-WEB/

> Proyecto académico. Los animales, refugios, cifras y contactos son ilustrativos.

## Contenido del repositorio

| Archivo | Qué contiene |
| --- | --- |
| `DESIGN.md` | Sistema de diseño en formato DESIGN.md (colores, tipografía, espacios, formas y componentes) y la especificación completa de la app: módulos, pantallas, flujos, modelo de datos, accesibilidad y prompts por pantalla. |
| `README.md` | Esta descripción. |

## El problema

En Tulancingo, los perros y gatos rescatados se anuncian en grupos de Facebook, donde cada aviso se pierde en pocas horas. Quien quiere adoptar no sabe qué requisitos piden los refugios, y quien quiere ayudar no sabe qué hace falta.

## La propuesta

- **La baraja:** se deslizan las cartas de los peludos, como en un juego, con un porcentaje de compatibilidad que explica por qué.
- **Solicitud guiada** en cinco pasos y seguimiento en tiempo real: Enviada → En revisión → Entrevista → Visita al hogar → ¡Adoptado!
- **Ayudar:** necesidades del mes, donaciones, padrinazgo, voluntariado y hogar temporal.
- **Reportar:** aviso rápido de animales en la calle, perdidos o en peligro, con foto y ubicación.
- **Mi tabla:** una tabla de lotería 4 × 4 donde cada buena acción pone un frijol y se ganan insignias.
- **Panel del refugio:** publicación de peludos con un generador de cartas y tablero de solicitudes.

## Módulos

1. Bienvenida y perfil de hogar
2. Inicio · La baraja
3. Adoptar · La tabla
4. La carta · Ficha del peludo
5. Solicitud de adopción
6. Mis solicitudes
7. Ayudar · Echa la mano
8. Reportar
9. Historias · Ya tienen casa
10. Yo · Mi tabla
11. Mi peludo (después de adoptar)
12. Avisos
13. Ajustes y accesibilidad
14. Panel del refugio (tablet y web)

## Paleta

| Tinta | Código | Uso |
| --- | --- | --- |
| Añil | `#1F2A6B` | Texto, contornos, barra inferior y reverso de las cartas |
| Rosa mexicano | `#D6006F` | Botón principal y acciones |
| Cempasúchil | `#FFB30F` | Botón Reportar, compatibilidad y pestaña activa |
| Papel | `#FFFBF2` | Fondo general |

Tipografías: **Alfa Slab One** para títulos y nombres de las cartas, y **Archivo** para el texto.

## Cómo usar el DESIGN.md

1. En [Google Stitch](https://stitch.withgoogle.com), sube `DESIGN.md` en **Upload a DESIGN.md file**.
2. En **Add website**, agrega el sitio del proyecto como referencia de estilo.
3. Escribe el prompt de la app y elige el modo **App**.
4. Para generar pantallas sueltas, usa los prompts de la sección **Prompts por pantalla** del DESIGN.md.

El archivo se validó con el verificador oficial del formato:

```
npx @google/design.md lint DESIGN.md
```

Resultado: 0 errores y 0 advertencias.
