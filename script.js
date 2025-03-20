
// NAVBAR RESPONSIVO - MENU HAMBURGUESA

const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");

abrir.addEventListener("click", () =>{
    menu.classList.add("visible");
    abrir.style.display = "none";
    cerrar.style.display = "flex";
})

cerrar.addEventListener("click", () =>{
    menu.classList.remove("visible");
    cerrar.style.display = "none";
    abrir.style.display = "flex";
})


// NAVBAR FIJADO - SCROLL PARA QUE APAREZCA LA BARRA DE NAVEGACIÓN CON COLOR

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    function handleScroll() {
        if (window.scrollY > 150) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    }

    // Esperamos que la página cargue completamente antes de evaluar el scroll
    window.addEventListener("load", handleScroll);
    window.addEventListener("scroll", handleScroll);
});


// CARROUSEL AUTOMATICO

document.addEventListener("DOMContentLoaded", function () {
    const portada = document.getElementById("portada-principal");
    const imagenes = [
        "/img/portada-principal/img-portada.webp",
        "/img/portada-principal/img-portada2.webp",
        "/img/portada-principal/img-portada3.webp",
        "/img/portada-principal/img-portada4.webp",
        "/img/portada-principal/img-portada5.webp"
    ];
    let index = 0;

    // Crear la capa que hará el fade-in
    const fadeLayer = document.createElement("div");
    fadeLayer.style.position = "absolute";
    fadeLayer.style.top = "0";
    fadeLayer.style.left = "0";
    fadeLayer.style.width = "100%";
    fadeLayer.style.height = "100%";
    fadeLayer.style.backgroundSize = "cover";
    fadeLayer.style.backgroundPosition = "center";
    fadeLayer.style.transition = "opacity 1.5s ease-in-out";
    fadeLayer.style.zIndex = "-1";
    portada.appendChild(fadeLayer);

    setInterval(() => {
        fadeLayer.style.opacity = "1"; // Hace el fade-in

        setTimeout(() => {
            index = (index + 1) % imagenes.length;
            portada.style.backgroundImage = `linear-gradient(180deg, var(--color3) 0%, var(--color2) 100%), url('${imagenes[index]}')`;
            fadeLayer.style.opacity = "0"; // Hace el fade-out
        }, 1500);
        
    }, 5000);
});



