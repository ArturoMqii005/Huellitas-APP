---
version: alpha
name: Huellitas
description: Aplicación web responsiva para adoptar perros y gatos rescatados en Tulancingo, Hidalgo, con cuatro roles (visitante, adoptante, refugio y administrador). Cada peludo es una carta de lotería mexicana impresa en serigrafía de tres tintas.
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
  navbar-web:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    height: 72px
  menu-lateral-refugio:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-lg}"
    width: 264px
  menu-lateral-admin:
    backgroundColor: "{colors.secondary-deep}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-lg}"
    width: 264px
  menu-lateral-activo:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    height: 44px
  tarjeta-acceso:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 32px
    width: 440px
  etiqueta-rol-refugio:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 8px
  etiqueta-rol-admin:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 8px
  tabla-encabezado:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    height: 48px
    padding: 12px
  tabla-fila:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    height: 56px
    padding: 12px
  tabla-fila-alterna:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    height: 56px
    padding: 12px
---

# Huellitas · Aplicación web de adopción

> **Cada peludo es una carta. Encuentra la tuya.**
>
> Huellitas es una aplicación web responsiva para adoptar perros y gatos rescatados en Tulancingo, Hidalgo. Se usa desde el navegador de la computadora o del celular. Reúne a los animales de varios refugios en una baraja de lotería mexicana, acompaña a la familia durante toda la adopción, conecta a quien quiere ayudar con lo que los refugios necesitan y da a cada refugio un panel propio para publicar y gestionar sus adopciones.

Este archivo sigue el formato abierto **DESIGN.md**. Arriba, entre las líneas `---`, están los tokens del sistema de diseño: colores, tipografía, espacios, formas y componentes. Las secciones en inglés (Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components y Do's and Don'ts) son las que el formato define y las herramientas de IA leen. Las demás describen la aplicación completa: roles, navegación, módulos, reglas, flujos, datos y los prompts para generar cada pantalla.

### Dónde está cada especificación

| Elemento solicitado | Sección |
| --- | --- |
| Nombre, objetivo y descripción del proyecto | [Overview](#overview) |
| Roles de usuario, funciones, permisos y restricciones | [Roles y permisos](#roles-y-permisos) |
| Interfaces diferenciadas por rol | [Roles y permisos](#roles-y-permisos) y [Módulos](#módulos) |
| Estructura de pantallas y navegación | [Mapa de la aplicación](#mapa-de-la-aplicación) y [Módulos](#módulos) |
| Colores | [Colors](#colors) |
| Tipografías | [Typography](#typography) |
| Componentes visuales (menús, formularios, tablas, botones) | [Components](#components) |
| Diseño adaptable a dispositivos móviles | [Layout](#layout) |
| Lineamientos de experiencia de usuario (UX/UI) | [Lineamientos UX/UI](#lineamientos-uxui) |
| Reglas y restricciones del diseño y del sistema | [Do's and Don'ts](#dos-and-donts) y [Reglas del sistema](#reglas-del-sistema) |
| Prompts para la herramienta de IA | [Prompts por pantalla](#prompts-por-pantalla) |

---

## Overview

### Nombre

**Huellitas Tulancingo**, aplicación web de adopción. En la interfaz aparece como **Huellitas**.

### Descripción

Huellitas es una aplicación web responsiva que reúne en un solo lugar a los perros y gatos rescatados por los refugios de Tulancingo. Cada animal se presenta como una carta de lotería mexicana con número, nombre, ilustración y un verso. Las personas pueden descubrirlos, conocer su compatibilidad, solicitar la adopción y seguir su estado en tiempo real. Quien no puede adoptar encuentra formas concretas de ayudar o puede reportar animales en la calle. Los refugios tienen un panel para publicar a sus peludos y revisar solicitudes, y un equipo administrador verifica a los refugios y cuida la plataforma.

### El problema

En Tulancingo, los perros y gatos rescatados se anuncian en grupos de Facebook y en carteles. Cada aviso se pierde entre cientos de publicaciones en pocas horas, nadie sabe qué requisitos piden los refugios y quien quiere ayudar no sabe qué hace falta ni adónde llevarlo. Los refugios, por su parte, reciben mensajes sueltos por varias redes y no tienen una forma ordenada de revisar solicitudes. Los animales adultos y los de mayor edad pasan meses esperando.

### Objetivo general

Diseñar una aplicación web responsiva que centralice la adopción responsable de perros y gatos rescatados en Tulancingo, conectando a adoptantes, ayudantes y refugios en un mismo sistema con funciones y permisos definidos para cada rol.

### Objetivos específicos

1. Reunir a los peludos de todos los refugios en un catálogo con filtros y un porcentaje de compatibilidad explicado.
2. Guiar la solicitud de adopción en cinco pasos y mostrar su avance en tiempo real.
3. Dar a cada refugio un panel para publicar peludos, gestionar solicitudes y pedir lo que necesita.
4. Ofrecer formas de ayudar sin adoptar: donar, apadrinar, ser voluntario, dar hogar temporal y reportar animales.
5. Permitir que un administrador verifique a los refugios, gestione los roles y modere el contenido.

### La solución

- **Una sola baraja** con los peludos de todos los refugios de la región, con filtros y un porcentaje de compatibilidad que explica por qué.
- **Una solicitud guiada** en cinco pasos, con seguimiento en tiempo real, como el rastreo de un paquete.
- **Formas concretas de ayudar**: donar, apadrinar, ser voluntario, dar hogar temporal o reportar un animal en la calle.
- **Un panel para los refugios** que publica cada peludo como una carta de lotería en menos de dos minutos.
- **Un panel de administración** para verificar refugios, asignar roles y moderar reportes e historias.

### Personalidad visual

**Lotería mexicana impresa en serigrafía de tres tintas.** Cada peludo es una carta con número, ilustración, nombre en una banda inferior y un verso corto que rima. Las ilustraciones imitan una impresión artesanal: tintas planas, tramas de puntos y un ligero desfase entre colores.

La aplicación debe sentirse **festiva, cálida, artesanal, honesta y clara**. Es una feria de pueblo bien organizada: mucho color y carácter, pero cada pantalla tiene un solo objetivo y se entiende en un vistazo. Los paneles del refugio y del administrador conservan la misma identidad, pero son más sobrios y densos porque ahí se trabaja.

### Usuarios

| Usuario | Qué necesita | Rol en el sistema |
| --- | --- | --- |
| Personas que quieren conocer a los peludos sin registrarse | Ver qué animales hay y cómo funciona la adopción | Visitante |
| Familias, jóvenes, estudiantes y adultos mayores que quieren adoptar | Encontrar un peludo compatible y saber exactamente qué sigue | Adoptante |
| Donantes, voluntarios, padrinos y vecinos que reportan animales | Saber qué falta este mes y ayudar en dos toques | Adoptante (la misma cuenta sirve para ayudar) |
| Personal de los refugios y rescatistas | Publicar peludos, revisar solicitudes y pedir lo que falta | Refugio |
| Equipo que opera la plataforma | Verificar refugios, gestionar cuentas y moderar contenido | Administrador |

### Plataforma

- **Aplicación web responsiva** que funciona en cualquier navegador moderno y puede instalarse en el celular como aplicación web progresiva (PWA).
- Diseño **mobile first**: se diseña primero para celular y se amplía a tablet y computadora.
- Lienzos de diseño: **escritorio 1440 × 1024 px** y **celular 390 × 844 px**.
- Modo claro por defecto y modo oscuro **«Noche de lotería»**.

### Principios de diseño

1. **Cada peludo es una carta.** Nunca una foto suelta de catálogo: siempre número, nombre, verso e ilustración.
2. **Tres tintas y papel.** Añil, rosa mexicano y cempasúchil sobre papel crema. El café del frijol solo marca lo elegido, y el verde nopal y el rojo se reservan para los estados de éxito y error.
3. **Una acción principal por pantalla.** Solo un botón rosa visible a la vez.
4. **Cada rol ve lo suyo.** Cada persona solo ve las opciones que puede usar. Nada de botones deshabilitados sin explicación.
5. **Celebrar cada paso.** Cada avance importante se festeja con un «¡Lotería!».
6. **Claro para todos.** Contraste AA, texto que crece, versos que se leen en voz alta y nada que dependa solo del color.

---

## Roles y permisos

Huellitas tiene **cuatro roles**. El rol pertenece a la cuenta y decide qué ve la persona al entrar, qué menú tiene y qué puede hacer. El sistema revisa el permiso en cada pantalla y en cada acción, no solo en el menú.

| Rol | Quién es | Pantalla al entrar | Navegación |
| --- | --- | --- | --- |
| **Visitante** | Persona sin sesión iniciada | Inicio público | Barra superior: Inicio · Adoptar · Ayudar · Historias · **Entrar** · **Crear cuenta** |
| **Adoptante** | Persona registrada que adopta, dona, apadrina o reporta | Inicio · La baraja personalizada | Escritorio: barra superior. Celular: barra inferior con Inicio · Adoptar · Reportar · Ayudar · Yo |
| **Refugio** | Personal de un refugio verificado | Panel del refugio · Resumen | Menú lateral añil: Resumen · Peludos · Nueva carta · Solicitudes · Necesidades · Eventos · Reportes · Mensajes · Mi refugio |
| **Administrador** | Equipo que opera la plataforma | Administración · Resumen global | Menú lateral añil hondo: Resumen · Refugios · Usuarios y roles · Moderación · Catálogos · Bitácora |

### Rol 1 · Visitante

**Funciones**

- Ver la baraja pública, la tabla de peludos y la ficha de cada uno.
- Leer historias de adopción, requisitos y necesidades del mes.
- Hacer una donación única sin cuenta.
- Crear una cuenta o solicitar el registro de un refugio.

**Permisos:** solo lectura del contenido público.

**Restricciones**

- No ve el porcentaje de compatibilidad (no hay perfil de hogar).
- No puede guardar favoritos, enviar solicitudes, reportar ni ver datos de otras personas.
- Al tocar una acción reservada aparece una hoja inferior «Entra para continuar» que lo regresa al mismo lugar después de iniciar sesión.

### Rol 2 · Adoptante

**Funciones**

- Completar su perfil de hogar y recibir la baraja ordenada por compatibilidad.
- Guardar favoritos con «¡ME LATE!».
- Enviar solicitudes de adopción, subir documentos, agendar citas y escribir al refugio.
- Donar, apadrinar, inscribirse a eventos de voluntariado y registrarse como hogar temporal.
- Reportar animales en la calle, perdidos, encontrados o en peligro.
- Llenar su tabla de buenas acciones y ganar insignias.
- Dar seguimiento a la salud de su peludo después de adoptar.

**Permisos:** lectura del contenido público, más lectura y escritura de **su propia información**: perfil, favoritos, solicitudes, donaciones, reportes, historias y seguimiento.

**Restricciones**

- Máximo **3 solicitudes activas** y solo una por peludo.
- No puede editar una solicitud enviada. Puede agregar documentos y mensajes, o cancelarla antes de la visita al hogar.
- Solo ve sus propias solicitudes y conversaciones.
- No puede publicar peludos, cambiar estados de solicitudes ni ver datos de otros adoptantes.
- Sus historias y reportes pasan por moderación antes de hacerse públicos.

### Rol 3 · Refugio

**Funciones**

- Ver el resumen de su refugio: peludos publicados, solicitudes nuevas, adopciones y días promedio de espera.
- Dar de alta y editar a sus peludos con el generador de cartas.
- Revisar solicitudes en un tablero por etapas, agendar entrevistas y visitas, aprobar o no aprobar.
- Publicar necesidades del mes, registrar lo recibido y crear eventos.
- Atender los reportes de la comunidad de su zona.
- Escribir a los adoptantes que tienen una solicitud con el refugio.

**Permisos:** lectura y escritura de **los datos de su propio refugio**. Lectura de los datos de un adoptante **solo** cuando ese adoptante tiene una solicitud con el refugio.

**Restricciones**

- Su cuenta queda «En verificación» hasta que un administrador la aprueba. Mientras tanto no puede publicar.
- No puede ver ni editar peludos, solicitudes o necesidades de otros refugios.
- El teléfono del adoptante solo se muestra a partir de que la solicitud llega a «Entrevista».
- No puede borrar solicitudes. Para no aprobar una debe elegir un motivo, que se envía al adoptante con un mensaje amable.
- No puede cambiar roles ni moderar contenido de la comunidad.
- Cada cambio queda en la bitácora.

### Rol 4 · Administrador

**Funciones**

- Ver el resumen global de la plataforma.
- Verificar o rechazar las solicitudes de registro de refugios, revisando sus documentos.
- Buscar cuentas, cambiar su rol y suspenderlas o reactivarlas.
- Moderar reportes, historias y publicaciones.
- Administrar los catálogos: especies, tamaños, tipos de necesidad y tipos de reporte.
- Consultar la bitácora de actividad.

**Permisos:** lectura de toda la información y escritura sobre cuentas, refugios, moderación y catálogos.

**Restricciones**

- **No decide adopciones.** Puede ver las solicitudes en modo lectura, pero solo el refugio cambia su estado.
- No puede editar la ficha de un peludo. Solo puede ocultarla si incumple las reglas, explicando el motivo al refugio.
- No lee las conversaciones privadas, salvo las que alguien reporte.
- Debe usar verificación en dos pasos y su sesión dura máximo 12 horas.
- Todas sus acciones quedan en la bitácora y no se pueden borrar.

### Matriz de permisos

✓ = permitido · — = no permitido

| Acción | Visitante | Adoptante | Refugio | Administrador |
| --- | :---: | :---: | :---: | :---: |
| Ver la baraja, la tabla y las fichas | ✓ | ✓ | ✓ | ✓ |
| Ver la compatibilidad personalizada | — | La suya | En las solicitudes de sus peludos | — |
| Guardar favoritos | — | ✓ | — | — |
| Enviar una solicitud de adopción | — | ✓ (máx. 3 activas) | — | — |
| Ver solicitudes | — | Solo las suyas | Solo las de sus peludos | Todas, solo lectura |
| Cambiar el estado de una solicitud | — | Solo cancelar la suya | ✓ con motivo | — |
| Donar | ✓ (sin historial) | ✓ | — | — |
| Reportar un animal | — | ✓ | ✓ | ✓ |
| Atender reportes | — | — | Los de su zona | ✓ (asignar y cerrar) |
| Publicar y editar peludos | — | — | Solo los suyos | Solo ocultar |
| Gestionar necesidades y eventos | — | — | Los de su refugio | — |
| Verificar refugios | — | — | — | ✓ |
| Cambiar roles y suspender cuentas | — | — | — | ✓ |
| Moderar historias y reportes | — | — | — | ✓ |
| Consultar la bitácora | — | — | Solo su refugio | ✓ |

### La misma pantalla según el rol

| Pantalla | Visitante | Adoptante | Refugio (dueño del peludo) | Administrador |
| --- | --- | --- | --- | --- |
| Encabezado | Botones «Entrar» y «Crear cuenta» | Avatar, campana de avisos y botón Reportar | Etiqueta cempasúchil «Refugio» y nombre del refugio | Etiqueta añil «Administración» |
| Ficha del peludo | Botón «Entra para adoptar a Luna» | Compatibilidad y botón «Quiero adoptar a Luna» | Botones «Editar carta» y «Ver 3 solicitudes» | Botón «Ocultar publicación» e historial de cambios |
| Ayudar | Donación única | Donación, padrinazgo, voluntariado e historial | Botón «Editar necesidades del mes» | Vista de todos los refugios |
| Reportes | No disponible | Formulario y mis reportes | Reportes de su zona para atender | Todos los reportes para asignar y moderar |

### Acceso y seguridad

- Inicio de sesión con correo y contraseña (mínimo 8 caracteres) o con cuenta de Google.
- Los errores se muestran debajo de cada campo. Si el correo o la contraseña no coinciden, el mensaje no dice cuál de los dos está mal.
- Después de 3 intentos fallidos, el botón «Entrar» se bloquea 30 segundos.
- Después de entrar, cada rol llega a su propia pantalla de inicio (ver la tabla de roles).
- Las rutas `/panel` (Refugio) y `/admin` (Administrador) están protegidas. Si alguien entra sin permiso ve la pantalla **«Esta carta no es para ti»** con un botón para volver a su inicio.
- Sesiones: 30 días para el adoptante, 12 horas para refugio y administrador.
- El registro de un refugio pide nombre, responsable, dirección y un documento que lo acredite. Queda «En verificación» hasta que un administrador lo revisa.

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
| Añil | `secondary` | `#1F2A6B` | Texto, contornos de 2–3 px, sombras duras, barra inferior, menú lateral del refugio y reverso de las cartas |
| Añil hondo | `secondary-deep` | `#141C4D` | Menú lateral del administrador, toasts y franjas oscuras |
| Añil claro | `secondary-container` | `#E4E7F6` | Chips de atributos, encabezados de tabla y pista de las barras de progreso |
| Cempasúchil | `tertiary` | `#FFB30F` | Botón Reportar, insignia de compatibilidad, opción activa de los menús, sombra del botón principal, banner de ayuda |
| Cempasúchil claro | `tertiary-container` | `#FFF2CF` | Estados «en revisión», etiqueta del rol Refugio y tarjetas destacadas |

### Papel, texto y frijol

| Nombre | Token | Hex | Uso |
| --- | --- | --- | --- |
| Papel | `surface` | `#FFFBF2` | Fondo general y filas alternas de las tablas |
| Cartulina | `surface-card` | `#FFFFFF` | Cartas, tarjetas, campos, hojas y filas de tabla |
| Tinta de texto | `on-surface` | `#1F2A6B` | Texto principal (es el mismo añil) |
| Gris pizarra | `neutral` | `#4B5079` | Texto secundario, pies de foto y metadatos |
| Contorno | `outline` | `#1F2A6B` | Bordes y divisores |
| Frijol | `frijol` | `#6B3F1D` | Marcador de selección: favoritos, pestaña activa, pasos completados |

### Estados

| Estado | Fondo | Texto | Uso |
| --- | --- | --- | --- |
| Éxito / Adoptado | `success` `#17734A` (verde nopal) | blanco | Sello «¡ADOPTADO!», solicitud aprobada, refugio verificado |
| Éxito suave | `success-container` `#DDF3E6` | `success` | Confirmaciones dentro de pantalla |
| Error | `error-container` `#FDE8E6` | `error` `#B42318` | Campos con error, avisos de falla, cuenta suspendida |
| En revisión | `tertiary-container` | `secondary` | Solicitud en proceso, refugio en verificación |

### Noche de lotería (modo oscuro)

| Nombre | Token | Hex | Uso |
| --- | --- | --- | --- |
| Noche | `noche` | `#0E1435` | Fondo general |
| Noche superficie | `noche-surface` | `#1A2252` | Cartas y tarjetas |
| Luz de vela | `on-noche` | `#FFF2CF` | Texto |

En modo oscuro, las cartas conservan su frente blanco (son objetos impresos), el rosa se usa solo en ilustraciones y sellos, y el cempasúchil pasa a ser el color de acción principal porque contrasta mejor sobre el añil. Se agregan estrellitas cempasúchil dispersas en los fondos.

---

## Typography

Dos familias de Google Fonts, con papeles muy distintos:

- **Alfa Slab One**, una slab gruesa con aire de cartel de feria: títulos, nombres y números de las cartas.
- **Archivo**, una sans grotesca variable y muy legible: todo el texto, botones, formularios y tablas. Su eje de ancho (`wdth`) se usa expandido para las cifras grandes.

| Token | Familia | Tamaño / interlínea | Peso | Uso |
| --- | --- | --- | --- | --- |
| `display-lg` | Alfa Slab One | 44 / 44 | 400 | Portada pública, acceso y pantallas de celebración |
| `headline-lg` | Alfa Slab One | 32 / 34 | 400 | Título de cada sección principal |
| `headline-md` | Alfa Slab One | 26 / 29 | 400 | Títulos de bloque y sellos |
| `headline-sm` | Alfa Slab One | 20 / 23 | 400 | Barra superior y títulos de tarjetas |
| `carta-nombre` | Alfa Slab One | 18 / 18, espaciado 0.06em | 400 | Banda del nombre en MAYÚSCULAS |
| `carta-numero` | Alfa Slab One | 16 / 16 | 400 | Número en la esquina de la carta |
| `title-lg` | Archivo | 20 / 26 | 700 | Subtítulos y encabezados de lista |
| `verso` | Archivo *itálica* | 17 / 24 | 500 | El verso de cada carta, entre comillas latinas «» |
| `body-lg` | Archivo | 18 / 28 | 400 | Historias y textos largos |
| `body-md` | Archivo | 16 / 24 | 400 | Texto general |
| `body-sm` | Archivo | 14 / 20 | 400 | Metadatos, ayudas y celdas de tabla |
| `label-lg` | Archivo | 16 / 16 | 700 | Botones y opciones de menú |
| `label-md` | Archivo | 14 / 14 | 700 | Chips, insignias y encabezados de tabla |
| `label-sm` | Archivo | 12 / 14, espaciado 0.04em | 600 | Barra inferior, etiquetas de rol y etiquetas pequeñas |
| `dato-numero` | Archivo expandida (`wdth` 125) | 28 / 28 | 800 | Cifras: días esperando, kilos donados, datos de los paneles |

**Reglas**

- Alfa Slab One nunca en párrafos, botones ni tablas.
- Mayúsculas solo en la banda de nombre de la carta y en los sellos («¡ME LATE!», «PASO», «¡ADOPTADO!»).
- Los versos siempre van en itálica y entre comillas latinas: «Sale de noche y de día, pasea en tu compañía.»
- Pesos de Archivo: 400 para el texto, 500 para los versos, 600 y 700 para etiquetas y botones, y 800 solo para las cifras de `dato-numero`.

---

## Layout

### Puntos de quiebre

| Dispositivo | Ancho | Columnas | Márgenes | Medianil |
| --- | --- | --- | --- | --- |
| Celular | 360–639 px | 4 | 20 px | 12 px |
| Tablet | 640–1023 px | 8 | 32 px | 16 px |
| Computadora | 1024 px o más | 12 | 48 px | 24 px |

- **Rejilla base de 4 px.** Todos los espacios salen de la escala `spacing`.
- **Contenedor** de 1200 px como máximo en las páginas públicas y del adoptante.
- **Zonas táctiles** de al menos 48 × 48 px.

### Navegación según dispositivo y rol

| Rol | Computadora | Tablet | Celular |
| --- | --- | --- | --- |
| Visitante y adoptante | Barra superior de 72 px (`navbar-web`): logo, enlaces, botón Reportar cempasúchil y avatar | Barra superior | Barra inferior de 76 px (`tab-bar`) con el botón Reportar al centro, sobresaliendo 20 px |
| Refugio | Menú lateral fijo de 264 px (`menu-lateral-refugio`) | Menú lateral reducido a íconos (80 px) | Barra superior con botón de menú que abre un cajón |
| Administrador | Menú lateral fijo de 264 px (`menu-lateral-admin`) | Menú lateral reducido a íconos | Barra superior con cajón |

### Medidas clave

| Elemento | Celular | Computadora |
| --- | --- | --- |
| Carta en la baraja | 280 × 420 px (proporción 2:3), centrada | 320 × 480 px, con la información a la derecha |
| Carta en la tabla de Adoptar | 2 columnas (~165 px de ancho) | 4 columnas |
| Mi tabla (buenas acciones) | Cuadrícula 4 × 4 de minicartas de 76 px | 4 × 4 de 120 px |
| Tarjeta de acceso | Ancho completo | 440 px junto a una ilustración grande |
| Tablas del panel | Cada fila se convierte en tarjeta | Tabla completa con encabezado fijo |
| Hoja inferior | Ancho completo, alto máximo 90 % | Panel lateral de 420 px |
| Botón principal de la ficha | Fijo abajo, ancho completo | Fijo en la columna derecha |

### Patrones de pantalla

- **Secciones principales:** título grande en Alfa Slab One, subtítulo de una línea y contenido en bloques separados por 32 px.
- **Detalle:** carta o imagen a la izquierda (abajo en celular), información a la derecha y botón principal siempre visible.
- **Formularios:** un tema por paso, campos apilados y el botón Continuar siempre visible.
- **Paneles:** fila de cuatro datos grandes arriba, luego tabla o tablero, con acciones principales en la esquina superior derecha.

---

## Elevation & Depth

Nada de sombras difuminadas ni degradados. La profundidad se logra como en un impreso: **contornos de tinta añil y sombras duras desplazadas**, como si el papel estuviera recortado y pegado encima de otro.

| Nivel | Estilo | Dónde |
| --- | --- | --- |
| 0 · Plano | Borde 2 px añil, sin sombra | Campos, chips sin seleccionar, tablas, tarjetas de lista |
| 1 · Recorte | Borde 2 px + sombra `3px 3px 0 #1F2A6B` | Chips activos, tarjetas destacadas, datos de panel |
| 2 · Carta | Borde 3 px + sombra `5px 5px 0 #1F2A6B` | Cartas, botones secundarios, tarjeta de acceso |
| 3 · En mano | Borde 3 px + sombra `8px 8px 0 #1F2A6B` | Carta activa de la baraja, hojas y diálogos |

- **Botón principal:** rosa con sombra `4px 4px 0 #FFB30F` (cempasúchil). Al presionarlo se desplaza 3 px y la sombra desaparece: parece que se imprime.
- **Velo de modal:** añil al 60 % de opacidad.
- **Texturas:** grano de papel al 4 % sobre todo el fondo y trama de puntos (halftone) al 8 % en encabezados y fondos de ilustración. Los paneles del refugio y del administrador no llevan trama en las tablas.

---

## Shapes

| Forma | Radio | Dónde |
| --- | --- | --- |
| Carta de lotería | `md` 12 px | Cartas, tarjetas, botones |
| Campo | `sm` 8 px | Inputs, selects, chips de atributo, opción activa del menú lateral |
| Número de carta | `xs` 4 px | Recuadro del número en la esquina |
| Hoja inferior | `xl` 28 px (solo arriba) | Filtros, detalles en mapa |
| Banner y acceso | `lg` 20 px | Banner de ayuda, tarjeta de acceso, tarjetas de historia |
| Píldora / círculo | `full` | Chips de filtro, insignias, etiquetas de rol, botón Cantar y botón Reportar |

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
| Compatibilidad | Insignia cempasúchil «92 % compatible» flotando sobre el borde superior (solo adoptante) |
| Oculta | Para el refugio y el administrador: carta en gris pizarra con la etiqueta «Oculta» y el motivo |

### Botones

| Tipo | Token | Uso |
| --- | --- | --- |
| Principal | `button-primary` | La acción más importante: «Quiero adoptar a Luna», «Enviar solicitud», «Entrar» |
| Secundario | `button-secondary` | Alternativas: «Apadrinar», «Compartir carta», «Exportar» |
| Acento | `button-accent` | Acciones de ayuda y de panel: «Donar ahora», «Me apunto», «Nueva carta» |
| Cantar | `button-cantar` | Círculo añil con ícono de bocina cempasúchil que lee el verso en voz alta |
| Reportar | `fab-reportar` | Botón central de la barra inferior en celular y botón cempasúchil en la barra superior en computadora |
| Texto | Sin fondo, `label-lg` añil subrayado | «Ver todas», «Saltar», «¿Olvidaste tu contraseña?» |
| Peligro | Fondo `error-container`, texto `error` | «Suspender cuenta», «No aprobar». Siempre piden confirmación |

Estados de todos los botones: normal, presionado (se desplaza y pierde la sombra), deshabilitado (añil claro con texto pizarra, sin sombra y con una nota que explica por qué) y cargando (tres frijoles que rebotan).

### Chips, insignias y etiquetas de rol

- `chip-filtro` y `chip-filtro-activo`: filtros de especie, edad, tamaño y energía. El activo es añil con ícono de palomita.
- `chip-atributo`: datos de la ficha: «2 años», «Hembra», «Mediana», «Esterilizada».
- `badge-compatibilidad`, `badge-urgente`, `badge-en-revision`, `badge-adoptado`: estados siempre con ícono y texto.
- `etiqueta-rol-refugio` y `etiqueta-rol-admin`: aparecen junto al nombre en el encabezado para que cada persona sepa con qué rol está trabajando.

### Acceso

- **Tarjeta de acceso** (`tarjeta-acceso`): título «Entra a Huellitas», campos de correo y contraseña, enlace «¿Olvidaste tu contraseña?», botón principal «Entrar», separador «o» y botón secundario «Continuar con Google».
- Debajo, dos enlaces: «¿No tienes cuenta? Crea una» y «¿Eres un refugio? Registra tu refugio».
- En computadora va a la derecha de una ilustración grande de la baraja repartida. En celular ocupa toda la pantalla, con la baraja pequeña arriba.

### Formularios

- Etiqueta arriba del campo (`label-md`), ayuda debajo (`body-sm` pizarra) y error con ícono y texto (`input-error`).
- Opciones como **tarjetas seleccionables** con ilustración (por ejemplo, «Casa con patio», «Departamento») en lugar de listas desplegables.
- Interruptores, deslizadores (horas fuera de casa) y contador (número de niños) con estilo de imprenta: borde añil y relleno rosa.
- Campo para subir archivos con zona punteada, vista previa y estado de cada archivo.

### Tablas (paneles del refugio y del administrador)

- Encabezado `tabla-encabezado` en añil claro con texto añil en `label-md`, fijo al hacer scroll.
- Filas `tabla-fila` y `tabla-fila-alterna` (cartulina y papel) de 56 px, con divisor añil de 1 px.
- Primera columna con minicarta o avatar. Columna de estado con insignia. Última columna con acciones (ver, editar, más).
- Arriba de la tabla: buscador, filtros en chips, contador de resultados y botón principal de la sección.
- Abajo: paginación con números y flechas.
- En celular cada fila se convierte en una tarjeta con los mismos datos.

### Progreso

- **Barra de frijoles:** cinco frijoles en fila para los pasos de la solicitud. Los completos son café, el actual rebota y los pendientes son contornos punteados.
- **Barra de meta** (`barra-progreso` + `barra-progreso-relleno`): necesidades del mes, con el dato a la derecha («64 de 100 kg»).

### Navegación

- **Barra superior web** (`navbar-web`): fondo papel con borde inferior añil de 3 px. Logo (carta pequeña con la «H») a la izquierda, enlaces al centro con un frijol bajo el activo y, a la derecha, botón Reportar, campana y avatar (o «Entrar» y «Crear cuenta» para el visitante).
- **Barra inferior en celular** (`tab-bar`): añil, con íconos y etiquetas en blanco. La pestaña activa lleva un frijol arriba del ícono y una pastilla cempasúchil detrás (`tab-bar-activo`).
- **Menú lateral del refugio** (`menu-lateral-refugio`): añil, con el nombre y la foto del refugio arriba, opciones con ícono y la activa en pastilla cempasúchil (`menu-lateral-activo`). Contadores rosas en Solicitudes y Reportes.
- **Menú lateral del administrador** (`menu-lateral-admin`): añil hondo, con la etiqueta «Administración» arriba para distinguirlo a simple vista del panel del refugio.
- **Barra superior de sección** (`top-app-bar`): papel, título en Alfa Slab One, botón de atrás circular y migas de pan en computadora.

### Superficies

- **Hoja inferior** (`hoja-inferior`): filtros, detalles del mapa y confirmaciones, con agarradera añil de 40 × 5 px.
- **Diálogo:** carta grande centrada (nivel 3) con ilustración arriba. Los de confirmación de acciones de peligro repiten el nombre de lo que se va a afectar.
- **Toast** (`toast`): añil hondo con texto luz de vela, abajo, durante 4 s.
- **Tarjeta de lista** (`tarjeta-lista`): refugios, eventos y solicitudes.
- **Dato de panel** (`dato-panel`): cifras grandes del resumen del refugio, del administrador y de las necesidades del mes.

### Línea de tiempo de la solicitud

Vertical, con un círculo por etapa: completas en verde nopal con palomita, la actual en cempasúchil con un pulso suave y las pendientes con contorno punteado. Cada etapa muestra fecha, responsable y un mensaje del refugio.

### Tablero de solicitudes (refugio)

Columnas por etapa (Nuevas · En revisión · Entrevista · Visita · Aprobadas) con encabezado añil claro y contador. Cada tarjeta muestra la minicarta del peludo, el nombre del adoptante, la compatibilidad y los días en la etapa. Las tarjetas se arrastran entre columnas.

### Pines del mapa

Minicartas de 36 × 52 px con la ilustración del peludo o el ícono del lugar: refugio (casa añil), veterinaria (cruz rosa), punto de acopio (costal cempasúchil) y reporte (signo de admiración rosa).

### Estados vacíos, de carga y de acceso denegado

- **Carga:** reversos de carta con un brillo diagonal que los recorre.
- **Vacío:** ilustración de una carta boca abajo con un gato dormido encima y un texto amable con una sola acción.
- **Acceso denegado:** carta boca abajo con candado y el texto «Esta carta no es para ti», con el botón «Volver a mi inicio».

---

## Do's and Don'ts

**Sí**

- Mostrar a cada peludo como carta, con número, nombre y verso.
- Usar el rosa solo para la acción principal de cada pantalla.
- Mantener contornos añil de 2–3 px y sombras duras desplazadas.
- Marcar lo elegido con el frijol: favoritos, pestaña activa, pasos completos.
- Mostrar siempre con qué rol está trabajando la persona en los paneles.
- Celebrar los logros con papel picado y el grito «¡Lotería!».
- Escribir en español de México, con trato de «tú» y frases cortas.
- Acompañar cada estado de color con un ícono y un texto.

**No**

- No usar degradados, sombras difuminadas, vidrio esmerilado ni neón.
- No agregar colores fuera de las tres tintas, el papel, el frijol y los colores de estado.
- No usar fotos de banco ni emojis como ilustración principal.
- No poner Alfa Slab One en párrafos, botones ni tablas.
- No mezclar esquinas rectas y redondeadas en una misma vista.
- No usar sellos, papel picado ni confeti en pantallas de error o de malas noticias.
- No mostrar más de un botón rosa a la vez.
- No mostrar opciones de otro rol, ni siquiera deshabilitadas.

---

## Lineamientos UX/UI

1. **Una tarea por pantalla.** Cada pantalla responde a una pregunta: «¿a quién adopto?», «¿en qué va mi solicitud?», «¿qué falta este mes?». El título lo dice y el botón principal lo resuelve.
2. **Consistencia entre roles.** La carta, los colores de estado, los botones y la posición de las acciones son iguales en la parte pública y en los paneles. Lo que cambia según el rol es el menú y lo que se puede hacer, no el lenguaje visual.
3. **Retroalimentación inmediata.** Todo botón responde al toque con su estado presionado. Cada acción guardada se confirma con un toast. Si algo tarda más de un segundo, aparece el esqueleto de reversos de carta.
4. **Prevenir errores antes que corregirlos.** Los formularios validan al salir de cada campo y al enviar. Las acciones que no se pueden deshacer (no aprobar, suspender, ocultar) piden confirmación y un motivo. La baraja tiene botón de deshacer.
5. **Mensajes humanos.** Los errores dicen qué pasó y cómo arreglarlo, sin códigos técnicos: «Ese correo ya tiene cuenta. ¿Quieres entrar?».
6. **Formularios cortos y por pasos.** La solicitud se divide en cinco pasos con progreso visible y se guarda como borrador en cada uno. Lo que el sistema ya sabe viene prellenado.
7. **Jerarquía clara.** Primero la carta o el dato importante, luego el detalle y al final las acciones secundarias. En los paneles, primero los datos grandes y luego la tabla.
8. **Primero el celular.** Todo se diseña a 390 px y se amplía. En celular las acciones principales quedan al alcance del pulgar, las tablas se vuelven tarjetas y el menú lateral se vuelve cajón.
9. **Estados vacíos útiles.** Ninguna pantalla queda en blanco: siempre se explica por qué no hay nada y se ofrece una acción.
10. **Transparencia.** La compatibilidad muestra su desglose, el adoptante sabe quién revisa su solicitud y por qué no se aprobó, y las donaciones nunca vienen preseleccionadas como mensuales.
11. **Accesibilidad desde el diseño.** Ver la sección [Accesibilidad](#accesibilidad).

---

## Reglas del sistema

### Adopción

- Para enviar una solicitud, el perfil de hogar debe estar completo.
- Un adoptante tiene como máximo **3 solicitudes activas** y solo una por peludo.
- Una solicitud enviada no se edita. Se pueden agregar documentos y mensajes, o cancelarla antes de la visita al hogar.
- El refugio debe responder una solicitud nueva en un máximo de 48 horas. Si no lo hace, aparece una alerta en su panel.
- Cuando un peludo es adoptado, sus demás solicitudes pasan a «No aprobada» con un mensaje amable y tres cartas sugeridas.

### Publicación

- Solo los refugios verificados pueden publicar.
- Cada peludo necesita al menos dos fotos, ficha de salud, historia y verso antes de publicarse.
- El número de carta es consecutivo en toda la plataforma y no se reutiliza.
- El administrador puede ocultar una publicación, pero nunca editarla.

### Privacidad

- Los datos personales del adoptante solo los ve el refugio con el que tiene una solicitud.
- El teléfono del adoptante solo se muestra al refugio a partir de la etapa «Entrevista».
- Los reportes de maltrato muestran la ubicación exacta solo a refugios y administradores. Para los demás usuarios, solo la zona aproximada.
- Las historias y los reportes de la comunidad se publican después de pasar por moderación.

### Registro de actividad

- Toda acción de un refugio o un administrador queda en la bitácora con fecha, persona y motivo.
- La bitácora no se puede editar ni borrar.

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
| Entrar | `login` |
| Cantar el verso | `volume_up` |
| Me late / Paso | `favorite` / `close` |
| Compatibilidad | `join_inner` |
| Resumen (paneles) | `dashboard` |
| Peludos (panel) | `pets` |
| Solicitudes (panel) | `assignment` |
| Refugio | `home_pin` |
| Usuarios y roles | `manage_accounts` |
| Moderación | `shield` |
| Bitácora | `history` |
| Veterinaria | `medical_services` |
| Punto de acopio | `inventory_2` |
| Vacunas y salud | `vaccines` |
| Evento | `event` |
| Compartir | `ios_share` |
| Avisos | `notifications` |

### Ilustraciones

- Estilo **serigrafía de tres tintas**: rellenos planos, la línea añil desfasada 2 px de los colores, tramas de puntos en las sombras.
- Cada carta tiene un **objeto propio** que refuerza el verso: Luna con una luna creciente, Nube bajo una nube, Max con una pelota rosa, Rocky con lentes sobre un cojín.
- Las escenas vacías y de celebración usan los mismos personajes (Luna, Nube, Max…) para que la aplicación tenga elenco propio.

### Fotos

Las fotos reales aparecen en la ficha, en las historias y en el seguimiento. Llevan un marco blanco de foto instantánea con borde añil, giradas ±2°, como pegadas en un álbum.

---

## Movimiento y microinteracciones

Curvas: **suave** `cubic-bezier(0.22, 0.61, 0.36, 1)` para entradas y salidas, y **rebote** `cubic-bezier(0.34, 1.56, 0.64, 1)` para los momentos alegres.

| Momento | Animación | Duración |
| --- | --- | --- |
| Portada y acceso | Las cartas salen del mazo y se reparten en abanico, una cada 60 ms | 900 ms |
| Revelar carta | Giro 3D del reverso al frente | 600 ms, suave |
| Deslizar en la baraja | La carta sigue al dedo con hasta 12° de giro, el sello «¡ME LATE!» o «PASO» aparece con escala 1.3 → 1 | Tiempo real |
| Guardar favorito | Un frijol cae sobre la carta y rebota dos veces | 450 ms, rebote |
| Cantar | Ondas de sonido en el botón y el verso se resalta palabra por palabra, como karaoke | Lo que dure la voz |
| ¡Lotería! | Baja un papel picado ondeando y caen huellas y frijoles como confeti | 1.2 s |
| Botón presionado | Se desplaza 3 px abajo y a la derecha, la sombra desaparece | 120 ms |
| Cambio de sección | El frijol salta a la nueva opción del menú | 300 ms, rebote |
| Mover tarjeta en el tablero | La tarjeta se levanta (sombra de nivel 3) y cae en su nueva columna | 250 ms |
| Paso completado | El frijol se rellena de café con un pequeño estallido | 300 ms |
| Carga | Brillo diagonal sobre los reversos de carta | Bucle de 1.4 s |

**Reducir movimiento:** si el sistema lo pide, todas las animaciones se cambian por fundidos de 150 ms y el confeti se sustituye por un sello estático.

---

## Mapa de la aplicación

```
Huellitas
│
├── PÚBLICO (Visitante)  · barra superior
│   ├── Inicio público (portada con la baraja)
│   ├── Adoptar · La tabla ─ Ficha del peludo
│   ├── Ayudar (donación única y necesidades)
│   ├── Historias «Ya tienen casa»
│   └── Entrar ─ Crear cuenta ─ Recuperar contraseña ─ Registrar mi refugio
│
├── ADOPTANTE  · barra superior (computadora) / barra inferior (celular)
│   ├── Perfil de hogar (5 preguntas, la primera vez)
│   ├── Inicio · La baraja ─ Carta del día ─ Historias ─ Avisos
│   ├── Adoptar · La tabla ─ Filtros ─ Mapa ─ Ficha ─ Solicitud (5 pasos) ─ ¡Lotería!
│   ├── ( + ) Reportar ─ Tipo ─ Foto ─ Ubicación ─ Detalles ─ Enviado
│   ├── Ayudar ─ Donar · Necesidades · Apadrinar · Voluntariado · Hogar temporal · Acopio
│   └── Yo ─ Mi tabla · Mis solicitudes ─ Seguimiento ─ Mensajes · Mi peludo · Ajustes
│
├── REFUGIO  · menú lateral añil  (/panel)
│   ├── Resumen
│   ├── Peludos (tabla) ─ Nueva carta (generador) ─ Editar carta
│   ├── Solicitudes (tablero) ─ Detalle de solicitud ─ Mensajes
│   ├── Necesidades del mes · Eventos
│   ├── Reportes de la zona
│   └── Mi refugio (datos, horario, ubicación, bitácora)
│
└── ADMINISTRADOR  · menú lateral añil hondo  (/admin)
    ├── Resumen global
    ├── Refugios ─ Verificación (documentos, aprobar o rechazar)
    ├── Usuarios y roles (tabla, cambiar rol, suspender)
    ├── Moderación (reportes, historias, publicaciones)
    ├── Catálogos (especies, tamaños, tipos de necesidad y de reporte)
    └── Bitácora
```

---

## Módulos

La aplicación tiene 15 módulos. Como en la lotería, cada uno es una carta con su número.

| # | Módulo | Rol | Pantallas principales |
| --- | --- | --- | --- |
| 1 | Inicio público y acceso | Visitante | Portada, entrar, crear cuenta, recuperar contraseña, registrar refugio |
| 2 | Perfil de hogar | Adoptante | 5 preguntas |
| 3 | Inicio · La baraja | Adoptante | Baraja, carta del día, historias |
| 4 | Adoptar · La tabla | Visitante y adoptante | Catálogo, filtros, mapa |
| 5 | La carta · Ficha del peludo | Todos (cambia según el rol) | Ficha completa, compartir |
| 6 | Solicitud de adopción | Adoptante | 5 pasos, revisión, ¡Lotería! |
| 7 | Mis solicitudes | Adoptante | Línea de tiempo, citas, documentos, mensajes |
| 8 | Ayudar · Echa la mano | Visitante y adoptante | Donar, necesidades, apadrinar, voluntariado |
| 9 | Reportar | Adoptante | Reporte en 4 pasos, avistamientos |
| 10 | Historias · Ya tienen casa | Todos | Feed de historias, detalle |
| 11 | Yo · Mi tabla | Adoptante | Perfil, tabla 4 × 4, insignias |
| 12 | Mi peludo | Adoptante que ya adoptó | Calendario de salud, seguimiento |
| 13 | Avisos y ajustes | Adoptante | Notificaciones, preferencias, modo noche, accesibilidad |
| 14 | Panel del refugio | Refugio | Resumen, peludos, generador de cartas, tablero de solicitudes, necesidades, reportes |
| 15 | Administración | Administrador | Resumen global, verificación de refugios, usuarios y roles, moderación, bitácora |

---

### Carta 1 · Inicio público y acceso

**Rol:** Visitante.

**Objetivo:** presentar Huellitas, dejar explorar sin cuenta y dar acceso al sistema.

**Pantallas**

1. **Portada pública:** barra superior con Inicio, Adoptar, Ayudar, Historias y los botones «Entrar» y «Crear cuenta». Encabezado grande con la baraja repartida en abanico (Luna, Nube y Max al frente) y el título «Cada peludo es una carta. Encuentra la tuya.». Debajo: cómo funciona en tres pasos, los peludos que más han esperado, necesidades del mes e historias.
2. **Entrar:** tarjeta de acceso con correo, contraseña, «¿Olvidaste tu contraseña?», botón «Entrar» y «Continuar con Google». Enlaces a «Crear cuenta» y «Registra tu refugio». Al entrar, el sistema lleva a cada persona a la pantalla de inicio de su rol.
3. **Crear cuenta:** nombre, correo, contraseña con indicador de seguridad y aceptación del aviso de privacidad.
4. **Recuperar contraseña:** correo y confirmación «Te mandamos un enlace».
5. **Registrar mi refugio:** nombre del refugio, responsable, dirección en mapa, teléfono y documento que lo acredite. Termina en «Tu refugio está en verificación».

**Momento wow:** al entrar, la baraja de la ilustración se junta y se reparte de nuevo con las cartas del rol: peludos para el adoptante, la carta del refugio para el refugio.

---

### Carta 2 · Perfil de hogar

**Rol:** Adoptante (la primera vez que entra).

**Objetivo:** conocer el hogar para calcular la compatibilidad.

Cinco preguntas, una por pantalla y con tarjetas ilustradas:

- ¿Dónde vives? Casa con patio · Casa sin patio · Departamento.
- ¿Cuántas horas al día pasas fuera? Deslizador de 0 a 12.
- ¿Quiénes viven contigo? Contador de adultos, niños y mascotas.
- ¿Has tenido perro o gato antes? Sí, muchas veces · Alguna vez · Sería mi primera vez.
- ¿Qué buscas? Perro · Gato · Me da igual, y edad: Cachorro · Adulto · Abuelito.

**Momento wow:** al terminar, la baraja se mezcla y aparece «Tus primeras 3 cartas», ya ordenadas por compatibilidad.

---

### Carta 3 · Inicio · La baraja

**Rol:** Adoptante.

**Objetivo:** descubrir peludos de forma divertida, uno por uno.

**Qué se ve**

- Saludo «¡Buenas tardes, Arturo!» y la ubicación «Tulancingo, Hgo.» con la campana de avisos.
- **La baraja:** carta grande (nivel 3) con la insignia de compatibilidad. Debajo, tres botones circulares: **Paso** (añil), **Cantar** (añil con bocina cempasúchil) y **Me late** (rosa). En computadora, la carta queda a la izquierda y su resumen a la derecha.
- Al tocar la carta se voltea y muestra un resumen: edad, tamaño, energía y refugio, con el enlace «Ver su carta completa».
- **Carta del día:** banda cempasúchil con el peludo que más ha esperado.
- **Ya tienen casa:** carrusel horizontal de historias con sello verde.
- **Banner de ayuda:** «Este mes faltan 36 kg de croquetas» con el botón «Echar la mano».

**Interacciones**

- Deslizar a la derecha, tocar Me late o, en computadora, presionar la flecha derecha: «¡ME LATE!» y la carta se guarda en Mi tabla con un frijol.
- Deslizar a la izquierda, tocar Paso o presionar la flecha izquierda: «PASO» y la carta se va al fondo del mazo.
- Deslizar hacia arriba o tocar «Ver su carta completa»: abre la ficha completa.
- Cantar: la aplicación lee el verso en voz alta y lo resalta palabra por palabra.
- Botón de deshacer para regresar la última carta.

**Momento wow:** cuando se acaban las cartas del día aparece una carta boca abajo con «Mañana se canta una nueva» y una cuenta regresiva.

---

### Carta 4 · Adoptar · La tabla

**Rol:** Visitante y adoptante.

**Objetivo:** ver a todos los peludos a la vez y filtrar con precisión.

**Qué se ve**

- Título «La tabla» y subtítulo «42 peludos buscan casa».
- Buscador por nombre y chips de filtro rápido: Todos · Perros · Gatos · Cachorros · Abuelitos · Cerca de mí.
- Botón «Filtros» con contador que abre una hoja inferior (panel lateral en computadora): especie, sexo, edad, tamaño, energía, convive con niños, perros o gatos, refugio y distancia.
- Orden: Más compatibles (solo adoptante) · Más tiempo esperando · Recién llegados.
- **Cuadrícula** de cartas: 2 columnas en celular y 4 en computadora, con nombre, edad e insignia de compatibilidad.
- Interruptor **Lista / Mapa**: el mapa muestra pines de minicarta agrupados por refugio.

**Momento wow:** al aplicar filtros, las cartas que no coinciden se voltean boca abajo y se acomodan al final antes de desaparecer.

---

### Carta 5 · La carta · Ficha del peludo

**Rol:** Todos. Las acciones cambian según el rol (ver [La misma pantalla según el rol](#la-misma-pantalla-según-el-rol)).

**Objetivo:** conocer a fondo al peludo y decidir.

**Secciones, de arriba abajo** (en computadora, la carta a la izquierda y el resto en la columna derecha)

1. **Encabezado:** carta grande con giro leve y botones de atrás, compartir y favorito (frijol).
2. **Nombre y verso:** «Luna» en `headline-lg`, el verso en itálica y el botón Cantar.
3. **Chips:** 2 años · Hembra · Mediana · Esterilizada · Vacunada.
4. **Galería de fotos** con marco de foto instantánea.
5. **Compatibilidad 92 %** (solo adoptante), desplegable con el porqué: «Tienes patio ✓», «Pasas poco tiempo fuera ✓», «Hay niños en casa: Luna convive bien con ellos ✓».
6. **Así es su carácter:** barras de personalidad (Juguetona, Tranquila, Sociable con perros, Sociable con gatos, Le gusta pasear).
7. **Su historia:** dónde la rescataron y cómo es su día.
8. **Salud:** lista con palomitas (vacunas, desparasitación, esterilización) y la fecha de la última revisión.
9. **Lleva esperando:** cifra grande «63 días» en `dato-numero`.
10. **Refugio:** tarjeta con minimapa, horario y botón «Cómo llegar».
11. **Botón principal:** «Quiero adoptar a Luna» (adoptante), «Entra para adoptar a Luna» (visitante), «Editar carta» (refugio dueño) u «Ocultar publicación» (administrador).

**Momento wow:** «Compartir carta» genera una imagen vertical para historias de Instagram y WhatsApp con la carta, el verso y un código QR que abre la ficha.

---

### Carta 6 · Solicitud de adopción

**Rol:** Adoptante.

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

### Carta 7 · Mis solicitudes · Seguimiento

**Rol:** Adoptante.

**Objetivo:** saber siempre en qué va la adopción, como el rastreo de un paquete.

- Tarjetas por solicitud con la minicarta del peludo y la insignia de estado.
- **Línea de tiempo:** Enviada → En revisión → Entrevista → Visita al hogar → ¡Adoptado!
- Detalle de la etapa actual: qué está pasando, quién la revisa y qué falta («Sube una foto del lugar donde dormirá Luna»).
- **Citas:** fecha, hora, dirección y botón para agregar al calendario.
- **Mensajes con el refugio** en un chat sencillo.
- **Documentos:** subir identificación oficial y comprobante de domicilio, con el estado de cada uno.

**Si no se aprueba:** mensaje amable sin sellos ni confeti, el motivo general y tres cartas sugeridas.

---

### Carta 8 · Ayudar · Echa la mano

**Rol:** Visitante (donación única) y adoptante (todo).

**Objetivo:** que cualquiera pueda ayudar en dos toques aunque no adopte.

- **Necesidades del mes:** tarjetas con barra de meta. Croquetas para perro 64 de 100 kg · Arena para gato 18 de 40 kg · Vacunas 12 de 30 · Cobijas 25 de 50.
- **Donar:** montos rápidos ($50, $100, $200, otro) y elección del destino (refugio o necesidad).
- **Donación en especie:** lista de lo que se recibe y mapa de puntos de acopio.
- **Apadrinar:** aportación mensual para un peludo, con fotos y noticias suyas cada mes.
- **Voluntariado:** calendario con paseos, jornadas de esterilización y ferias de adopción, con cupo y el botón «Me apunto».
- **Hogar temporal:** registro para cuidar a un peludo mientras encuentra familia.

**Momento wow:** al donar, la barra de meta se llena en vivo y suelta frijoles al cruzar cada 25 %.

---

### Carta 9 · Reportar

**Rol:** Adoptante (y refugio o administrador cuando lo necesiten).

**Objetivo:** avisar rápido de un animal que necesita ayuda.

1. **¿Qué pasa?** Tarjetas grandes: En la calle · Perdido · Encontrado · En peligro o maltrato.
2. **Foto:** cámara con guía de encuadre o subir desde la galería.
3. **¿Dónde?** Mapa con la ubicación actual y un pin que se puede mover.
4. **Detalles:** descripción, cómo es, si está herido y nivel de urgencia.

**Después:** confirmación «Gracias por avisar. Tres rescatistas cercanos ya lo vieron» y seguimiento del reporte. Para casos de maltrato se muestran los contactos de las autoridades locales.

**Avistamientos:** mapa y lista de reportes cercanos con filtro por tipo y el botón «Lo he visto» para sumar información.

---

### Carta 10 · Historias · Ya tienen casa

**Rol:** Todos (publicar: adoptante, con moderación).

- Feed de tarjetas con foto antes y después, la carta con sello «¡ADOPTADO!» y una cita de la familia.
- Detalle con la historia completa, galería y botón «Conoce a otros como Max».

---

### Carta 11 · Yo · Mi tabla

**Rol:** Adoptante.

**Objetivo:** reunir lo personal y premiar cada forma de ayudar.

- Encabezado con avatar en sello festoneado, nombre y «Ayudante desde octubre de 2026».
- **Mi tabla:** cuadrícula 4 × 4 de minicartas de buenas acciones. Cada acción pone un frijol en su casilla.
- **Insignias** por patrones de la lotería tradicional: **Chorro** (una línea completa), **Cuatro esquinas**, **Centrito** (las cuatro casillas del centro) y **¡Llena!** (las 16 casillas).
- **Mis favoritos:** las cartas guardadas con «¡ME LATE!».
- Accesos a Mis solicitudes, Mi peludo, Mis donaciones y Ajustes.

**Las 16 cartas de Mi tabla**

| | | | |
| --- | --- | --- | --- |
| 1 · El Perfil (completar perfil de hogar) | 2 · El Compartido (compartir una carta) | 3 · La Croqueta (donar alimento) | 4 · El Paseo (voluntariado de paseo) |
| 5 · La Feria (ir a una feria de adopción) | 6 · El Padrino (apadrinar) | 7 · La Cobija (donar cobijas) | 8 · El Aviso (hacer un reporte) |
| 9 · La Visita (visitar un refugio) | 10 · La Solicitud (enviar una solicitud) | 11 · La Vacuna (donar para vacunas) | 12 · El Hogar Temporal (cuidar temporalmente) |
| 13 · La Foto (subir una foto de seguimiento) | 14 · La Historia (contar tu historia) | 15 · El Rescate (un reporte que terminó en rescate) | 16 · La Adopción (adoptar) |

**Momento wow:** al completar un patrón, el frijol que cierra la línea brilla y aparece la insignia como un sello que se estampa.

---

### Carta 12 · Mi peludo · Después de adoptar

**Rol:** Adoptante que ya adoptó.

- Perfil del peludo con su carta convertida en «carta de la familia» (marco cempasúchil).
- **Calendario de salud:** vacunas, desparasitación y revisiones con recordatorios.
- **Seguimiento:** check-ins con foto a la semana, al mes y a los tres meses, que el refugio recibe automáticamente.
- **Consejos por etapa:** primeros días, socialización y alimentación.
- Botón «Contar nuestra historia» que envía la historia a moderación.

---

### Carta 13 · Avisos y ajustes

**Rol:** Adoptante (los paneles tienen sus propios avisos).

**Avisos**, agrupados por día con íconos y colores de estado:

- «Se cantó una carta nueva: Kira, cachorra de 5 meses, 94 % compatible contigo.»
- «Tu solicitud para adoptar a Luna pasó a Entrevista.»
- «Mañana es la jornada de esterilización. ¡Te esperamos a las 9:00!»

**Ajustes:** datos de la cuenta, perfil de hogar, preferencias de avisos, modo (Claro · Noche de lotería · Automático), accesibilidad (texto grande, leer versos automáticamente, reducir movimiento) y cerrar sesión.

---

### Carta 14 · Panel del refugio

**Rol:** Refugio. Ruta `/panel`.

**Objetivo:** que un refugio pequeño administre todo sin ser experto en tecnología.

**Navegación:** menú lateral añil con el nombre y la foto del refugio, la etiqueta «Refugio» y las opciones Resumen · Peludos · Nueva carta · Solicitudes · Necesidades · Eventos · Reportes · Mensajes · Mi refugio.

**Pantallas**

1. **Resumen:** cuatro datos grandes (`dato-panel`): Peludos en adopción 12 · Solicitudes nuevas 7 · Adopciones este mes 3 · Promedio de espera 63 días. Debajo, gráfica de barras rosas de adopciones por mes, la lista «Los que más han esperado» y las alertas de solicitudes sin respuesta.
2. **Peludos:** tabla con minicarta, nombre, especie, edad, días esperando, solicitudes y estado (Publicada · Borrador · Oculta · Adoptada), con buscador, filtros y botón «Nueva carta».
3. **Generador de cartas (formulario):** datos del peludo, fotos, salud, historia, elección del objeto del verso y del fondo, número automático y sugerencias de verso que riman. Vista previa del frente y el reverso a la derecha y botón «Publicar carta».
4. **Solicitudes:** tablero por columnas (Nuevas · En revisión · Entrevista · Visita · Aprobadas). El detalle muestra las respuestas del adoptante, la compatibilidad, los documentos, las notas internas y los botones «Avanzar etapa», «Agendar cita» y «No aprobar» (con motivo obligatorio).
5. **Necesidades del mes:** tabla editable con artículo, meta, recibido y fecha límite.
6. **Eventos:** calendario con cupo e inscritos.
7. **Reportes de la zona:** mapa y lista para tomar un reporte y marcarlo como atendido o rescatado.

**Momento wow:** el generador muestra la carta terminada girando en 3D antes de publicarla.

---

### Carta 15 · Administración

**Rol:** Administrador. Ruta `/admin`.

**Objetivo:** que la plataforma sea confiable: refugios reales, cuentas en orden y contenido moderado.

**Navegación:** menú lateral añil hondo con la etiqueta «Administración» y las opciones Resumen · Refugios · Usuarios y roles · Moderación · Catálogos · Bitácora.

**Pantallas**

1. **Resumen global:** datos grandes (Refugios verificados 6 · En verificación 2 · Usuarios activos 1,240 · Adopciones del año 98), gráfica por refugio y pendientes de moderación.
2. **Refugios · Verificación:** tabla con nombre, responsable, fecha de solicitud, documentos y estado (En verificación · Verificado · Rechazado). El detalle muestra los documentos y los botones «Verificar refugio» y «Rechazar» (con motivo).
3. **Usuarios y roles:** tabla con nombre, correo, rol (con etiqueta de color), fecha de registro y estado. Acciones: cambiar rol y suspender o reactivar, siempre con confirmación.
4. **Moderación:** pestañas Reportes · Historias · Publicaciones. Cada elemento se aprueba, se oculta o se asigna a un refugio.
5. **Catálogos:** listas editables de especies, tamaños, tipos de necesidad y tipos de reporte.
6. **Bitácora:** tabla de solo lectura con fecha, persona, rol, acción y motivo, con filtros por rol y por fecha.

---

## Flujos principales

### A · Acceso según el rol

1. La persona entra a la portada como visitante y toca «Entrar».
2. Escribe su correo y contraseña.
3. El sistema revisa su rol y la lleva a su inicio: adoptante a La baraja, refugio al Resumen del panel y administrador al Resumen global.
4. Si es la primera vez que entra un adoptante, primero completa su perfil de hogar.
5. Si intenta abrir una ruta de otro rol, ve «Esta carta no es para ti».

### B · Adoptar

1. El adoptante desliza la baraja y le da «¡ME LATE!» a Luna.
2. Abre la ficha, revisa la compatibilidad y toca «Quiero adoptar a Luna».
3. Completa la solicitud en cinco pasos y elige una cita.
4. Recibe «¡Lotería!» y la solicitud aparece en Mis solicitudes.
5. El refugio la mueve en su tablero: En revisión → Entrevista → Visita al hogar.
6. El adoptante recibe un aviso en cada cambio y responde en el chat.
7. Se aprueba: la carta de Luna recibe el sello «¡ADOPTADO!» y se activa Mi peludo.

**Estados de una solicitud**

```
Borrador → Enviada → En revisión → Entrevista → Visita al hogar → Aprobada → ¡Adoptado!
                          │                                          │
                          ├── En espera (faltan documentos) ─────────┘
                          ├── Cancelada (por el adoptante, antes de la visita)
                          └── No aprobada (mensaje amable + cartas sugeridas)
```

### C · Registro y verificación de un refugio

Visitante → «Registra tu refugio» → formulario y documento → «En verificación» → el administrador revisa en Refugios → «Verificar refugio» → el refugio recibe un aviso y ya puede entrar a su panel y publicar.

### D · El refugio publica un peludo

Panel → Peludos → «Nueva carta» → datos y fotos → generador de cartas → vista previa → publicar → aparece en la baraja de los adoptantes compatibles con el aviso «Se cantó una carta nueva».

### E · Reportar un perro en la calle

Adoptante → Reportar → «En la calle» → foto → ubicación → detalles → enviado → el refugio de la zona lo ve en Reportes y lo toma → el reporte cambia a «Atendido» o «Rescatado» → si termina en rescate, se marca «El Rescate» en la tabla del adoptante.

### F · Donar croquetas

Ayudar → Necesidades del mes → «Croquetas para perro» → monto o punto de acopio → confirmación → la barra de meta se llena → «La Croqueta» se marca en Mi tabla.

---

## Modelo de datos

| Entidad | Campos principales |
| --- | --- |
| **Usuario** | id, nombre, correo, contraseña cifrada, teléfono, colonia, foto, rol (adoptante, refugio, administrador), estado (activo, suspendido), fecha de registro |
| **Perfil de hogar** | usuario, vivienda, patio, horas fuera, adultos, niños, mascotas actuales, experiencia, preferencias |
| **Refugio** | id, nombre, responsable (usuario), dirección, ubicación, horario, teléfono, documento, estado de verificación |
| **Peludo** | id, número de carta, nombre, especie, sexo, edad en meses, tamaño, energía, convive con (niños, perros, gatos), salud, historia, verso, ilustración, fotos, refugio, fecha de ingreso, estado (borrador, publicada, oculta, adoptada) |
| **Solicitud** | id, usuario, peludo, respuestas, estado, fechas por etapa, cita, documentos, notas del refugio, motivo de no aprobación |
| **Mensaje** | solicitud, autor, texto, fecha, leído |
| **Necesidad** | refugio, artículo, unidad, meta, recibido, fecha límite |
| **Donación** | usuario (opcional para visitante), tipo (dinero o especie), monto o artículo, destino, fecha |
| **Padrinazgo** | usuario, peludo, aportación mensual, estado |
| **Evento** | refugio, tipo, fecha, lugar, cupo, inscritos |
| **Reporte** | usuario, tipo, foto, ubicación, descripción, urgencia, estado, refugio asignado |
| **Historia** | peludo, familia, fotos antes y después, texto, fecha, estado de moderación |
| **Acción de tabla** | usuario, casilla (1 a 16), fecha |
| **Insignia** | usuario, patrón (chorro, cuatro esquinas, centrito, llena), fecha |
| **Seguimiento** | peludo, usuario, tipo (vacuna, desparasitación, check-in), fecha, foto |
| **Aviso** | usuario, tipo, texto, leído, fecha |
| **Bitácora** | fecha, usuario, rol, acción, entidad afectada, motivo |

**Cálculo de compatibilidad** (de 0 a 100 %): vivienda y espacio 25 % · tiempo disponible 25 % · convivencia con niños y otras mascotas 25 % · experiencia 15 % · preferencias de especie y edad 10 %. La aplicación siempre muestra el desglose para que el número sea honesto.

---

## Accesibilidad

- Todos los pares de texto y fondo de los tokens cumplen el contraste **WCAG AA** (4.5:1).
- El texto crece hasta el 200 % sin cortarse. Las cartas y las tablas se reacomodan si hace falta.
- Zonas táctiles de al menos 48 × 48 px.
- Todo se puede usar con teclado, con un foco visible de 3 px cempasúchil.
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

### Cuentas de ejemplo para la presentación

| Rol | Nombre | Correo |
| --- | --- | --- |
| Adoptante | Arturo | adoptante@huellitas.mx |
| Refugio | Mariana Solís · Refugio San Roque Tulancingo | refugio@huellitas.mx |
| Administrador | Daniela Cruz | admin@huellitas.mx |

### Microcopy

| Situación | Texto |
| --- | --- |
| Botón de la ficha (adoptante) | Quiero adoptar a Luna |
| Botón de la ficha (visitante) | Entra para adoptar a Luna |
| Sello al deslizar a la derecha | ¡ME LATE! |
| Sello al deslizar a la izquierda | PASO |
| Baraja vacía | Ya viste todas las cartas de hoy. Mañana se canta una nueva. |
| Solicitud enviada | ¡Lotería! Tu solicitud va en camino. |
| Sin resultados | Ninguna carta coincide. Prueba quitando algún filtro. |
| Error de acceso | El correo o la contraseña no coinciden. Revísalos e inténtalo otra vez. |
| Acceso denegado | Esta carta no es para ti. Esta sección es solo para refugios. |
| Refugio en verificación | Tu refugio está en verificación. Te avisaremos en cuanto puedas publicar. |
| Error de conexión | Se nos cayeron las cartas. Revisa tu conexión e inténtalo otra vez. |
| Reporte enviado | Gracias por avisar. Tres rescatistas cercanos ya lo vieron. |
| Solicitud no aprobada | Esta vez no se pudo, pero hay otras cartas esperándote. |
| Confirmar suspensión | ¿Suspender la cuenta de Mario López? No podrá entrar hasta que la reactives. |
| Meta cumplida | ¡Llenamos el costal! Ya hay 100 kg de croquetas para este mes. |

> Proyecto académico: los animales, refugios, cifras, cuentas y contactos son ilustrativos.

---

## Prompts por pantalla

Para generar la aplicación pantalla por pantalla (por ejemplo, en Google Stitch), usa este DESIGN.md como sistema de diseño y pide cada pantalla con su prompt. Los marcados como **Web** se generan en modo Web (escritorio) y los marcados como **Celular** en modo App.

### Acceso (Visitante)

**P1 · Portada pública · Web**

```
Página de inicio pública de Huellitas, aplicación web de adopción de perros y gatos en Tulancingo, para un visitante sin sesión. Barra superior color papel con borde inferior añil: logo de carta de lotería con la "H", enlaces Inicio, Adoptar, Ayudar, Historias y, a la derecha, botón secundario "Entrar" y botón rosa "Crear cuenta". Encabezado grande: a la izquierda el título en Alfa Slab One "Cada peludo es una carta. Encuentra la tuya." con botón cempasúchil "Ver la baraja"; a la derecha, cartas de lotería de Luna, Nube y Max repartidas en abanico con borde añil y sombra dura. Debajo: "Cómo funciona" en tres pasos, fila de cartas "Los que más han esperado", banda cempasúchil de necesidades del mes y pie de página añil.
```

**P2 · Entrar · Web y celular**

```
Pantalla de acceso de Huellitas. En computadora: a la izquierda una ilustración grande de la baraja de lotería repartida sobre fondo con trama de puntos; a la derecha una tarjeta blanca con borde añil de 3 px y sombra dura con el título "Entra a Huellitas", campos Correo y Contraseña, enlace "¿Olvidaste tu contraseña?", botón rosa "Entrar" con sombra cempasúchil, separador "o", botón secundario "Continuar con Google" y abajo los enlaces "¿No tienes cuenta? Crea una" y "¿Eres un refugio? Registra tu refugio". Haz también la versión de celular con la baraja pequeña arriba y la tarjeta a pantalla completa.
```

**P3 · Registrar mi refugio · Web**

```
Formulario "Registra tu refugio" de Huellitas: nombre del refugio, responsable, teléfono, dirección con mapa y pin rosa, horario y zona punteada para subir el documento que lo acredita. Botón rosa "Enviar para verificación". Nota en cempasúchil claro: "Un administrador revisará tus datos antes de que puedas publicar".
```

### Adoptante

**P4 · Perfil de hogar · Celular**

```
Paso 1 de 5 del perfil de hogar. Arriba, cinco frijoles como indicador de progreso (el primero rebota). Pregunta en Alfa Slab One: "¿Dónde vives?". Tres tarjetas seleccionables ilustradas en estilo serigrafía: Casa con patio, Casa sin patio y Departamento; la seleccionada tiene borde añil grueso, sombra dura y un frijol. Botón rosa "Continuar" fijo abajo.
```

**P5 · Inicio · La baraja · Web y celular**

```
Inicio del adoptante en Huellitas, versión web. Barra superior con logo, enlaces Inicio (activo con un frijol), Adoptar, Ayudar, botón cempasúchil "Reportar", campana y avatar. Saludo "¡Buenas tardes, Arturo!". A la izquierda, la carta de lotería de Luna (número 1, perrita caramelo con luna creciente, banda inferior "LUNA") con insignia "92 % compatible" y tres botones circulares: Paso (añil), Cantar (añil con bocina cempasúchil) y Me late (rosa). A la derecha, su resumen: edad, tamaño, refugio, verso en itálica y enlace "Ver su carta completa". Abajo, "Carta del día" y carrusel "Ya tienen casa". Haz también la versión de celular con la barra inferior añil: Inicio, Adoptar, Reportar (botón central circular cempasúchil), Ayudar y Yo.
```

**P6 · Deslizando · Celular**

```
Inicio en celular mientras la carta de Luna se arrastra a la derecha, girada 10°, con un sello de goma rosa "¡ME LATE!" girado sobre la carta y un frijol cayendo hacia la esquina.
```

**P7 · Adoptar · La tabla · Web**

```
Sección Adoptar. Título "La tabla" y subtítulo "42 peludos buscan casa". Buscador, chips de filtro (Todos activo en añil, Perros, Gatos, Cachorros, Abuelitos) y botón "Filtros 2" que abre un panel lateral con casillas de especie, edad, tamaño y convivencia. Cuadrícula de 4 columnas de cartas de lotería con número, ilustración, nombre en banda inferior, edad e insignia de compatibilidad. Interruptor Lista / Mapa arriba a la derecha.
```

**P8 · Ficha de Luna · Web**

```
Ficha de Luna en web. Columna izquierda: carta grande con leve giro y galería de fotos con marco de foto instantánea. Columna derecha: nombre "Luna" en Alfa Slab One, verso en itálica "«Sale de noche y de día, pasea en tu compañía.»" con botón Cantar, chips (2 años, Hembra, Mediana, Esterilizada), tarjeta "92 % compatible" con tres razones con palomita, barras de personalidad, checklist de salud, dato grande "63 días esperando", tarjeta del refugio con minimapa y botón rosa "Quiero adoptar a Luna".
```

**P9 · Solicitud y ¡Lotería! · Celular**

```
Dos pantallas. 1) Paso 4 de 5 de la solicitud: barra de cinco frijoles (tres llenos), título "Tu compromiso", casillas con palomita y un campo de texto "¿Por qué quieres adoptar a Luna?", botón "Continuar". 2) Confirmación: papel picado rosa, añil y cempasúchil arriba, confeti de huellas y frijoles, la carta de Luna al centro, título "¡Lotería!" y texto "Tu solicitud va en camino. El refugio te escribirá en menos de 48 horas".
```

**P10 · Mis solicitudes · Web**

```
Mis solicitudes del adoptante. Tarjeta con minicarta de Luna e insignia "En revisión". Línea de tiempo vertical: Enviada (verde con palomita), En revisión (cempasúchil, actual), Entrevista, Visita al hogar y ¡Adoptado! (punteadas). A la derecha: próxima cita con botón "Agregar al calendario", documentos con su estado y chat con el refugio.
```

**P11 · Ayudar · Web**

```
Sección Ayudar, título "Echa la mano". Tarjetas de necesidades del mes con barra de meta rosa: Croquetas para perro 64 de 100 kg, Arena para gato 18 de 40 kg, Vacunas 12 de 30. Bloque de donación rápida con montos $50, $100, $200 y Otro. Tarjetas de Apadrinar, Voluntariado (próximo evento con fecha) y Hogar temporal. Botones cempasúchil.
```

**P12 · Reportar · Celular**

```
Flujo Reportar, paso 1 de 4: título "¿Qué pasa?" y cuatro tarjetas grandes ilustradas: En la calle, Perdido, Encontrado y En peligro o maltrato. Después, paso 3: mapa con pin rosa arrastrable, dirección detectada y botón "Confirmar ubicación".
```

**P13 · Yo · Mi tabla · Celular**

```
Sección Yo. Avatar en sello festoneado, nombre y "Ayudante desde octubre de 2026". Tabla de lotería 4 × 4 de minicartas de buenas acciones (La Croqueta, El Paseo, El Padrino, La Cobija…) con frijoles café en las completadas. Fila de insignias tipo sello de correo: Chorro, Cuatro esquinas, Centrito, ¡Llena! (las no ganadas en contorno punteado). Accesos a Mis solicitudes, Mi peludo y Ajustes.
```

### Refugio

**P14 · Panel del refugio · Resumen · Web**

```
Panel web del rol Refugio en Huellitas. Menú lateral añil de 264 px con foto y nombre "Refugio San Roque Tulancingo", etiqueta cempasúchil "Refugio" y opciones con ícono: Resumen (activa en pastilla cempasúchil con frijol), Peludos, Nueva carta, Solicitudes (contador rosa 7), Necesidades, Eventos, Reportes, Mensajes y Mi refugio. Contenido: título "Resumen", cuatro datos grandes en tarjetas con sombra dura (Peludos en adopción 12, Solicitudes nuevas 7, Adopciones este mes 3, Promedio de espera 63 días), gráfica de barras rosas de adopciones por mes, lista "Los que más han esperado" con minicartas y alerta "2 solicitudes llevan más de 48 horas sin respuesta".
```

**P15 · Peludos y generador de cartas · Web**

```
Dos pantallas del panel del refugio. 1) "Peludos": tabla con encabezado añil claro y filas alternas papel y blanco; columnas minicarta, nombre, especie, edad, días esperando, solicitudes, estado (insignias Publicada, Borrador, Oculta, Adoptada) y acciones; buscador, filtros en chips, botón cempasúchil "Nueva carta" y paginación. 2) "Nueva carta": formulario a la izquierda (nombre, especie, sexo, edad, tamaño, salud con casillas, historia, fotos, objeto del verso, fondo, sugerencias de verso) y a la derecha la vista previa de la carta de lotería con número automático 10, frente y reverso, y botón rosa "Publicar carta".
```

**P16 · Tablero de solicitudes · Web**

```
Panel del refugio, sección Solicitudes. Tablero con cinco columnas (Nuevas 7, En revisión 4, Entrevista 2, Visita 1, Aprobadas 3). Cada tarjeta: minicarta del peludo, nombre del adoptante, insignia de compatibilidad y "hace 2 días". A la derecha, panel de detalle de la solicitud de Arturo para Luna: respuestas por sección, documentos, notas internas y botones "Avanzar a Entrevista" (rosa), "Agendar cita" y "No aprobar" (estilo de peligro).
```

### Administrador

**P17 · Verificación de refugios · Web**

```
Panel web del rol Administrador en Huellitas. Menú lateral añil hondo con la etiqueta "Administración" y opciones Resumen, Refugios (activa), Usuarios y roles, Moderación, Catálogos y Bitácora. Título "Refugios" con pestañas En verificación 2, Verificados 6 y Rechazados. Tabla con nombre del refugio, responsable, fecha de solicitud, documentos y estado. Panel de detalle con el documento, el mapa y los botones "Verificar refugio" (rosa) y "Rechazar" (peligro, con motivo).
```

**P18 · Usuarios y roles · Web**

```
Sección "Usuarios y roles" del administrador. Buscador, filtros por rol en chips (Todos, Adoptantes, Refugios, Administradores) y tabla con avatar, nombre, correo, rol con etiqueta de color, fecha de registro, estado (Activa en verde, Suspendida en rojo) y menú de acciones. Diálogo de confirmación abierto: "¿Suspender la cuenta de Mario López? No podrá entrar hasta que la reactives." con campo de motivo y botones Cancelar y Suspender.
```

**P19 · Bitácora · Web**

```
Sección "Bitácora" del administrador: tabla de solo lectura con fecha y hora, persona, rol, acción, elemento afectado y motivo, con filtros por rol y por fecha y botón secundario "Exportar".
```

### Estados especiales

**P20 · Acceso denegado · Web**

```
Pantalla "Esta carta no es para ti" de Huellitas: carta de lotería boca abajo con un candado cempasúchil sobre el reverso añil, texto "Esta sección es solo para refugios" y botón rosa "Volver a mi inicio".
```

**P21 · Panel del refugio · Celular**

```
Versión de celular del Resumen del panel del refugio: barra superior con botón de menú, nombre del refugio y etiqueta "Refugio"; datos grandes en cuadrícula de 2 × 2; la lista de solicitudes nuevas como tarjetas; el menú lateral abierto como cajón añil.
```

**P22 · Noche de lotería · Celular**

```
Versión en modo oscuro del inicio del adoptante: fondo añil noche con estrellitas cempasúchil, textos color luz de vela, las cartas conservan su frente blanco y el cempasúchil es el color de acción.
```

---

## Fases del proyecto

| Fase | Qué incluye | Resultado |
| --- | --- | --- |
| **1 · MVP** | Inicio público y acceso, perfil de hogar, La baraja, La tabla, ficha, solicitud y seguimiento | Ya se puede adoptar de principio a fin |
| **2 · Refugios y administración** | Panel del refugio, generador de cartas, tablero de solicitudes, verificación de refugios, usuarios y roles | Cada rol trabaja en su propio espacio |
| **3 · Comunidad** | Ayudar, Reportar con mapa, Historias, Mi tabla e insignias, moderación | La comunidad ayuda aunque no adopte |
| **4 · Después de adoptar** | Mi peludo, padrinazgo mensual, chat completo, modo Noche de lotería | Acompañamiento a largo plazo |

---

## Checklist de calidad

- [ ] Cada peludo aparece como carta con número, nombre, verso e ilustración.
- [ ] Hay pantalla de inicio pública y pantalla de acceso.
- [ ] Los cuatro roles tienen su propia navegación y su propia pantalla de inicio.
- [ ] Las interfaces del refugio y del administrador muestran tablas, formularios y botones propios.
- [ ] La ficha del peludo cambia sus acciones según el rol.
- [ ] Solo tres tintas, papel, frijol y colores de estado. Sin degradados ni sombras difuminadas.
- [ ] Un solo botón rosa por pantalla.
- [ ] Contornos añil y sombras duras en cartas, botones y tarjetas.
- [ ] Cada pantalla clave existe en versión de computadora y de celular.
- [ ] Todos los textos en español de México, sin faltas de ortografía.
- [ ] Contraste AA y zonas táctiles de 48 px.
- [ ] Estados con ícono y texto, no solo color.
- [ ] Celebraciones solo en buenas noticias.
