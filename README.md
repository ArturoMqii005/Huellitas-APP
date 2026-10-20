# Huellitas · Aplicación web de adopción

Propuesta de diseño de una aplicación web responsiva para adoptar perros y gatos rescatados en Tulancingo de Bravo, Hidalgo. Es la continuación del sitio web [Huellitas Tulancingo](https://arturomqii005.github.io/Huellitas-WEB/) y conserva su identidad de **lotería mexicana**: cada peludo es una carta con número, nombre y un verso.

- **Autor:** Luis Arturo Jiménez Morales
- **Institución:** Universidad Politécnica de Tulancingo
- **Herramientas de IA:** Google Stitch (interfaces) y Claude (correción de paginas)
- **Prototipo en Google Stitch:** https://stitch.withgoogle.com/projects/14979378337751651742
- **Sitio web del proyecto:** https://arturomqii005.github.io/Huellitas-WEB/

> Proyecto académico. Los animales, refugios, cifras, cuentas y contactos son ilustrativos.

## Contenido del repositorio

| Archivo | Qué contiene |
| --- | --- |
| [`DESIGN.md`](DESIGN.md) | Especificación completa en formato DESIGN.md: objetivo, roles y permisos, colores, tipografía, componentes, navegación, módulos, lineamientos UX/UI, reglas del sistema y prompts por pantalla. |
| [`EVIDENCIAS.md`](EVIDENCIAS.md) | Registro del uso de IA: herramientas, prompts principales y modificaciones hechas para mejorar la propuesta inicial. |
| `evidencias/` | Capturas del proceso en Google Stitch y GitHub. |
| [`prototipo/`](prototipo/) | Las 13 pantallas exportadas de Stitch, conectadas entre sí, con inicio de sesión simulado por rol y restricción de acceso. Se abre con Live Server desde `prototipo/index.html`. |
| `README.md` | Esta descripción. |

## El problema

En Tulancingo, los perros y gatos rescatados se anuncian en grupos de Facebook, donde cada aviso se pierde en pocas horas. Quien quiere adoptar no sabe qué requisitos piden los refugios, quien quiere ayudar no sabe qué hace falta y los refugios reciben mensajes sueltos sin una forma ordenada de revisar solicitudes.

## Objetivo

Diseñar una aplicación web responsiva que centralice la adopción responsable de perros y gatos rescatados en Tulancingo, conectando a adoptantes, ayudantes y refugios en un mismo sistema con funciones y permisos definidos para cada rol.

## Roles

| Rol | Qué hace | Su interfaz |
| --- | --- | --- |
| **Visitante** | Explora la baraja, las fichas y las historias sin cuenta | Portada pública con barra superior y botones Entrar y Crear cuenta |
| **Adoptante** | Adopta, da seguimiento a sus solicitudes, dona, apadrina y reporta animales | Barra superior en computadora y barra inferior en celular |
| **Refugio** | Publica peludos con el generador de cartas, revisa solicitudes y pide lo que necesita | Panel con menú lateral añil |
| **Administrador** | Verifica refugios, gestiona usuarios y roles, modera contenido y consulta la bitácora | Panel con menú lateral añil hondo |

La matriz completa de permisos y restricciones está en la sección **Roles y permisos** del [DESIGN.md](DESIGN.md).

## Módulos

1. Inicio público y acceso
2. Perfil de hogar
3. Inicio · La baraja
4. Adoptar · La tabla
5. La carta · Ficha del peludo
6. Solicitud de adopción
7. Mis solicitudes
8. Ayudar · Echa la mano
9. Reportar
10. Historias · Ya tienen casa
11. Yo · Mi tabla
12. Mi peludo (después de adoptar)
13. Avisos y ajustes
14. Panel del refugio
15. Administración

## Paleta y tipografía

| Tinta | Código | Uso |
| --- | --- | --- |
| Añil | `#1F2A6B` | Texto, contornos, menús y reverso de las cartas |
| Rosa mexicano | `#D6006F` | Botón principal y acciones |
| Cempasúchil | `#FFB30F` | Botón Reportar, compatibilidad y opción activa |
| Papel | `#FFFBF2` | Fondo general |

Tipografías: **Alfa Slab One** para títulos y nombres de las cartas, y **Archivo** para el texto.

## Cómo usar el DESIGN.md

1. En [Google Stitch](https://stitch.withgoogle.com), sube `DESIGN.md` en **Upload a DESIGN.md file**.
2. En **Add website**, agrega el sitio del proyecto como referencia de estilo.
3. Genera cada pantalla con los prompts de la sección **Prompts por pantalla**, en modo Web o App según se indica.

El archivo se validó con el verificador oficial del formato:

```
npx @google/design.md lint DESIGN.md
```

Resultado: 0 errores y 0 advertencias.
