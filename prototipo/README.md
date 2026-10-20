# Huellitas · Prototipo navegable

Pantallas de la aplicación web **Huellitas** generadas con Google Stitch a partir del archivo `DESIGN.md` y conectadas entre sí para recorrerlas como una aplicación.

- **Autor:** Luis Arturo Jiménez Morales · Universidad Politécnica de Tulancingo
- **Prototipo original en Stitch:** https://stitch.withgoogle.com/projects/14979378337751651742

> Es un prototipo de diseño: no hay servidor ni base de datos. El inicio de sesión, los botones de aprobar o suspender y los formularios solo muestran un aviso de demostración.

## Cómo abrirlo

1. Abre esta carpeta en Visual Studio Code (**Archivo → Abrir carpeta**).
2. Da clic derecho en `index.html` y elige **Open with Live Server**.
3. Necesitas **internet**: las pantallas cargan Tailwind CSS, las tipografías y los íconos desde internet.
4. Para ver las pantallas de celular como en un teléfono, en el navegador presiona **F12** y activa la vista de dispositivo (**Ctrl + Shift + M**).

En cualquier pantalla, el botón **☰ Pantallas** abre el mapa con todas las pantallas.

## Cuentas de demostración

En la pantalla **Entrar** escribe uno de estos correos con la contraseña **`Huellitas2026`**:

| Correo | Rol | Llega a |
| --- | --- | --- |
| `adoptante@huellitas.mx` | Adoptante | Inicio del adoptante |
| `refugio@huellitas.mx` | Refugio | Resumen del panel del refugio |
| `admin@huellitas.mx` | Administrador | Verificación de refugios |

**Validación del inicio de sesión:**

- Si dejas un campo vacío, el correo no tiene la forma `nombre@dominio.com` o la contraseña tiene menos de 8 caracteres, aparece el error debajo del campo.
- Si el correo o la contraseña no coinciden, aparece «El correo o la contraseña no coinciden» sin decir cuál de los dos está mal, para no dar pistas.
- Después de 3 intentos fallidos, el botón se bloquea 30 segundos.
- El ícono del ojo muestra u oculta la contraseña.

> Esta validación es del lado del navegador, solo para la demostración. En la aplicación real la contraseña se revisaría en el servidor y se guardaría cifrada.

**Restricción de acceso:** si con la sesión de un rol abres una pantalla de otro (por ejemplo, entras como adoptante y abres `refugio-resumen.html`), aparece **«Esta carta no es para ti»**. Para cambiar de rol, regresa a **Entrar**.

## Pantallas

| Archivo | Pantalla | Rol | Versión |
| --- | --- | --- | --- |
| `index.html` | Entrar | Visitante | Web |
| `bienvenida.html` | Bienvenida | Visitante | Celular |
| `adoptante-inicio.html` | Inicio | Adoptante | Web |
| `adoptante-baraja.html` | La baraja | Adoptante | Celular |
| `adoptante-tabla.html` | La tabla | Adoptante | Celular |
| `adoptante-ficha-luna.html` | Ficha de Luna | Adoptante | Celular |
| `adoptante-solicitud.html` | Solicitud y ¡Lotería! | Adoptante | Celular |
| `refugio-resumen.html` | Resumen | Refugio | Web |
| `refugio-solicitudes.html` | Tablero de solicitudes | Refugio | Web |
| `refugio-solicitud-detalle.html` | Detalle de solicitud | Refugio | Web |
| `admin-refugios.html` | Verificación de refugios | Administrador | Web |
| `admin-usuarios.html` | Usuarios y roles | Administrador | Web |
| `acceso-denegado.html` | Esta carta no es para ti | Restricción | Web |
| `pantallas.html` | Mapa de todas las pantallas | — | Web |

## Recorridos para la presentación

1. **Visitante → Adoptante:** Entrar con `adoptante@huellitas.mx` y `Huellitas2026` → Inicio → «Ver su carta completa» → «Quiero adoptar a Luna» → Solicitud y ¡Lotería!
2. **Refugio:** Entrar con `refugio@huellitas.mx` → Resumen → Solicitudes → tarjeta de Arturo Martínez → detalle → cerrar (✕).
3. **Administrador:** Entrar con `admin@huellitas.mx` → Refugios → «Verificar refugio» → Usuarios y roles → «Cancelar» o «Suspender cuenta».
4. **Restricción:** con la sesión de refugio, abre `admin-refugios.html` → «Esta carta no es para ti» → «Volver a mi inicio».

## Estructura

```
huellitas-app-prototipo/
├── index.html …                 13 pantallas exportadas de Stitch
├── pantallas.html               Mapa de pantallas por rol
├── js/prototipo.js              Navegación, validación del inicio de sesión y restricción por rol
├── img/                         Ilustraciones y fotos de las pantallas
├── capturas/                    Captura de cada pantalla
└── ../DESIGN.md                 Especificación del diseño (en la raíz del repositorio)
```

El código HTML de cada pantalla es el que exportó Google Stitch. Lo único que se agregó es `js/prototipo.js`, que conecta los enlaces, valida el inicio de sesión y aplica las restricciones de acceso por rol.
