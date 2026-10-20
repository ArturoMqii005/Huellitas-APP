/* =====================================================================
   Huellitas · navegación del prototipo
   Conecta las pantallas exportadas de Google Stitch, simula el inicio de
   sesión por rol y demuestra las restricciones de acceso.
   Es solo una demostración: no hay servidor ni base de datos.
   ===================================================================== */
(function () {
  "use strict";

  const pagina = document.currentScript.dataset.pagina;

  /* ---------- Sesión simulada ---------- */
  const INICIO_POR_ROL = {
    adoptante: "adoptante-inicio.html",
    refugio: "refugio-resumen.html",
    administrador: "admin-refugios.html",
  };
  const leerRol = () => {
    try { return localStorage.getItem("huellitas-rol"); } catch (e) { return null; }
  };
  const guardarRol = (rol) => {
    try { rol ? localStorage.setItem("huellitas-rol", rol) : localStorage.removeItem("huellitas-rol"); } catch (e) { /* sin almacenamiento */ }
  };
  const ir = (url) => { window.location.href = url; };

  /* ---------- Restricción de acceso por rol ----------
     Si alguien con sesión de otro rol abre un panel que no le corresponde,
     ve la pantalla "Esta carta no es para ti". */
  const PERMISOS = {
    "refugio-resumen": ["refugio"],
    "refugio-solicitudes": ["refugio"],
    "refugio-solicitud-detalle": ["refugio"],
    "admin-refugios": ["administrador"],
    "admin-usuarios": ["administrador"],
  };
  const rolActual = leerRol();
  if (PERMISOS[pagina] && rolActual && !PERMISOS[pagina].includes(rolActual)) {
    ir("acceso-denegado.html");
    return;
  }

  /* ---------- Utilidades ---------- */
  // Texto visible de un elemento sin los nombres de los íconos de Material Symbols.
  const textoDe = (el) => {
    const copia = el.cloneNode(true);
    copia.querySelectorAll(".material-symbols-outlined, .material-symbols-rounded, .material-icons").forEach((i) => i.remove());
    return copia.textContent.replace(/\s+/g, " ").trim();
  };
  const iconoDe = (el) => {
    const i = el.querySelector(".material-symbols-outlined, .material-symbols-rounded, .material-icons");
    return i ? i.textContent.trim() : "";
  };
  const clicables = () => Array.from(document.querySelectorAll("a, button"));

  // Asigna una acción a los enlaces o botones cuyo texto (o ícono) coincida.
  function enlazar(regla) {
    clicables().forEach((el) => {
      const t = textoDe(el);
      const coincide =
        (regla.texto && (regla.exacto ? t === regla.texto : t.startsWith(regla.texto))) ||
        (regla.icono && iconoDe(el) === regla.icono && (!regla.sinTexto || t === ""));
      if (!coincide || el.dataset.huConectado) return;
      el.dataset.huConectado = "1";
      el.style.cursor = "pointer";
      if (el.tagName === "A" && typeof regla.accion === "string") el.setAttribute("href", regla.accion);
      el.addEventListener("click", (ev) => {
        ev.preventDefault();
        typeof regla.accion === "function" ? regla.accion(ev, el) : ir(regla.accion);
      });
    });
  }

  // Hace clicable la tarjeta que contiene un texto (por ejemplo, una carta de lotería).
  function tarjeta(texto, destino, selector) {
    const hojas = Array.from(document.querySelectorAll("body *")).filter(
      (n) => n.children.length === 0 && n.textContent.trim() === texto
    );
    hojas.forEach((h) => {
      const t = h.closest(selector || "[class*='rounded']");
      if (!t || t.dataset.huConectado) return;
      t.dataset.huConectado = "1";
      t.style.cursor = "pointer";
      t.addEventListener("click", () => ir(destino));
    });
  }

  // Aviso flotante con el estilo de Huellitas.
  function aviso(mensaje) {
    let caja = document.getElementById("hu-aviso");
    if (!caja) {
      caja = document.createElement("div");
      caja.id = "hu-aviso";
      caja.setAttribute("role", "status");
      caja.style.cssText =
        "position:fixed;left:50%;bottom:28px;transform:translateX(-50%);z-index:9999;max-width:min(92vw,520px);" +
        "background:#141C4D;color:#FFF2CF;border:2px solid #FFB30F;border-radius:12px;padding:12px 18px;" +
        "font:600 15px/1.4 Archivo,Arial,sans-serif;box-shadow:4px 4px 0 #FFB30F;transition:opacity .25s;";
      document.body.appendChild(caja);
    }
    caja.textContent = mensaje;
    caja.style.opacity = "1";
    clearTimeout(caja._t);
    caja._t = setTimeout(() => { caja.style.opacity = "0"; }, 3200);
  }
  const demo = (mensaje) => () => aviso(mensaje);
  const fueraDelPrototipo = () => aviso("Esta pantalla no forma parte del prototipo. Está descrita en el DESIGN.md.");

  /* ---------- Navegación común ---------- */
  const NAV_VISITANTE = [
    { texto: "HUELLITAS", accion: "index.html" },
    { texto: "Inicio", exacto: true, accion: "index.html" },
    { texto: "Adoptar", exacto: true, accion: "adoptante-tabla.html" },
    { texto: "Crear cuenta", accion: "bienvenida.html" },
  ];
  const NAV_MOVIL = [
    { texto: "La Baraja", accion: "adoptante-baraja.html" },
    { texto: "La Tabla", accion: "adoptante-tabla.html" },
  ];
  const MENU_REFUGIO = [
    { texto: "Resumen", exacto: true, accion: "refugio-resumen.html" },
    { texto: "Solicitudes", accion: "refugio-solicitudes.html" },
  ];
  const MENU_ADMIN = [
    { texto: "Refugios", exacto: true, accion: "admin-refugios.html" },
    { texto: "Usuarios y roles", accion: "admin-usuarios.html" },
  ];
  const salir = () => { guardarRol(null); ir("index.html"); };

  /* ---------- Reglas por pantalla ---------- */
  const REGLAS = {
    "index": [
      ...NAV_VISITANTE,
      { texto: "Crea una ahora", accion: "bienvenida.html" },
      { texto: "Continuar con Google", accion: () => { guardarRol("adoptante"); ir(INICIO_POR_ROL.adoptante); } },
    ],
    "bienvenida": [
      { texto: "Crear cuenta", accion: () => { guardarRol("adoptante"); ir("adoptante-baraja.html"); } },
      { texto: "Ya tengo cuenta", accion: "index.html" },
    ],
    "adoptante-inicio": [
      { texto: "Inicio", exacto: true, accion: "adoptante-inicio.html" },
      { texto: "Adoptar", exacto: true, accion: "adoptante-tabla.html" },
      { texto: "Quiero adoptar a Luna", accion: "adoptante-solicitud.html" },
      { texto: "Ver su carta completa", accion: "adoptante-ficha-luna.html" },
      { texto: "Ver toda la baraja", accion: "adoptante-tabla.html" },
      { texto: "Revisar Carta", accion: "adoptante-ficha-luna.html" },
      { texto: "Reportar", accion: fueraDelPrototipo },
    ],
    "adoptante-baraja": [
      ...NAV_MOVIL,
      { texto: "Ver carta", accion: "adoptante-ficha-luna.html" },
      { icono: "favorite", sinTexto: true, accion: demo("¡ME LATE! Luna se guardó en tu tabla con un frijol.") },
    ],
    "adoptante-tabla": [...NAV_MOVIL],
    "adoptante-ficha-luna": [
      { icono: "arrow_back", accion: () => (history.length > 1 ? history.back() : ir("adoptante-tabla.html")) },
      { texto: "Quiero adoptar a Luna", accion: "adoptante-solicitud.html" },
      { texto: "¡Cantar!", accion: () => {
          if ("speechSynthesis" in window) {
            const voz = new SpeechSynthesisUtterance("Sale de noche y de día, pasea en tu compañía.");
            voz.lang = "es-MX";
            speechSynthesis.cancel();
            speechSynthesis.speak(voz);
          }
        } },
    ],
    "adoptante-solicitud": [
      { icono: "arrow_back", accion: "adoptante-ficha-luna.html" },
      { texto: "Continuar", accion: demo("Paso 5 de 5: elige la fecha de tu cita con Luna.") },
    ],
    "refugio-resumen": [
      ...MENU_REFUGIO,
      { texto: "Revisar solicitudes pendientes", accion: "refugio-solicitudes.html" },
      { texto: "Ver 2 solicitudes", accion: "refugio-solicitudes.html" },
      { icono: "logout", accion: salir },
    ],
    "refugio-solicitudes": [...MENU_REFUGIO],
    "refugio-solicitud-detalle": [
      ...MENU_REFUGIO,
      { icono: "close", sinTexto: true, accion: "refugio-solicitudes.html" },
      { texto: "Avanzar a Entrevista", accion: demo("La solicitud de Arturo pasó a «Entrevista». Ya puedes ver su teléfono.") },
      { texto: "No aprobar", accion: demo("Para no aprobar una solicitud hay que escribir un motivo.") },
    ],
    "admin-refugios": [
      ...MENU_ADMIN,
      { texto: "Verificar refugio", accion: demo("Patitas de Santiago quedó verificado y ya puede publicar.") },
      { texto: "Rechazar solicitud", accion: demo("Para rechazar un refugio hay que escribir un motivo.") },
    ],
    "admin-usuarios": [
      ...MENU_ADMIN,
      { texto: "Cancelar", exacto: true, accion: (ev, el) => {
          const capa = el.closest(".fixed, [class*='fixed']");
          if (capa) capa.style.display = "none";
        } },
      { texto: "Suspender cuenta", accion: (ev, el) => {
          const capa = el.closest(".fixed, [class*='fixed']");
          if (capa) capa.style.display = "none";
          aviso("La cuenta de Mario López quedó suspendida. La acción se guardó en la bitácora.");
        } },
    ],
    "acceso-denegado": [
      ...NAV_VISITANTE,
      { texto: "Volver a mi inicio", accion: () => ir(INICIO_POR_ROL[leerRol()] || "index.html") },
      { texto: "Ver peludos en adopción", accion: "adoptante-tabla.html" },
      { texto: "Inicia sesión aquí", accion: salir },
    ],
  };

  (REGLAS[pagina] || []).forEach(enlazar);

  /* ---------- Inicio de sesión con validación ----------
     Validación del lado del navegador para la demostración. En la aplicación
     real, la contraseña se revisaría en el servidor y se guardaría cifrada. */
  if (pagina === "index") iniciarSesion();

  function iniciarSesion() {
    const CLAVE_DEMO = "Huellitas2026";
    const CUENTAS = {
      "adoptante@huellitas.mx": "adoptante",
      "refugio@huellitas.mx": "refugio",
      "admin@huellitas.mx": "administrador",
    };
    const NOMBRE_ROL = { adoptante: "Adoptante", refugio: "Refugio", administrador: "Administrador" };
    const MAX_INTENTOS = 3;
    const ESPERA = 30;
    const form = document.getElementById("loginForm");
    const correo = document.getElementById("emailInput");
    const clave = document.getElementById("passwordInput");
    const boton = document.getElementById("submitBtn");
    if (!form || !correo || !clave || !boton) return;
    form.noValidate = true;
    let intentos = 0;

    const contenedor = (input) => input.closest(".relative") || input.parentElement;
    function marcar(input, mensaje) {
      const id = input.id + "-error";
      let p = document.getElementById(id);
      if (!p) {
        p = document.createElement("p");
        p.id = id;
        p.setAttribute("role", "alert");
        p.style.cssText = "margin:6px 0 0;color:#B42318;font:600 13px/1.35 Archivo,Arial,sans-serif;display:flex;gap:6px;align-items:flex-start;";
        contenedor(input).insertAdjacentElement("afterend", p);
      }
      p.innerHTML = '<span class="material-symbols-outlined" style="font-size:16px;line-height:1.2">error</span><span></span>';
      p.lastChild.textContent = mensaje;
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", id);
      input.style.boxShadow = "inset 0 0 0 2px #B42318";
      input.style.background = "#FDE8E6";
    }
    function limpiar(input) {
      const p = document.getElementById(input.id + "-error");
      if (p) p.remove();
      input.removeAttribute("aria-invalid");
      input.style.boxShadow = "inset 0 0 0 2px #141C4D";
      input.style.background = "";
    }
    function mensajeGeneral(texto) {
      let caja = document.getElementById("hu-error-acceso");
      if (!caja) {
        caja = document.createElement("div");
        caja.id = "hu-error-acceso";
        caja.setAttribute("role", "alert");
        caja.style.cssText = "background:#FDE8E6;color:#B42318;border:2px solid #B42318;border-radius:8px;padding:10px 12px;font:600 14px/1.4 Archivo,Arial,sans-serif;";
        boton.insertAdjacentElement("beforebegin", caja);
      }
      caja.textContent = texto;
    }
    const quitarGeneral = () => { const c = document.getElementById("hu-error-acceso"); if (c) c.remove(); };

    [correo, clave].forEach((i) => i.addEventListener("input", () => { limpiar(i); quitarGeneral(); }));

    function bloquear() {
      let quedan = ESPERA;
      boton.disabled = true;
      boton.style.opacity = ".55";
      boton.style.cursor = "not-allowed";
      const tick = () => {
        mensajeGeneral(`Demasiados intentos. Por seguridad espera ${quedan} segundos para volver a intentarlo.`);
        if (quedan-- <= 0) {
          clearInterval(reloj);
          boton.disabled = false;
          boton.style.opacity = "";
          boton.style.cursor = "pointer";
          intentos = 0;
          quitarGeneral();
        }
      };
      tick();
      const reloj = setInterval(tick, 1000);
    }

    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      if (boton.disabled) return;
      quitarGeneral();
      const c = correo.value.trim().toLowerCase();
      const k = clave.value;
      let valido = true;
      if (!c) { marcar(correo, "Escribe tu correo electrónico."); valido = false; }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c)) { marcar(correo, "Revisa el correo: debe tener la forma nombre@dominio.com."); valido = false; }
      else limpiar(correo);
      if (!k) { marcar(clave, "Escribe tu contraseña."); valido = false; }
      else if (k.length < 8) { marcar(clave, "La contraseña debe tener al menos 8 caracteres."); valido = false; }
      else limpiar(clave);
      if (!valido) { (correo.getAttribute("aria-invalid") ? correo : clave).focus(); return; }

      const rol = CUENTAS[c];
      if (!rol || k !== CLAVE_DEMO) {
        intentos++;
        clave.value = "";
        if (intentos >= MAX_INTENTOS) { bloquear(); return; }
        mensajeGeneral(`El correo o la contraseña no coinciden. Revísalos e inténtalo otra vez. (Intento ${intentos} de ${MAX_INTENTOS})`);
        clave.focus();
        return;
      }
      guardarRol(rol);
      aviso(`¡Bienvenido! Entrando como ${NOMBRE_ROL[rol]}…`);
      setTimeout(() => ir(INICIO_POR_ROL[rol]), 700);
    });
  }

  /* Cartas de lotería que abren la ficha de Luna */
  if (["adoptante-tabla", "adoptante-baraja", "adoptante-inicio"].includes(pagina)) {
    tarjeta("LUNA", "adoptante-ficha-luna.html");
  }
  /* Tarjeta de Arturo en el tablero del refugio */
  if (pagina === "refugio-solicitudes") {
    tarjeta("Arturo Martínez", "refugio-solicitud-detalle.html", ".rounded-xl");
  }

  /* Enlaces que todavía no tienen pantalla */
  document.querySelectorAll("a[href='#']").forEach((a) => {
    if (a.dataset.huConectado) return;
    a.addEventListener("click", (ev) => { ev.preventDefault(); fueraDelPrototipo(); });
  });

  /* Botón para volver al mapa de pantallas */
  const estilo = document.createElement("style");
  estilo.textContent =
    "#hu-mapa{position:fixed;left:12px;bottom:16px;z-index:9998;background:#FFB30F;color:#1F2A6B;border:2px solid #1F2A6B;" +
    "border-radius:999px;padding:4px 12px;font:700 12px/1.4 Archivo,Arial,sans-serif;text-decoration:none;box-shadow:2px 2px 0 #1F2A6B;opacity:.92}" +
    "#hu-mapa:hover{opacity:1}@media (max-width:767px){#hu-mapa{bottom:100px}}" +
    "html.hu-captura #hu-mapa{display:none}";
  document.head.appendChild(estilo);
  const mapa = document.createElement("a");
  mapa.id = "hu-mapa";
  mapa.href = "pantallas.html";
  mapa.textContent = "☰ Pantallas";
  mapa.title = "Ver todas las pantallas del prototipo";
  document.body.appendChild(mapa);
})();
