import { hamburgerMenu, mouseAnimation, scrollAnimation} from "./animations.js"
import { carousel } from "./carousel.js"

const d = document,
w = window,
titles = ["Eventos", "Proyectos", "Comunidad"],
contents = ["Creamos experiencias que motiven a las personas a aprender, a través de conferencias, talleres y charlas.", "Apoyamos a quienes quieran construir el futuro. ¿Buscas equipo, visibilidad, retroalimentación, mentoría? Venga pa' acá", "Creamos espacios para conectar personas con distintas habilidades e intereses comunes para que construyan grandes cosas."],
colors = ["rgb(170, 51, 170)", "rgb(1, 139, 169)", "rgb(247, 99, 130)"],
colorsName = ["purple", "blue", "pink"],
bgGradients = ["linear-gradient(135deg, rgba(1,139,169,1) 0%, rgba(170,51,170,1) 100%)", "linear-gradient(135deg, rgba(1,139,169,1) 0%, rgba(0,208,218,1) 100%)", "linear-gradient(45deg, rgba(255,117,190,1) 0%, rgba(206,21,60,1) 100%)"]

d.addEventListener("DOMContentLoaded", e => {
    scrollAnimation(".bg-2", ".bg-3", ".bg-4", "header img", "header-scroll", "header-images-scroll", "purple")
    setInterval(e => mouseAnimation(".mouse-wheel"), 1750)
    hamburgerMenu("#menu", ".header-menu", ".close-menu")
    w.addEventListener("scroll", e => scrollAnimation(".bg-2", ".bg-3", ".bg-4", "header img", "header-scroll", "header-images-scroll", "purple"))
    carousel(".carousel-hexagon", ".carousel-title", ".carousel-content", titles, contents, ".left-arrow", ".right-arrow", colors, ".first-hexagon", ".first-hexagon-desktop", colorsName, bgGradients)
})