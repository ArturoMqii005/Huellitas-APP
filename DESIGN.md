---
version: alpha
name: Huellitas
description: App de adopción de perros y gatos rescatados en Tulancingo, Hidalgo. Cada peludo es una carta de lotería mexicana impresa en serigrafía de tres tintas.
colors:
  primary: "#D6006F"
  primary-pressed: "#A8005A"
  primary-container: "#FDE6F0"
  on-primary: "#FFFFFF"
  on-primary-container: "#9E0052"
  secondary: "#1F2A6B"
  secondary-deep: "#141C4D"
  secondary-container: "#E4E7F6"
  on-secondary: "#FFFFFF"
  tertiary: "#FFB30F"
  tertiary-container: "#FFF2CF"
  on-tertiary: "#1F2A6B"
  rosa-tinta: "#E6007E"
  neutral: "#4B5079"
  surface: "#FFFBF2"
  surface-card: "#FFFFFF"
  on-surface: "#1F2A6B"
  outline: "#1F2A6B"
  frijol: "#6B3F1D"
  success: "#17734A"
  success-container: "#DDF3E6"
  error: "#B42318"
  error-container: "#FDE8E6"
  noche: "#0E1435"
  noche-surface: "#1A2252"
  on-noche: "#FFF2CF"
typography:
  display-lg:
    fontFamily: Alfa Slab One
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0.005em
  headline-lg:
    fontFamily: Alfa Slab One
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.05
  headline-md:
    fontFamily: Alfa Slab One
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.1
  headline-sm:
    fontFamily: Alfa Slab One
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.15
  carta-nombre:
    fontFamily: Alfa Slab One
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0.06em
  carta-numero:
    fontFamily: Alfa Slab One
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
  title-lg:
    fontFamily: Archivo
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
  verso:
    fontFamily: Archivo
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.4
  body-lg:
    fontFamily: Archivo
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
  body-md:
    fontFamily: Archivo
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Archivo
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
  label-lg:
    fontFamily: Archivo
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.01em
  label-md:
    fontFamily: Archivo
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.0
  label-sm:
    fontFamily: Archivo
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.04em
  dato-numero:
    fontFamily: Archivo
    fontSize: 28px
    fontWeight: 800
    lineHeight: 1.0
    fontVariation: "'wdth' 125"
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 20px
  xl: 28px
  full: 999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  margen: 20px
  medianil: 12px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 16px
    height: 52px
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 16px
    height: 52px
  button-accent:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 16px
    height: 52px
  button-cantar:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.full}"
    size: 56px
  fab-reportar:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
    size: 64px
  carta-frente:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 10px
    width: 280px
    height: 420px
  carta-reverso:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.md}"
    width: 280px
    height: 420px
  carta-banda-nombre:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.secondary}"
    typography: "{typography.carta-nombre}"
    height: 40px
  carta-numero:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.secondary}"
    typography: "{typography.carta-numero}"
    rounded: "{rounded.xs}"
    size: 30px
  sello-me-late:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.rosa-tinta}"
    typography: "{typography.headline-md}"
    rounded: "{rounded.sm}"
  chip-filtro:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 38px
  chip-filtro-activo:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
  chip-atributo:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: 8px
  badge-compatibilidad:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 8px
  badge-urgente:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 8px
  badge-en-revision:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
  badge-adoptado:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
  aviso-exito:
    backgroundColor: "{colors.success-container}"
    textColor: "{colors.success}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px
  aviso-error:
    backgroundColor: "{colors.error-container}"
    textColor: "{colors.error}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px
  input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 16px
    height: 52px
  input-error:
    backgroundColor: "{colors.error-container}"
    textColor: "{colors.error}"
  top-app-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-sm}"
    height: 64px
  tab-bar:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-sm}"
    height: 76px
  tab-bar-activo:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
  frijol-marcador:
    backgroundColor: "{colors.frijol}"
    textColor: "{colors.tertiary-container}"
    rounded: "{rounded.full}"
    size: 18px
  hoja-inferior:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: 24px
  tarjeta-lista:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 16px
  barra-progreso:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    height: 12px
  barra-progreso-relleno:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    height: 12px
  banner-ayuda:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 20px
  dato-panel:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.secondary}"
    typography: "{typography.dato-numero}"
    rounded: "{rounded.md}"
    padding: 20px
  toast:
    backgroundColor: "{colors.secondary-deep}"
    textColor: "{colors.on-noche}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 16px
  divisor:
    backgroundColor: "{colors.outline}"
    height: 2px
  pantalla-noche:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.on-noche}"
  tarjeta-noche:
    backgroundColor: "{colors.noche-surface}"
    textColor: "{colors.on-noche}"
    rounded: "{rounded.md}"
    padding: 16px
---

# Huellitas · App de adopción

> **Cada peludo es una carta. Encuentra la tuya.**
>
> Huellitas es una app móvil para adoptar perros y gatos rescatados en Tulancingo, Hidalgo. Reúne a los animales de varios refugios en una baraja de lotería mexicana, acompaña a la familia durante toda la adopción y conecta a quien quiere ayudar con lo que los refugios necesitan cada mes.

Este archivo sigue el formato abierto **DESIGN.md**. Arriba, entre las líneas `---`, están los tokens del sistema de diseño (colores, tipografía, espacios, formas y componentes). Las primeras ocho secciones explican cómo usarlos. A partir de **Iconografía e ilustración** se describe la aplicación completa: módulos, pantallas, flujos, datos, textos y prompts listos para generar cada pantalla.

**Contenido**

1. [Overview](#overview): concepto, problema, usuarios y principios
2. [Colors](#colors): las tres tintas y sus usos
3. [Typography](#typography): escala tipográfica
4. [Layout](#layout): rejilla, márgenes y medidas clave
5. [Elevation & Depth](#elevation--depth): sombras de imprenta y texturas
6. [Shapes](#shapes): esquinas, sellos y frijoles
7. [Components](#components): anatomía y estados
8. [Do's and Don'ts](#dos-and-donts): reglas rápidas
9. [Iconografía e ilustración](#iconografía-e-ilustración)
10. [Movimiento y microinteracciones](#movimiento-y-microinteracciones)
11. [Mapa de la app](#mapa-de-la-app)
12. [Módulos](#módulos): las 14 cartas de la app
13. [Flujos principales](#flujos-principales)
14. [Modelo de datos](#modelo-de-datos)
15. [Accesibilidad](#accesibilidad)
16. [Contenido de ejemplo y microcopy](#contenido-de-ejemplo-y-microcopy)
17. [Prompts por pantalla](#prompts-por-pantalla)
18. [Fases del proyecto](#fases-del-proyecto)
19. [Checklist de calidad](#checklist-de-calidad)

---

## Overview

### El problema

En Tulancingo, los perros y gatos rescatados se anuncian en grupos de Facebook y en carteles. Cada aviso se pierde entre cientos de publicaciones en pocas horas, nadie sabe qué requisitos piden los refugios y quien quiere ayudar no sabe qué hace falta ni dónde llevarlo. Los animales adultos y los de mayor edad pasan meses esperando.

### La solución

Una app que convierte la adopción en algo cercano y festivo sin dejar de ser seria:

- **Una sola baraja** con los peludos de todos los refugios de la región, con filtros y un porcentaje de compatibilidad que explica por qué.
- **Una solicitud guiada** en cinco pasos, con seguimiento en tiempo real, como el rastreo de un paquete.
- **Formas concretas de ayudar**: donar, apadrinar, ser voluntario, dar hogar temporal o reportar un animal en la calle.
- **Un panel para los refugios** que publica cada peludo como una carta de lotería en menos de dos minutos.

### Personalidad visual

**Lotería mexicana impresa en serigrafía de tres tintas.** Cada peludo es una carta con número, ilustración, nombre en una banda inferior y un verso corto que rima. Las ilustraciones imitan una impresión artesanal: tintas planas, tramas de puntos y un ligero desfase entre colores.

La app debe sentirse **festiva, cálida, artesanal, honesta y clara**. Es una feria de pueblo bien organizada: mucho color y carácter, pero cada pantalla tiene un solo objetivo y se entiende en un vistazo.

### Usuarios

| Usuario | Qué necesita | Dónde vive en la app |
| --- | --- | --- |
| **Adoptante** (familias, jóvenes, estudiantes, adultos mayores) | Encontrar un peludo compatible y saber exactamente qué sigue | Inicio, Adoptar, Solicitud, Yo |
| **Ayudante** (donantes, voluntarios, padrinos) | Saber qué falta este mes y ayudar en dos toques | Ayudar, Mi tabla |
| **Vecino que reporta** | Avisar rápido de un animal en la calle, perdido o en peligro | Botón central Reportar |
| **Refugio o rescatista** | Publicar peludos, revisar solicitudes y pedir lo que falta | Panel del refugio (tablet y web) |

### Plataformas

- **App móvil** para iOS y Android. Lienzo base: **390 × 844 px**.
- **Panel del refugio** para tablet (1024 px) y computadora (1280 px).
- Modo claro por defecto y modo oscuro **«Noche de lotería»**.

### Principios de diseño

1. **Cada peludo es una carta.** Nunca una foto suelta de catálogo: siempre número, nombre, verso e ilustración.
2. **Tres tintas y papel.** Añil, rosa mexicano y cempasúchil sobre papel crema. El café del frijol es el único color extra y solo marca lo elegido.
3. **Una acción principal por pantalla.** Solo un botón rosa visible a la vez.
4. **Celebrar cada paso.** Cada avance importante se festeja con un «¡Lotería!».
5. **Claro para todos.** Contraste AA, texto que crece, versos que se leen en voz alta y nada que dependa solo del color.

---

## Colors

La paleta es la de una imprenta de lotería: tres tintas fuertes sobre papel crema. Proporción aproximada por pantalla: **60 % papel, 25 % añil, 10 % rosa, 5 % cempasúchil**.

### Las tres tintas

| Tinta | Token | Hex | Uso |
| --- | --- | --- | --- |
| Rosa mexicano | `primary` | `#D6006F` | Botón principal, enlaces de acción, relleno de barras de progreso |
| Rosa presionado | `primary-pressed` | `#A8005A` | Estado presionado del botón principal |
| Rosa claro | `primary-container` | `#FDE6F0` | Fondo de insignias urgentes y avisos suaves |
| Rosa sobre claro | `on-primary-container` | `#9E0052` | Texto sobre rosa claro |
| Rosa de tinta | `rosa-tinta` | `#E6007E` | Ilustraciones, patrón de huellas del reverso y sello «¡ME LATE!». Nunca para texto pequeño |
| Añil | `secondary` | `#1F2A6B` | Texto, contornos de 2–3 px, sombras duras, barra inferior, reverso de las cartas |
| Añil hondo | `secondary-deep` | `#141C4D` | Toasts y franjas oscuras |
| Añil claro | `secondary-container` | `#E4E7F6` | Chips de atributos y pista de las barras de progreso |
| Cempasúchil | `tertiary` | `#FFB30F` | Botón Reportar, insignia de compatibilidad, pestaña activa, sombra del botón principal, banner de ayuda |
| Cempasúchil claro | `tertiary-container` | `#FFF2CF` | Fondos de estados «en revisión» y tarjetas destacadas |

### Papel, texto y frijol

| Nombre | Token | Hex | Uso |
| --- | --- | --- | --- |
| Papel | `surface` | `#FFFBF2` | Fondo general de todas las pantallas |
| Cartulina | `surface-card` | `#FFFFFF` | Cartas, tarjetas, campos y hojas |
| Tinta de texto | `on-surface` | `#1F2A6B` | Texto principal (es el mismo añil) |
| Gris pizarra | `neutral` | `#4B5079` | Texto secundario, pies de foto y metadatos |
| Contorno | `outline` | `#1F2A6B` | Bordes y divisores |
| Frijol | `frijol` | `#6B3F1D` | Marcador de selección: favoritos, pestaña activa, pasos completados |

### Estados

| Estado | Fondo | Texto | Uso |
| --- | --- | --- | --- |
| Éxito / Adoptado | `success` `#17734A` (verde nopal) | blanco | Sello «¡ADOPTADO!», solicitud aprobada |
| Éxito suave | `success-container` `#DDF3E6` | `success` | Confirmaciones dentro de pantalla |
| Error | `error-container` `#FDE8E6` | `error` `#B42318` | Campos con error, avisos de falla |
| En revisión | `tertiary-container` | `secondary` | Solicitud en proceso |

### Noche de lotería (modo oscuro)

| Nombre | Token | Hex | Uso |
| --- | --- | --- | --- |
| Noche | `noche` | `#0E1435` | Fondo general |
| Noche superficie | `noche-surface` | `#1A2252` | Cartas y tarjetas |
| Luz de vela | `on-noche` | `#FFF2CF` | Texto |

En modo oscuro, las cartas conservan su frente blanco (son objetos impresos), el rosa sube a `#FF4FA3` para mantener contraste y el cempasúchil pasa a ser el color de acción principal. Se agregan estrellitas cempasúchil dispersas en los fondos.

---

## Typography

Dos familias de Google Fonts, con papeles muy distintos:

- **Alfa Slab One**, una slab gruesa con aire de cartel de feria: títulos, nombres y números de las cartas.
- **Archivo**, una sans grotesca variable y muy legible: todo el texto, botones y formularios. Su eje de ancho (`wdth`) se usa expandido para las cifras grandes.

| Token | Familia | Tamaño / interlínea | Peso | Uso |
| --- | --- | --- | --- | --- |
| `display-lg` | Alfa Slab One | 44 / 44 | 400 | Bienvenida y pantallas de celebración |
| `headline-lg` | Alfa Slab One | 32 / 34 | 400 | Título de cada pestaña |
| `headline-md` | Alfa Slab One | 26 / 29 | 400 | Títulos de sección y sellos |
| `headline-sm` | Alfa Slab One | 20 / 23 | 400 | Barra superior y títulos de tarjetas |
| `carta-nombre` | Alfa Slab One | 18 / 18, espaciado 0.06em | 400 | Banda del nombre en MAYÚSCULAS |
| `carta-numero` | Alfa Slab One | 16 / 16 | 400 | Número en la esquina de la carta |
| `title-lg` | Archivo | 20 / 26 | 700 | Subtítulos y encabezados de lista |
| `verso` | Archivo *itálica* | 17 / 24 | 500 | El verso de cada carta, entre comillas latinas «» |
| `body-lg` | Archivo | 18 / 28 | 400 | Historias y textos largos |
| `body-md` | Archivo | 16 / 24 | 400 | Texto general |
| `body-sm` | Archivo | 14 / 20 | 400 | Metadatos y ayudas |
| `label-lg` | Archivo | 16 / 16 | 700 | Botones |
| `label-md` | Archivo | 14 / 14 | 700 | Chips e insignias |
| `label-sm` | Archivo | 12 / 14, espaciado 0.04em | 600 | Barra inferior y etiquetas pequeñas |
| `dato-numero` | Archivo expandida (`wdth` 125) | 28 / 28 | 800 | Cifras: días esperando, kilos donados, porcentajes |

**Reglas**

- Alfa Slab One nunca en párrafos ni en botones.
- Mayúsculas solo en la banda de nombre de la carta y en los sellos («¡ME LATE!», «PASO», «¡ADOPTADO!»).
- Los versos siempre van en itálica y entre comillas latinas: «Sale de noche y de día, pasea en tu compañía.»
- Máximo dos pesos de Archivo por pantalla (400 y 700).

---

## Layout

- **Rejilla base de 4 px.** Todos los espacios salen de la escala `spacing`.
- **Márgenes laterales:** 20 px en teléfono, 32 px en tablet y 48 px en computadora.
- **Columnas:** 4 en teléfono (medianil de 12 px), 8 en tablet y 12 en computadora.
- **Zonas táctiles** de al menos 48 × 48 px.
- **Barra inferior** de 76 px más el área segura, con el botón Reportar sobresaliendo 20 px hacia arriba.
- **Barra superior** de 64 px que se compacta al hacer scroll (el título grande pasa a `headline-sm`).

### Medidas clave

| Elemento | Teléfono | Tablet / web |
| --- | --- | --- |
| Carta en la baraja | 280 × 420 px (proporción 2:3), centrada | 320 × 480 px |
| Carta en la tabla de Adoptar | 2 columnas (~165 px de ancho) | 4 columnas |
| Mi tabla (favoritos y buenas acciones) | Cuadrícula 4 × 4 de minicartas de 76 px | 4 × 4 de 120 px |
| Hoja inferior | Ancho completo, alto máximo 90 % | Panel lateral de 420 px |
| Botón principal fijo en la ficha | Ancho completo menos márgenes, sobre fondo papel con desvanecido | Columna derecha fija |

### Patrones de pantalla

- **Pestañas principales:** título grande en Alfa Slab One, subtítulo de una línea y contenido en bloques separados por 32 px.
- **Detalle:** imagen o carta arriba, contenido en secciones y botón principal fijo abajo.
- **Formularios:** un tema por pantalla, campos apilados y el botón Continuar siempre visible.

---

## Elevation & Depth

Nada de sombras difuminadas ni degradados. La profundidad se logra como en un impreso: **contornos de tinta añil y sombras duras desplazadas**, como si el papel estuviera recortado y pegado encima de otro.

| Nivel | Estilo | Dónde |
| --- | --- | --- |
| 0 · Plano | Borde 2 px añil, sin sombra | Campos, chips sin seleccionar, tarjetas de lista |
| 1 · Recorte | Borde 2 px + sombra `3px 3px 0 #1F2A6B` | Chips activos, tarjetas destacadas |
| 2 · Carta | Borde 3 px + sombra `5px 5px 0 #1F2A6B` | Cartas, botones secundarios, tarjetas de refugio |
| 3 · En mano | Borde 3 px + sombra `8px 8px 0 #1F2A6B` | Carta activa de la baraja, hojas y diálogos |

- **Botón principal:** rosa con sombra `4px 4px 0 #FFB30F` (cempasúchil). Al presionarlo se desplaza 3 px y la sombra desaparece: parece que se imprime.
- **Velo de modal:** añil al 60 % de opacidad.
- **Texturas:** grano de papel al 4 % sobre todo el fondo y trama de puntos (halftone) al 8 % en encabezados y fondos de ilustración.

---

## Shapes

| Forma | Radio | Dónde |
| --- | --- | --- |
| Carta de lotería | `md` 12 px | Cartas, tarjetas, botones |
| Campo | `sm` 8 px | Inputs, selects, chips de atributo |
| Número de carta | `xs` 4 px | Recuadro del número en la esquina |
| Hoja inferior | `xl` 28 px (solo arriba) | Filtros, detalles en mapa |
| Banner | `lg` 20 px | Banner de ayuda, tarjetas de historia |
| Píldora / círculo | `full` | Chips de filtro, insignias, botón Cantar y botón Reportar |

**Formas propias de la marca**

- **Frijol:** óvalo de 18 × 12 px girado −20°, café `frijol` con un brillo pequeño. Marca lo elegido.
- **Sello de goma:** rectángulo con borde doble y textura gastada, girado ±12°. Para «¡ME LATE!», «PASO» y «¡ADOPTADO!».
- **Insignia:** círculo con borde festoneado y un anillo punteado interior, como un sello de correo.
- **Papel picado:** banderines con huellas, huesos, estrellas y corazones calados. Solo en pantallas de celebración y encabezados de temporada.
- **Huella:** cuatro óvalos y una almohadilla. Patrón del reverso de las cartas y de los estados vacíos.

---

## Components

### Carta de lotería (el componente estrella)

**Anatomía del frente:**

1. Marco blanco de 10 px con borde de 3 px añil.
2. Recuadro del número en la esquina superior izquierda (`carta-numero`).
3. Ilustración del peludo sobre un fondo de trama de puntos, con un objeto que hace referencia a su verso (luna, nube, pelota, cojín…).
4. Banda inferior con el nombre en mayúsculas (`carta-banda-nombre`), separada por una línea de 3 px.

**Reverso:** fondo añil con patrón de huellas rosas, un medallón cempasúchil al centro con la «H» de Huellitas y un marco interior punteado.

| Estado | Cómo se ve |
| --- | --- |
| Reverso | Antes de revelarse en la baraja y en la carga |
| Frente | Estado normal |
| Volteando | Giro 3D en Y de 600 ms |
| Arrastrando | Rotación de hasta 12° con un sello que aparece según la dirección |
| Favorita | Frijol en la esquina superior derecha |
| Urgente | Insignia rosa claro «Lleva 214 días esperando» |
| Adoptada | Sello verde nopal «¡ADOPTADO!» girado −12° y la ilustración en un solo tono |
| Compatibilidad | Insignia cempasúchil «92 % compatible» flotando sobre el borde superior |

### Botones

| Tipo | Token | Uso |
| --- | --- | --- |
| Principal | `button-primary` | La acción más importante: «Quiero adoptar a Luna», «Enviar solicitud» |
| Secundario | `button-secondary` | Alternativas: «Apadrinar», «Compartir carta» |
| Acento | `button-accent` | Acciones de ayuda: «Donar ahora», «Me apunto» |
| Cantar | `button-cantar` | Círculo añil con ícono de bocina cempasúchil que lee el verso en voz alta |
| Reportar | `fab-reportar` | Botón central de la barra inferior, círculo cempasúchil de 64 px con borde añil |
| Texto | Sin fondo, `label-lg` añil subrayado | «Ver todas», «Saltar» |

Estados de todos los botones: normal, presionado (se desplaza y pierde la sombra), deshabilitado (añil claro con texto pizarra, sin sombra) y cargando (tres frijoles que rebotan).

### Chips e insignias

- `chip-filtro` y `chip-filtro-activo`: filtros de especie, edad, tamaño y energía. El activo es añil con ícono de palomita.
- `chip-atributo`: datos de la ficha: «2 años», «Hembra», «Mediana», «Esterilizada».
- `badge-compatibilidad`, `badge-urgente`, `badge-en-revision`, `badge-adoptado`: estados siempre con ícono y texto.

### Formularios

- Etiqueta arriba del campo (`label-md`), ayuda debajo (`body-sm` pizarra) y error con ícono y texto (`input-error`).
- Opciones como **tarjetas seleccionables** con ilustración (por ejemplo, «Casa con patio», «Departamento») en lugar de listas desplegables.
- Interruptores, deslizadores (horas fuera de casa) y contador (número de niños) con estilo de imprenta: borde añil y relleno rosa.

### Progreso

- **Barra de frijoles:** cinco frijoles en fila para los pasos de la solicitud. Los completos son café, el actual rebota y los pendientes son contornos punteados.
- **Barra de meta** (`barra-progreso` + `barra-progreso-relleno`): necesidades del mes, con el dato a la derecha («64 de 100 kg»).

### Navegación

- **Barra inferior** (`tab-bar`): añil, con íconos y etiquetas en blanco. La pestaña activa lleva un frijol arriba del ícono y una pastilla cempasúchil detrás (`tab-bar-activo`).
- **Barra superior** (`top-app-bar`): papel, título en Alfa Slab One, botón de atrás circular y, a la derecha, la campana de avisos con un punto rosa.

### Superficies

- **Hoja inferior** (`hoja-inferior`): filtros, detalles del mapa y confirmaciones, con agarradera añil de 40 × 5 px.
- **Diálogo:** carta grande centrada (nivel 3) con ilustración arriba.
- **Toast** (`toast`): añil hondo con texto luz de vela, abajo y encima de la barra inferior, durante 4 s.
- **Tarjeta de lista** (`tarjeta-lista`): refugios, eventos y solicitudes.
- **Dato de panel** (`dato-panel`): cifras grandes del panel del refugio y de las necesidades del mes.

### Línea de tiempo de la solicitud

Vertical, con un círculo por etapa: completas en verde nopal con palomita, la actual en cempasúchil con un pulso suave y las pendientes con contorno punteado. Cada etapa muestra fecha, responsable y un mensaje del refugio.

### Pines del mapa

Minicartas de 36 × 52 px con la ilustración del peludo o el ícono del lugar: refugio (casa añil), veterinaria (cruz rosa), punto de acopio (costal cempasúchil) y reporte (signo de admiración rosa).

### Estados vacíos y de carga

- **Carga:** reversos de carta con un brillo diagonal que los recorre.
- **Vacío:** ilustración de una carta boca abajo con un gato dormido encima y un texto amable con una sola acción.

---

## Do's and Don'ts

**Sí**

- Mostrar a cada peludo como carta, con número, nombre y verso.
- Usar el rosa solo para la acción principal de cada pantalla.
- Mantener contornos añil de 2–3 px y sombras duras desplazadas.
- Marcar lo elegido con el frijol: favoritos, pestaña activa, pasos completos.
- Celebrar los logros con papel picado y el grito «¡Lotería!».
- Escribir en español de México, con trato de «tú» y frases cortas.
- Acompañar cada estado de color con un ícono y un texto.

**No**

- No usar degradados, sombras difuminadas, vidrio esmerilado ni neón.
- No agregar colores fuera de las tres tintas, el papel y el frijol.
- No usar fotos de banco ni emojis como ilustración principal.
- No poner Alfa Slab One en párrafos ni en botones.
- No mezclar esquinas rectas y redondeadas en una misma vista.
- No usar sellos, papel picado ni confeti en pantallas de error o de malas noticias.
- No mostrar más de un botón rosa a la vez.

---

## Iconografía e ilustración

### Íconos

**Material Symbols Rounded**, peso 600, tamaño 24 px. Se usan con contorno en reposo y rellenos cuando están activos.

| Función | Ícono |
| --- | --- |
| Inicio · La baraja | `style` (cartas apiladas) |
| Adoptar · La tabla | `grid_view` |
| Reportar | `campaign` |
| Ayudar | `volunteer_activism` |
| Yo | `person` |
| Cantar el verso | `volume_up` |
| Me late / Paso | `favorite` / `close` |
| Compatibilidad | `join_inner` |
| Refugio | `home_pin` |
| Veterinaria | `medical_services` |
| Punto de acopio | `inventory_2` |
| Vacunas y salud | `vaccines` |
| Evento | `event` |
| Compartir | `ios_share` |
| Avisos | `notifications` |

### Ilustraciones

- Estilo **serigrafía de tres tintas**: rellenos planos, la línea añil desfasada 2 px de los colores, tramas de puntos en las sombras.
- Cada carta tiene un **objeto propio** que refuerza el verso: Luna con una luna creciente, Nube bajo una nube, Max con una pelota rosa, Rocky con lentes sobre un cojín.
- Las escenas vacías y de celebración usan los mismos personajes (Luna, Nube, Max…) para que la app tenga elenco propio.

### Fotos

Las fotos reales aparecen en la ficha, en las historias y en el seguimiento. Llevan un marco blanco de foto instantánea con borde añil, giradas ±2°, como pegadas en un álbum.

---

## Movimiento y microinteracciones

Curvas: **suave** `cubic-bezier(0.22, 0.61, 0.36, 1)` para entradas y salidas, y **rebote** `cubic-bezier(0.34, 1.56, 0.64, 1)` para los momentos alegres.

| Momento | Animación | Duración |
| --- | --- | --- |
| Bienvenida | Las cartas salen del mazo y se reparten en abanico, una cada 60 ms | 900 ms |
| Revelar carta | Giro 3D del reverso al frente | 600 ms, suave |
| Deslizar en la baraja | La carta sigue al dedo con hasta 12° de giro, el sello «¡ME LATE!» o «PASO» aparece con escala 1.3 → 1 | Tiempo real |
| Guardar favorito | Un frijol cae sobre la carta y rebota dos veces | 450 ms, rebote |
| Cantar | Ondas de sonido en el botón y el verso se resalta palabra por palabra, como karaoke | Lo que dure la voz |
| ¡Lotería! | Baja un papel picado ondeando y caen huellas y frijoles como confeti | 1.2 s |
| Botón presionado | Se desplaza 3 px abajo y a la derecha, la sombra desaparece | 120 ms |
| Cambio de pestaña | El frijol salta al nuevo ícono | 300 ms, rebote |
| Actualizar (jalar hacia abajo) | Las cartas se barajan en el encabezado | 800 ms |
| Paso completado | El frijol se rellena de café con un pequeño estallido | 300 ms |
| Carga | Brillo diagonal sobre los reversos de carta | Bucle de 1.4 s |

**Reducir movimiento:** si el sistema lo pide, todas las animaciones se cambian por fundidos de 150 ms y el confeti se sustituye por un sello estático.

---

## Mapa de la app

```
Huellitas
├── Bienvenida ─ Registro ─ Perfil de hogar (5 preguntas)
│
├── Barra inferior
│   ├── Inicio · La baraja
│   │   ├── Carta del día
│   │   ├── Ficha del peludo ─ Solicitud (5 pasos) ─ ¡Lotería!
│   │   ├── Historias «Ya tienen casa»
│   │   └── Avisos
│   │
│   ├── Adoptar · La tabla
│   │   ├── Filtros (hoja inferior)
│   │   ├── Vista de mapa
│   │   └── Ficha del peludo
│   │
│   ├── ( + ) Reportar
│   │   ├── Tipo ─ Foto ─ Ubicación ─ Detalles ─ Enviado
│   │   └── Avistamientos cercanos (mapa)
│   │
│   ├── Ayudar · Echa la mano
│   │   ├── Donar · Necesidades del mes · Apadrinar
│   │   ├── Voluntariado (calendario) · Hogar temporal
│   │   └── Puntos de acopio (mapa)
│   │
│   └── Yo
│       ├── Mi tabla e insignias
│       ├── Mis solicitudes ─ Seguimiento ─ Mensajes
│       ├── Mi peludo (después de adoptar)
│       └── Ajustes y accesibilidad
│
└── Panel del refugio (tablet / web)
    ├── Resumen · Peludos · Generador de cartas
    ├── Solicitudes (tablero) · Mensajes
    └── Necesidades · Eventos · Reportes de la comunidad
```

**Barra inferior:** Inicio · Adoptar · **Reportar** (botón central) · Ayudar · Yo.

---

## Módulos

La app tiene 14 módulos. Como en la lotería, cada uno es una carta con su número.

| # | Módulo | Para quién | Pantallas principales |
| --- | --- | --- | --- |
| 1 | Bienvenida y perfil de hogar | Todos | Bienvenida, registro, 5 preguntas |
| 2 | Inicio · La baraja | Adoptante | Baraja, carta del día, historias |
| 3 | Adoptar · La tabla | Adoptante | Catálogo, filtros, mapa |
| 4 | La carta · Ficha del peludo | Adoptante | Ficha completa, compartir |
| 5 | Solicitud de adopción | Adoptante | 5 pasos, revisión, ¡Lotería! |
| 6 | Mis solicitudes | Adoptante | Línea de tiempo, citas, mensajes |
| 7 | Ayudar · Echa la mano | Ayudante | Donar, necesidades, apadrinar, voluntariado |
| 8 | Reportar | Vecino | Reporte en 4 pasos, avistamientos |
| 9 | Historias · Ya tienen casa | Todos | Feed de historias, detalle |
| 10 | Yo · Mi tabla | Todos | Perfil, tabla 4 × 4, insignias |
| 11 | Mi peludo | Adoptante que ya adoptó | Calendario de salud, seguimiento |
| 12 | Avisos | Todos | Lista de notificaciones |
| 13 | Ajustes y accesibilidad | Todos | Preferencias, modo noche, voz |
| 14 | Panel del refugio | Refugio | Resumen, generador de cartas, tablero de solicitudes |

---

### Carta 1 · Bienvenida y perfil de hogar

**Objetivo:** dar la bienvenida, crear la cuenta y conocer el hogar para calcular la compatibilidad.

**Pantallas**

1. **Bienvenida:** fondo papel con trama, un mazo que se reparte en abanico con Luna, Nube y Max al frente. Título en `display-lg`: «Cada peludo es una carta. Encuentra la tuya.» Botones «Crear cuenta» (principal) y «Ya tengo cuenta» (texto).
2. **Tres tarjetas de presentación** deslizables: «Conoce la baraja», «Adopta paso a paso», «Ayuda aunque no adoptes». Indicador de páginas con frijoles.
3. **Registro:** nombre, correo y contraseña, o continuar con Google o Apple.
4. **Perfil de hogar** en cinco preguntas, una por pantalla y con tarjetas ilustradas:
   - ¿Dónde vives? Casa con patio · Casa sin patio · Departamento.
   - ¿Cuántas horas al día pasas fuera? Deslizador de 0 a 12.
   - ¿Quiénes viven contigo? Contador de adultos, niños y mascotas.
   - ¿Has tenido perro o gato antes? Sí, muchas veces · Alguna vez · Sería mi primera vez.
   - ¿Qué buscas? Perro · Gato · Me da igual, y edad: Cachorro · Adulto · Abuelito.

**Momento wow:** al terminar, la baraja se mezcla y aparece «Tus primeras 3 cartas», ya ordenadas por compatibilidad.

---

### Carta 2 · Inicio · La baraja

**Objetivo:** descubrir peludos de forma divertida, uno por uno.

**Qué se ve**

- Saludo «¡Buenas tardes, Arturo!» y la ubicación «Tulancingo, Hgo.» con la campana de avisos.
- **La baraja:** carta grande al centro (nivel 3) con la insignia de compatibilidad. Debajo, tres botones circulares: **Paso** (añil), **Cantar** (añil con bocina cempasúchil) y **Me late** (rosa).
- Al tocar la carta se voltea y muestra un resumen: edad, tamaño, energía y refugio, con el enlace «Ver su carta completa».
- **Carta del día:** banda cempasúchil con el peludo que más ha esperado.
- **Ya tienen casa:** carrusel horizontal de historias con sello verde.
- **Banner de ayuda:** «Este mes faltan 36 kg de croquetas» con el botón «Echar la mano».

**Interacciones**

- Deslizar a la derecha: «¡ME LATE!» y la carta se guarda en Mi tabla con un frijol.
- Deslizar a la izquierda: «PASO» y la carta se va al fondo del mazo.
- Deslizar hacia arriba: abre la ficha completa.
- Botón Cantar: la app lee el verso en voz alta y lo resalta palabra por palabra.
- Botón de deshacer en la barra superior para regresar la última carta.

**Momento wow:** cuando se acaban las cartas del día aparece una carta boca abajo con «Mañana se canta una nueva» y una cuenta regresiva.

---

### Carta 3 · Adoptar · La tabla

**Objetivo:** ver a todos los peludos a la vez y filtrar con precisión.

**Qué se ve**

- Título «La tabla» y subtítulo «42 peludos buscan casa».
- Buscador por nombre y chips de filtro rápido: Todos · Perros · Gatos · Cachorros · Abuelitos · Cerca de mí.
- Botón «Filtros» con contador que abre una hoja inferior: especie, sexo, edad, tamaño, energía, convive con niños, perros o gatos, refugio y distancia.
- Orden: Más compatibles · Más tiempo esperando · Recién llegados.
- **Cuadrícula de 2 columnas** de cartas con nombre, edad e insignia de compatibilidad.
- Interruptor **Lista / Mapa**: el mapa muestra pines de minicarta agrupados por refugio.

**Momento wow:** al aplicar filtros, las cartas que no coinciden se voltean boca abajo y se acomodan al final antes de desaparecer.

---

### Carta 4 · La carta · Ficha del peludo

**Objetivo:** conocer a fondo al peludo y decidir.

**Secciones, de arriba abajo**

1. **Encabezado:** carta grande con giro leve, botones de atrás, compartir y favorito (frijol).
2. **Nombre y verso:** «Luna» en `headline-lg`, el verso en itálica y el botón Cantar.
3. **Chips:** 2 años · Hembra · Mediana · Esterilizada · Vacunada.
4. **Galería de fotos** con marco de foto instantánea.
5. **Compatibilidad 92 %** desplegable con el porqué: «Tienes patio ✓», «Pasas poco tiempo fuera ✓», «Hay niños en casa: Luna convive bien con ellos ✓».
6. **Así es su carácter:** barras de personalidad (Juguetona, Tranquila, Sociable con perros, Sociable con gatos, Le gusta pasear).
7. **Su historia:** dónde la rescataron y cómo es su día.
8. **Salud:** lista con palomitas (vacunas, desparasitación, esterilización) y la fecha de la última revisión.
9. **Lleva esperando:** cifra grande «63 días» en `dato-numero`.
10. **Refugio:** tarjeta con minimapa, horario y botón «Cómo llegar».
11. **Botón fijo:** «Quiero adoptar a Luna». Botón secundario «Apadrinar».

**Momento wow:** «Compartir carta» genera una imagen vertical para historias de Instagram y WhatsApp con la carta, el verso y un código QR que abre la ficha.

---

### Carta 5 · Solicitud de adopción

**Objetivo:** pedir la adopción sin miedo y sin papeleo confuso.

**Pasos** (barra de cinco frijoles arriba):

1. **Tus datos:** nombre, edad, teléfono y colonia. Lo ya conocido viene prellenado.
2. **Tu hogar:** se confirma el perfil de hogar y se agrega si la vivienda es propia o rentada (con permiso del dueño).
3. **Tu experiencia:** mascotas actuales o pasadas y qué pasó con ellas.
4. **Tu compromiso:** casillas para esterilización, vacunas, paseos y visitas de seguimiento, y una pregunta abierta: «¿Por qué quieres adoptar a Luna?».
5. **Tu cita:** calendario con horarios disponibles del refugio para conocerla en persona.

**Revisión final:** resumen editable por secciones y el botón «Enviar solicitud». La solicitud se guarda como borrador en cada paso.

**Momento wow:** pantalla «¡Lotería!» con papel picado, la carta de Luna al centro con un frijol y el texto «Tu solicitud va en camino. El refugio te escribirá en menos de 48 horas».

---

### Carta 6 · Mis solicitudes · Seguimiento

**Objetivo:** saber siempre en qué va la adopción, como el rastreo de un paquete.

**Qué se ve**

- Tarjetas por solicitud con la minicarta del peludo y la insignia de estado.
- **Línea de tiempo:** Enviada → En revisión → Entrevista → Visita al hogar → ¡Adoptado!
- Detalle de la etapa actual: qué está pasando, quién la revisa y qué falta («Sube una foto del lugar donde dormirá Luna»).
- **Citas:** fecha, hora, dirección y botón para agregar al calendario.
- **Mensajes con el refugio** en un chat sencillo.
- **Documentos:** subir identificación oficial y comprobante de domicilio, con estado de cada uno.

**Si no se aprueba:** mensaje amable sin sellos ni confeti, el motivo general y tres cartas sugeridas.

---

### Carta 7 · Ayudar · Echa la mano

**Objetivo:** que cualquiera pueda ayudar en dos toques aunque no adopte.

**Qué se ve**

- **Necesidades del mes:** tarjetas con barra de meta. Croquetas para perro 64 de 100 kg · Arena para gato 18 de 40 kg · Vacunas 12 de 30 · Cobijas 25 de 50.
- **Donar:** montos rápidos ($50, $100, $200, otro) y elección del destino (refugio o necesidad).
- **Donación en especie:** lista de lo que se recibe y mapa de puntos de acopio.
- **Apadrinar:** aportación mensual para un peludo, con fotos y noticias suyas cada mes.
- **Voluntariado:** calendario con paseos, jornadas de esterilización y ferias de adopción, con cupo y el botón «Me apunto».
- **Hogar temporal:** registro para cuidar a un peludo mientras encuentra familia.

**Momento wow:** al donar, la barra de meta se llena en vivo y suelta frijoles al cruzar cada 25 %.

---

### Carta 8 · Reportar

**Objetivo:** avisar rápido de un animal que necesita ayuda.

**Pasos**

1. **¿Qué pasa?** Tarjetas grandes: En la calle · Perdido · Encontrado · En peligro o maltrato.
2. **Foto:** cámara a pantalla completa con guía de encuadre o subir desde la galería.
3. **¿Dónde?** Mapa con la ubicación actual y un pin que se puede mover.
4. **Detalles:** descripción, cómo es, si está herido y nivel de urgencia.

**Después:** confirmación «Gracias por avisar. Tres rescatistas cercanos ya lo vieron» y seguimiento del reporte. Para casos de maltrato se muestran los contactos de las autoridades locales.

**Avistamientos:** mapa y lista de reportes cercanos con filtro por tipo y el botón «Lo he visto» para sumar información.

---

### Carta 9 · Historias · Ya tienen casa

**Objetivo:** mostrar que adoptar sí funciona y motivar a otros.

- Feed de tarjetas con foto antes y después, la carta con sello «¡ADOPTADO!» y una cita de la familia.
- Detalle con la historia completa, galería y botón «Conoce a otros como Max».
- La familia adoptante puede publicar su historia desde Mi peludo.

---

### Carta 10 · Yo · Mi tabla

**Objetivo:** reunir lo personal y premiar cada forma de ayudar.

**Qué se ve**

- Encabezado con avatar en sello festoneado, nombre y «Ayudante desde octubre 2026».
- **Mi tabla:** cuadrícula 4 × 4 de minicartas de buenas acciones. Cada acción pone un frijol en su casilla.
- **Insignias** por patrones de la lotería tradicional:
  - **Chorro:** una línea completa.
  - **Cuatro esquinas:** las cuatro esquinas.
  - **Centrito:** las cuatro casillas del centro.
  - **¡Llena!:** las 16 casillas.
- **Mis favoritos:** las cartas guardadas con «¡ME LATE!».
- Accesos a Mis solicitudes, Mi peludo, Mis donaciones y Ajustes.

**Las 16 cartas de Mi tabla**

| | | | |
| --- | --- | --- | --- |
| 1 · El Perfil (completar perfil de hogar) | 2 · El Compartido (compartir una carta) | 3 · La Croqueta (donar alimento) | 4 · El Paseo (voluntariado de paseo) |
| 5 · La Feria (ir a una feria de adopción) | 6 · El Padrino (apadrinar) | 7 · La Cobija (donar cobijas) | 8 · El Aviso (hacer un reporte) |
| 9 · La Visita (visitar un refugio) | 10 · La Solicitud (enviar una solicitud) | 11 · La Vacuna (donar para vacunas) | 12 · El Hogar Temporal (cuidar temporalmente) |
| 13 · La Foto (subir una foto de seguimiento) | 14 · La Historia (contar tu historia) | 15 · El Rescate (un reporte que terminó en rescate) | 16 · La Adopción (adoptar) |

**Momento wow:** al completar un patrón, el frijol que cierra la línea brilla, la tabla vibra levemente y aparece la insignia como un sello que se estampa.

---

### Carta 11 · Mi peludo · Después de adoptar

**Objetivo:** acompañar los primeros meses y cuidar la salud del peludo adoptado.

- Perfil del peludo con su carta convertida en «carta de la familia» (marco dorado cempasúchil).
- **Calendario de salud:** vacunas, desparasitación y revisiones con recordatorios.
- **Seguimiento:** check-ins con foto a la semana, al mes y a los tres meses, que el refugio recibe automáticamente.
- **Consejos por etapa:** primeros días, socialización y alimentación.
- Botón «Contar nuestra historia» que publica en Historias.

---

### Carta 12 · Avisos

Lista agrupada por día con íconos y colores de estado:

- «Se cantó una carta nueva: Kira, cachorra de 5 meses, 94 % compatible contigo.»
- «Tu solicitud para adoptar a Luna pasó a Entrevista.»
- «Mañana es la jornada de esterilización. ¡Te esperamos a las 9:00!»
- «Ya se juntaron los 100 kg de croquetas. Gracias por ayudar.»

---

### Carta 13 · Ajustes y accesibilidad

- Datos de la cuenta y perfil de hogar.
- Preferencias de avisos por tipo.
- **Modo:** Claro · Noche de lotería · Automático.
- **Accesibilidad:** texto grande, leer versos automáticamente, reducir movimiento y alto contraste.
- Privacidad, términos y cerrar sesión.

---

### Carta 14 · Panel del refugio (tablet y web)

**Objetivo:** que un refugio pequeño administre todo sin ser experto en tecnología.

**Pantallas**

1. **Resumen:** cuatro datos grandes (`dato-panel`): Peludos en adopción 42 · Solicitudes nuevas 7 · Adopciones este mes 9 · Promedio de espera 63 días. Debajo, gráfica de adopciones por mes en barras rosas y la lista «Los que más han esperado».
2. **Peludos:** tabla con búsqueda, estado y acciones rápidas.
3. **Generador de cartas:** subir fotos, elegir el objeto del verso y el fondo, número automático, sugerencias de verso que riman y vista previa del frente y el reverso. Botón «Publicar carta».
4. **Solicitudes:** tablero por columnas (Nuevas · En revisión · Entrevista · Visita · Aprobadas) con tarjetas que se arrastran. El detalle muestra las respuestas, la compatibilidad y las notas internas.
5. **Necesidades:** metas del mes editables y registro de lo recibido.
6. **Eventos:** calendario con cupo e inscritos.
7. **Reportes de la comunidad:** mapa y lista para asignar a un rescatista y cerrar casos.

**Momento wow:** el generador muestra la carta terminada girando en 3D antes de publicarla.

---

## Flujos principales

### A · Adoptar

1. La persona desliza la baraja y le da «¡ME LATE!» a Luna.
2. Abre la ficha, revisa la compatibilidad y toca «Quiero adoptar a Luna».
3. Completa la solicitud en cinco pasos y elige una cita.
4. Recibe «¡Lotería!» y la solicitud aparece en Mis solicitudes.
5. El refugio la mueve en su tablero: En revisión → Entrevista → Visita al hogar.
6. La persona recibe un aviso en cada cambio y responde en el chat.
7. Se aprueba: la carta de Luna recibe el sello «¡ADOPTADO!» y se activa Mi peludo.

**Estados de una solicitud**

```
Borrador → Enviada → En revisión → Entrevista → Visita al hogar → Aprobada → ¡Adoptado!
                          │                                          │
                          ├── En espera (faltan documentos) ─────────┘
                          └── No aprobada (mensaje amable + cartas sugeridas)
```

### B · Reportar un perro en la calle

Botón Reportar → «En la calle» → foto → ubicación → detalles → enviado → los rescatistas cercanos reciben el aviso → el reporte cambia a «Atendido» o «Rescatado» → si termina en rescate, se marca «El Rescate» en Mi tabla.

### C · Donar croquetas

Ayudar → Necesidades del mes → «Croquetas para perro» → monto o punto de acopio → confirmación → la barra de meta se llena → «La Croqueta» se marca en Mi tabla.

### D · El refugio publica un peludo

Panel → Peludos → «Nuevo peludo» → datos y fotos → generador de cartas → vista previa → publicar → aparece en la baraja de las personas compatibles con el aviso «Se cantó una carta nueva».

---

## Modelo de datos

| Entidad | Campos principales |
| --- | --- |
| **Peludo** | id, número de carta, nombre, especie, sexo, edad en meses, tamaño, energía, convive con (niños, perros, gatos), salud (vacunas, esterilizado, desparasitado), historia, verso, ilustración, fotos, refugio, fecha de ingreso, estado |
| **Usuario** | id, nombre, correo, teléfono, colonia, foto, rol (adoptante, ayudante, refugio) |
| **Perfil de hogar** | usuario, vivienda, patio, horas fuera, adultos, niños, mascotas actuales, experiencia, preferencias |
| **Solicitud** | id, usuario, peludo, respuestas, estado, fechas por etapa, cita, documentos, notas del refugio |
| **Refugio** | id, nombre, dirección, ubicación, horario, teléfono, responsables |
| **Necesidad** | refugio, artículo, unidad, meta, recibido, fecha límite |
| **Donación** | usuario, tipo (dinero o especie), monto o artículo, destino, fecha |
| **Padrinazgo** | usuario, peludo, aportación mensual, estado |
| **Evento** | refugio, tipo, fecha, lugar, cupo, inscritos |
| **Reporte** | usuario, tipo, foto, ubicación, descripción, urgencia, estado |
| **Historia** | peludo, familia, fotos antes y después, texto, fecha |
| **Acción de tabla** | usuario, casilla (1 a 16), fecha |
| **Insignia** | usuario, patrón (chorro, cuatro esquinas, centrito, llena), fecha |
| **Seguimiento** | peludo, usuario, tipo (vacuna, desparasitación, check-in), fecha, foto |
| **Aviso** | usuario, tipo, texto, leído, fecha |

**Cálculo de compatibilidad** (de 0 a 100 %): vivienda y espacio 25 % · tiempo disponible 25 % · convivencia con niños y otras mascotas 25 % · experiencia 15 % · preferencias de especie y edad 10 %. La app siempre muestra el desglose para que el número sea honesto.

---

## Accesibilidad

- Todos los pares de texto y fondo de los tokens cumplen el contraste **WCAG AA** (4.5:1).
- El texto crece hasta el 200 % sin cortarse. Las cartas cambian a una columna si hace falta.
- Zonas táctiles de al menos 48 × 48 px.
- Cada carta tiene una descripción para lector de pantalla: «Carta 1, Luna, perrita de 2 años. Sale de noche y de día, pasea en tu compañía. 92 % compatible».
- Las acciones de deslizar también existen como botones (Paso, Cantar, Me late).
- Los estados nunca dependen solo del color: siempre llevan ícono y texto.
- El botón Cantar lee el verso en voz alta y la opción de lectura automática lo hace al revelar cada carta.
- Respeta «reducir movimiento» del sistema.
- Los errores de formulario dicen qué pasó y cómo arreglarlo.

---

## Contenido de ejemplo y microcopy

### La baraja inicial

| # | Nombre | Quién es | Verso |
| --- | --- | --- | --- |
| 1 | Luna | Perrita de 2 años | «Sale de noche y de día, pasea en tu compañía.» |
| 2 | Nube | Gata de 1 año | «Blanca, suave y muy ligera, se acurruca donde quiera.» |
| 3 | Max | Cachorro de 4 meses | «El que corre y no se cansa, rey del patio y de la casa.» |
| 4 | Tigre | Gato de 3 años | «Tiene rayas como fiera, pero ronronea a cualquiera.» |
| 5 | Canela | Perra de 5 años | «Grande, fiel y protectora, cuida la casa a toda hora.» |
| 6 | Pelusa | Gatita de 3 meses | «Chiquita y exploradora, una caja la enamora.» |
| 7 | Rocky | Perro de 8 años | «Abuelito y bonachón, pide cama y un rincón.» |
| 8 | Simón | Gato de 2 años | «Gato negro, ojos de miel, tímido pero muy fiel.» |
| 9 | Kira | Cachorra de 5 meses | «Pequeña pero muy lista, a la primera te conquista.» |

### Microcopy

| Situación | Texto |
| --- | --- |
| Botón de la ficha | Quiero adoptar a Luna |
| Sello al deslizar a la derecha | ¡ME LATE! |
| Sello al deslizar a la izquierda | PASO |
| Baraja vacía | Ya viste todas las cartas de hoy. Mañana se canta una nueva. |
| Solicitud enviada | ¡Lotería! Tu solicitud va en camino. |
| Sin resultados | Ninguna carta coincide. Prueba quitando algún filtro. |
| Error de conexión | Se nos cayeron las cartas. Revisa tu conexión e inténtalo otra vez. |
| Reporte enviado | Gracias por avisar. Tres rescatistas cercanos ya lo vieron. |
| Solicitud no aprobada | Esta vez no se pudo, pero hay otras cartas esperándote. |
| Insignia ganada | ¡Cuatro esquinas! Llevas 4 buenas acciones en las esquinas de tu tabla. |
| Meta cumplida | ¡Llenamos el costal! Ya hay 100 kg de croquetas para este mes. |

> Proyecto académico: los animales, refugios, cifras y contactos son ilustrativos.

---

## Prompts por pantalla

Para generar la app pantalla por pantalla (por ejemplo, en Google Stitch), usa este DESIGN.md como sistema de diseño y pide cada pantalla con su prompt.

**P1 · Bienvenida**

```
Pantalla de bienvenida de Huellitas. Fondo papel crema con trama de puntos suave. Al centro, un mazo de cartas de lotería repartido en abanico (Luna, Nube y Max al frente), con borde añil de 3 px y sombra dura desplazada. Título grande en Alfa Slab One: "Cada peludo es una carta. Encuentra la tuya." Botón rosa "Crear cuenta" con sombra cempasúchil y enlace "Ya tengo cuenta".
```

**P2 · Perfil de hogar**

```
Paso 1 de 5 del perfil de hogar. Arriba, cinco frijoles como indicador de progreso (el primero rebota). Pregunta en Alfa Slab One: "¿Dónde vives?". Tres tarjetas seleccionables ilustradas en estilo serigrafía: Casa con patio, Casa sin patio y Departamento; la seleccionada tiene borde añil grueso, sombra dura y un frijol. Botón rosa "Continuar" fijo abajo.
```

**P3 · Inicio · La baraja**

```
Inicio de Huellitas. Saludo "¡Buenas tardes, Arturo!" y "Tulancingo, Hgo." con campana de avisos. Al centro, la carta de lotería de Luna (número 1, perrita caramelo con luna creciente, banda inferior "LUNA") con insignia cempasúchil "92 % compatible", y detrás dos cartas apiladas. Debajo tres botones circulares: Paso (añil), Cantar (añil con bocina cempasúchil) y Me late (rosa). Más abajo, banda "Carta del día" y carrusel "Ya tienen casa". Barra inferior añil: Inicio, Adoptar, Reportar (botón central circular cempasúchil), Ayudar y Yo.
```

**P4 · Deslizando**

```
Misma pantalla de inicio mientras la carta de Luna se arrastra a la derecha, girada 10°, con un sello de goma rosa "¡ME LATE!" girado sobre la carta y un frijol cayendo hacia la esquina.
```

**P5 · Adoptar · La tabla**

```
Pestaña Adoptar. Título "La tabla" y subtítulo "42 peludos buscan casa". Buscador, chips de filtro (Todos activo en añil, Perros, Gatos, Cachorros, Abuelitos) y botón "Filtros 2". Cuadrícula de 2 columnas de cartas de lotería con número, ilustración, nombre en banda inferior, edad e insignia de compatibilidad. Interruptor Lista / Mapa arriba a la derecha.
```

**P6 · Ficha de Luna**

```
Ficha de Luna. Carta grande arriba con leve giro, botones de atrás, compartir y favorito. Nombre "Luna" en Alfa Slab One, verso en itálica "«Sale de noche y de día, pasea en tu compañía.»" y botón Cantar. Chips: 2 años, Hembra, Mediana, Esterilizada. Galería de fotos con marco de foto instantánea. Tarjeta "92 % compatible" con tres razones con palomita. Barras de personalidad, checklist de salud, dato grande "63 días esperando" y tarjeta del refugio con minimapa. Botón rosa fijo "Quiero adoptar a Luna".
```

**P7 · Solicitud y ¡Lotería!**

```
Dos pantallas. 1) Paso 4 de 5 de la solicitud: barra de cinco frijoles (tres llenos), título "Tu compromiso", casillas con palomita y un campo de texto "¿Por qué quieres adoptar a Luna?", botón "Continuar". 2) Confirmación: papel picado rosa, añil y cempasúchil arriba, confeti de huellas y frijoles, la carta de Luna al centro, título "¡Lotería!" y texto "Tu solicitud va en camino. El refugio te escribirá en menos de 48 horas".
```

**P8 · Seguimiento**

```
Mis solicitudes. Tarjeta con minicarta de Luna e insignia "En revisión". Línea de tiempo vertical: Enviada (verde con palomita), En revisión (cempasúchil, actual), Entrevista, Visita al hogar y ¡Adoptado! (punteadas). Tarjeta de la próxima cita con fecha y botón "Agregar al calendario" y acceso a mensajes con el refugio.
```

**P9 · Ayudar**

```
Pestaña Ayudar, título "Echa la mano". Tarjetas de necesidades del mes con barra de meta rosa: Croquetas para perro 64 de 100 kg, Arena para gato 18 de 40 kg, Vacunas 12 de 30. Bloque de donación rápida con montos $50, $100, $200 y Otro. Tarjetas de Apadrinar, Voluntariado (próximo evento con fecha) y Hogar temporal. Botones cempasúchil.
```

**P10 · Reportar**

```
Flujo Reportar, paso 1 de 4: título "¿Qué pasa?" y cuatro tarjetas grandes ilustradas: En la calle, Perdido, Encontrado y En peligro o maltrato. Después, paso 3: mapa con pin rosa arrastrable, dirección detectada y botón "Confirmar ubicación".
```

**P11 · Yo · Mi tabla**

```
Pestaña Yo. Avatar en sello festoneado, nombre y "Ayudante desde octubre 2026". Tabla de lotería 4 × 4 de minicartas de buenas acciones (La Croqueta, El Paseo, El Padrino, La Cobija…) con frijoles café en las completadas. Fila de insignias tipo sello de correo: Chorro, Cuatro esquinas, Centrito, ¡Llena! (las no ganadas en contorno punteado). Accesos a Mis solicitudes, Mi peludo y Ajustes.
```

**P12 · Panel del refugio**

```
Panel web del refugio a 1280 px. Menú lateral añil con frijol en la opción activa. Cuatro datos grandes en Archivo expandida: Peludos en adopción 42, Solicitudes nuevas 7, Adopciones este mes 9, Promedio de espera 63 días. Gráfica de barras rosas de adopciones por mes y lista "Los que más han esperado". Tablero de solicitudes por columnas con tarjetas arrastrables.
```

**P13 · Noche de lotería**

```
Versión en modo oscuro de la pantalla de Inicio: fondo añil noche con estrellitas cempasúchil, textos color luz de vela, las cartas conservan su frente blanco y el cempasúchil es el color de acción.
```

---

## Fases del proyecto

| Fase | Qué incluye | Resultado |
| --- | --- | --- |
| **1 · MVP** | Bienvenida y perfil de hogar, La baraja, La tabla, Ficha, Solicitud, Mis solicitudes | Ya se puede adoptar de principio a fin |
| **2 · Comunidad** | Ayudar, Reportar con mapa, Historias, Mi tabla e insignias, Avisos | La comunidad ayuda aunque no adopte |
| **3 · Refugios** | Panel del refugio, generador de cartas, tablero de solicitudes | Los refugios publican y gestionan solos |
| **4 · Después de adoptar** | Mi peludo, padrinazgo mensual, chat completo, modo Noche de lotería | Acompañamiento a largo plazo |

---

## Checklist de calidad

- [ ] Cada peludo aparece como carta con número, nombre, verso e ilustración.
- [ ] Solo tres tintas, papel y frijol. Sin degradados ni sombras difuminadas.
- [ ] Un solo botón rosa por pantalla.
- [ ] Contornos añil y sombras duras en cartas, botones y tarjetas.
- [ ] Barra inferior con Inicio, Adoptar, Reportar, Ayudar y Yo.
- [ ] Todos los textos en español de México, sin faltas de ortografía.
- [ ] Contraste AA y zonas táctiles de 48 px.
- [ ] Estados con ícono y texto, no solo color.
- [ ] Celebraciones solo en buenas noticias.
- [ ] Modo Noche de lotería revisado.
