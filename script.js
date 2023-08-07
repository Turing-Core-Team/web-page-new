import { hamburgerMenu, mouseAnimation, scrollAnimation} from "./animations.js"
import { carousel } from "./carousel.js"

const d = document,
w = window,
titles = ["Acercamos las personas a la tecnología", "Acercamos la tecnología a las personas", "Creamos comunidad"],
contents = ["Por medio de charlas y eventos sobre el mundo de la tecnología y el crecimiento empresarial, donde cada invitado es seleccionado para fomentar el aprendizaje de los asistentes", "Generando conexiones para la conformación de equipos de trabajo, obteniendo recursos necesarios para la ejecución de la idea y acercando las herramientas tecnológicas necesarias para poner en marcha tu proyecto", "Construyendo canales de comunicación directos para el aprendizaje e integración enfocados en diferentes ramas tecnológicas (Inteligencia Artificial, Blockchain, Optimización, Desarrollo), apoyadas por una expansión a nivel universitario y de alianzas tecnológicas"],
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