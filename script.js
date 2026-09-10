document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       💗 MENÚ PARA CELULAR
       ===================================================== */

    const botonMenu = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-menu");

    if (botonMenu && menu) {

        botonMenu.addEventListener("click", () => {

            menu.classList.toggle("active");

            if (menu.classList.contains("active")) {
                botonMenu.textContent = "✕";
            } else {
                botonMenu.textContent = "☰";
            }

        });

    }
    /* =====================================================
   🫙 10 RAZONES PARA AMARTE
   ===================================================== */

const botonRazon = document.getElementById("botonRazon");
const botonCarta = document.getElementById("botonCarta");

const razonNumero = document.getElementById("razonNumero");
const razonTitulo = document.getElementById("razonTitulo");
const razonTexto = document.getElementById("razonTexto");

const razones = [

    {
        titulo: "🔥 Conocerte",
        texto: "Porque tú me haces sentir que ese instante en el que entraste a mi vida en la escuela cambió mi destino para siempre; conocerte fue descubrir que el mundo real era muchísimo más hermoso de lo que yo imaginaba y que la felicidad tenía tu nombre."
    },

    {
        titulo: "🦋 Enamorarte",
        texto: "Porque tú me haces sentir mariposas en el estómago cada segundo, y conquistarte todos los días con detalles, miradas en el salón y palabras bonitas es mi meta favorita, porque no hay nada más hermoso que ver cómo tus ojos se iluminan por mí."
    },

    {
        titulo: "🧠 Comprenderte",
        texto: "Porque tú me haces sentir una conexión tan pura y madura que adoro escucharte, entender tus berrinches tiernos, tus días buenos y malos, y saber que con una sola mirada en clase ya nos leemos la mente y somos el mejor equipo."
    },

    {
        titulo: "🥇 Valorarte",
        texto: "Porque tú me haces sentir el novio más afortunado del planeta y cuido tu corazón como el tesoro más sagrado; valoro cada una de tus sonrisas, tu gran inteligencia, tu paciencia conmigo y la maravillosa persona que eres por dentro y por fuera."
    },

    {
        titulo: "🛡️ Respetarte",
        texto: "Porque tú me haces sentir una admiración gigante y mi amor por ti es tan real que siempre cuidaré de ti, de tu espacio, de tus sueños y de tus metas en la escuela, dándote tu lugar como la única dueña de mi vida y mi reina absoluta."
    },

    {
        titulo: "🧸 Consentirte",
        texto: "Porque tú me haces sentir en el cielo absoluto cada vez que compartimos momentos de cariño, y me encanta regresarte todo ese amor con detalles, palabras bonitas y haciendo que te sientas especial."
    },

    {
        titulo: "🔗 Extrañarte",
        texto: "Porque tú me haces sentir una falta enorme en cuanto suena el timbre de salida; aunque vivamos separados, cada minuto lejos de ti se siente eterno y mi mente se la pasa recordando nuestros momentos juntos y las ganas de tenerte cerca."
    },

    {
        titulo: "🌌 Pensarte",
        texto: "Porque tú me haces sentir que eres mi centro y mi equilibrio; te pienso desde que me levanto por las mañanas, imagino nuestro futuro juntos, nuestra graduación de la mano, y eres el pensamiento más dulce que tengo antes de dormir."
    },

    {
        titulo: "💎 Serte fiel",
        texto: "Porque tú me haces sentir tan pleno, completo y feliz que en mi mundo y en mis ojos solo existes tú; mi lealtad es tuya para siempre porque ninguna otra mirada ni sonrisa se compara con la magia que tú me transmites, mi princesa."
    },

    {
        titulo: "🪐 Tenerte",
        texto: "Porque tú me haces sentir que lo tengo absolutamente todo en esta vida si te tengo a mi lado; eres mi niña, mi cielo, mi corazón, mi hogar y la razón más hermosa por la cual le echo ganas a todo cada día. Te amo con toda mi alma, mi bebé."
    }

];

let razonesMostradas = 0;


/* 🫙 Abrir una razón */

if (botonRazon) {

    botonRazon.addEventListener("click", () => {

        if (razonesMostradas >= razones.length) {
            return;
        }

        const razon = razones[razonesMostradas];

        razonNumero.textContent =
            `Razón #${razonesMostradas + 1}`;

        razonTitulo.textContent =
            razon.titulo;

        razonTexto.textContent =
            razon.texto;

        const contenedor =
            document.querySelector(".razon-contenedor");

        contenedor.classList.remove("razon-nueva");

        void contenedor.offsetWidth;

        contenedor.classList.add("razon-nueva");

        razonesMostradas++;

        if (razonesMostradas === razones.length) {

            botonRazon.textContent =
                "✨ Has descubierto las 10 razones";

            botonRazon.disabled = true;

            botonCarta.style.display =
                "inline-block";
        }

    });

}


/* 💌 Abrir la carta */

if (botonCarta) {

    botonCarta.addEventListener("click", () => {

        const carta =
            document.getElementById("cartaFinal");

        if (carta) {

            carta.classList.add("carta-abierta");

            carta.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

}


    /* =====================================================
       🌸 CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
       ===================================================== */

    const enlaces = document.querySelectorAll(".nav-menu a");

    enlaces.forEach((enlace) => {

        enlace.addEventListener("click", () => {

            if (menu) {
                menu.classList.remove("active");
            }

            if (botonMenu) {
                botonMenu.textContent = "☰";
            }

        });

    });


    /* =====================================================
       ✨ ANIMACIONES AL HACER SCROLL
       ===================================================== */

    const elementos = document.querySelectorAll(
    ".cualidad, .gusto, .video-card, .ella-contenido, .galeria-foto, .mensaje-contenido"
);

    const observador = new IntersectionObserver(

        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    elementos.forEach((elemento) => {

        elemento.classList.add("animar");

        observador.observe(elemento);

    });


    /* =====================================================
       🌷 EFECTO SUAVE EN LOS ENLACES
       ===================================================== */

    enlaces.forEach((enlace) => {

        enlace.addEventListener("click", (evento) => {

            const destino = enlace.getAttribute("href");

            if (
                destino &&
                destino.startsWith("#")
            ) {

                const seccion = document.querySelector(destino);

                if (seccion) {

                    evento.preventDefault();

                    seccion.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });
        /* =====================================================
       📸 GALERÍA
       ===================================================== */

    const galeria = document.querySelector("#galeria");

    if (galeria) {

        console.log("📸 Galería preparada correctamente.");

    }


    /* =====================================================
       🎥 ESPACIOS PARA VIDEOS
       ===================================================== */

    const tarjetasVideo = document.querySelectorAll(".video-card");

    tarjetasVideo.forEach((tarjeta) => {

        tarjeta.addEventListener("click", () => {

            console.log("🎥 Espacio de video seleccionado.");

        });

    });


    /* =====================================================
       🦭 ANIMACIÓN DE LAS FOCAS
       ===================================================== */

    const focas = document.querySelectorAll(
        ".foca-portada, .sello-foca, .galeria-foca"
    );

    focas.forEach((foca) => {

        foca.addEventListener("click", () => {

            foca.classList.add("foca-animada");

            setTimeout(() => {

                foca.classList.remove("foca-animada");

            }, 700);

        });

    });


    /* =====================================================
       🦭 MENSAJE EN CONSOLA
       ===================================================== */

    console.log(
        "🦭💗 Bienvenido al pequeño mundo de Dulary."
    );

    

/* =====================================================
   🎬 SELECCIONAR VIDEOS
   ===================================================== */


const selectoresVideo = document.querySelectorAll(".selector-video");

selectoresVideo.forEach((selector) => {

    selector.addEventListener("change", (evento) => {

        const archivo = evento.target.files[0];

        if (!archivo) return;

        if (!archivo.type.startsWith("video/")) {
            alert("Por favor selecciona un video.");
            return;
        }

        const espacio = selector.closest(".video-placeholder");

        const video = document.createElement("video");

        video.src = URL.createObjectURL(archivo);
        video.controls = true;
        video.preload = "metadata";

        espacio.appendChild(video);

        const contenido = espacio.querySelector(".contenido-video");

        if (contenido) {
            contenido.style.display = "none";
        }

    });

});


/* =====================================================
   💗 CARTAS DE LOS VIDEOS
   ===================================================== */

const botonesVideo = document.querySelectorAll(".boton-video-mensaje");

botonesVideo.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const videoInfo = boton.closest(".video-info");

        if (!videoInfo) return;

        const mensaje = videoInfo.querySelector(".mensaje-video");

        if (!mensaje) return;

        if (mensaje.style.display === "block") {

            mensaje.style.display = "none";
            boton.textContent = "Ver más 💗";

        } else {

            mensaje.style.display = "block";
            boton.textContent = "Cerrar carta 💌";

        }

    });

});


/* =====================================================
   💌 FOTOS DE LA CARTA
   ===================================================== */

const selectoresMensaje = document.querySelectorAll(
    ".selector-mensaje-foto"
);

selectoresMensaje.forEach((selector) => {

    selector.addEventListener("change", (evento) => {

        const archivo = evento.target.files[0];

        if (!archivo) return;

        if (!archivo.type.startsWith("image/")) {
            alert("Por favor selecciona una imagen.");
            return;
        }

        const espacio = selector.parentElement;

        const lector = new FileReader();

        lector.onload = (e) => {

            const imagen = document.createElement("img");

            imagen.src = e.target.result;
            imagen.alt = "Recuerdo especial";

            espacio.appendChild(imagen);

            const contenido =
                espacio.querySelector(".contenido-mensaje-foto");

            if (contenido) {
                contenido.style.display = "none";
            }

        };

        lector.readAsDataURL(archivo);

    });

});


/* =====================================================
   📸 FOTOS DE LA PORTADA
   ===================================================== */

const selectoresPortada =
    document.querySelectorAll(".selector-portada");

selectoresPortada.forEach((selector) => {

    selector.addEventListener("change", (evento) => {

        const archivo = evento.target.files[0];

        if (!archivo) return;

        if (!archivo.type.startsWith("image/")) {
            alert("Por favor selecciona una imagen.");
            return;
        }

        const espacio =
            selector.closest(".portada-foto");

        const lector = new FileReader();

        lector.onload = (e) => {

            const imagen =
                document.createElement("img");

            imagen.src = e.target.result;
            imagen.alt = "Foto especial";

            espacio.appendChild(imagen);

            const contenido =
                espacio.querySelector(
                    ".contenido-portada-foto"
                );

            if (contenido) {
                contenido.style.display = "none";
            }

        };

        lector.readAsDataURL(archivo);

        
    });

});

});
// =====================================================
// 💗 CONTADOR DE NUESTRO AMOR
// =====================================================

const fechaInicio = new Date(2026, 3, 11, 15, 45, 0);

function actualizarContador() {

    const ahora = new Date();

    let meses =
        (ahora.getFullYear() - fechaInicio.getFullYear()) * 12 +
        (ahora.getMonth() - fechaInicio.getMonth());

    let fechaTemporal = new Date(fechaInicio);
    fechaTemporal.setMonth(fechaInicio.getMonth() + meses);

    if (fechaTemporal > ahora) {
        meses--;

        fechaTemporal = new Date(fechaInicio);
        fechaTemporal.setMonth(fechaInicio.getMonth() + meses);
    }

    const diferencia = ahora - fechaTemporal;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );

    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

actualizarContador();

setInterval(actualizarContador, 1000);


/* =====================================================
   💌 CARTA RESUMEN DE VIDEOS
===================================================== */

const botonFraseVideo =
    document.getElementById("botonFraseVideo");

const fraseCambianteVideo =
    document.getElementById("fraseCambianteVideo");

if (botonFraseVideo && fraseCambianteVideo) {

    botonFraseVideo.addEventListener("click", () => {

        fraseCambianteVideo.classList.toggle("abierta");

        if (fraseCambianteVideo.classList.contains("abierta")) {

            botonFraseVideo.textContent =
                "Cerrar carta 💗";

        } else {

            botonFraseVideo.textContent =
                "Abrir carta 💌";

        }

    });

}
/* =====================================================
   💌 CARTAS DE LAS FOTOS DEL MENSAJE FINAL
===================================================== */

const botonesCartaFoto =
    document.querySelectorAll(".boton-carta-foto");

botonesCartaFoto.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const tarjeta =
            boton.closest(".foto-mensaje-item");

        if (!tarjeta) return;

        const carta =
            tarjeta.querySelector(".carta-foto");

        if (!carta) return;

        carta.classList.toggle("abierta");

        if (carta.classList.contains("abierta")) {

            boton.textContent = "Cerrar carta 💗";

        } else {

            boton.textContent = "Abrir carta 💌";

        }

    });

});
// =========================
// 🔐 CONTRASEÑA DE ENTRADA
// =========================

const passwordCorrecta = "11/04/26";

const pantallaPassword = document.getElementById("pantalla-password");
const passwordInput = document.getElementById("passwordInput");
const botonPassword = document.getElementById("botonPassword");
const mensajePassword = document.getElementById("mensajePassword");

botonPassword.addEventListener("click", function () {

    if (passwordInput.value === passwordCorrecta) {

        pantallaPassword.style.display = "none";

    } else {

        mensajePassword.textContent = "❌ Contraseña incorrecta 💗";
        passwordInput.value = "";

    }

});

passwordInput.addEventListener("keydown", function (evento) {

    if (evento.key === "Enter") {
        botonPassword.click();
    }

});