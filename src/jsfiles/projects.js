import { hamburgerMenu, mouseAnimation, scrollAnimation } from "./animations.js"
import { changeProjectValues, showProjectsDiv } from "./show_projects.js"

const d = document,
w = window,
projects = {
    bettercampus: {
        name: "BetterCampus",
        desc: "Diseñado con la intención de brindar a los estudiantes la capacidad de organizar sus horarios durante el proceso de inscripción en asignaturas, mediante una interfaz cómoda, intuitiva y con la facilidad de acceder de manera sencilla a información detallada sobre las asignaturas disponibles.",
        team: [
            {
                name: "Juan Orozco",
                role: "Desarrollador fullstack",
                linkedin: "https://www.linkedin.com/in/juan-andres-orozco-velandia-a66433275/",
                img: "assets/members/pato.png"
            },
            {
                name: "Camilo Cuello",
                role: "Desarrollador backend",
                linkedin: "https://www.linkedin.com/in/camilo-andres-cuello-romero-a833a51b2/",
                img: "assets/members/pato.png"
            }
        ],
        img: "assets/projects/logo_bettercampus.png",
        bgColor: "#0f172a"
    },
    spun: {
        name: "SPUN",
        desc: "Simulador para la prueba de la Universidad Nacional.",
        team: [
            {
                name: "Juan Orozco",
                role: "Desarrollador backend",
                linkedin: "https://www.linkedin.com/in/juan-andres-orozco-velandia-a66433275/",
                img: "assets/members/pato.png"
            },
            {
                name: "Camilo Cuello",
                role: "Desarrollador backend",
                linkedin: "https://www.linkedin.com/in/camilo-andres-cuello-romero-a833a51b2/",
                img: "assets/members/pato.png"
            }
        ],
        img: "assets/projects/logo_spun.png",
        bgColor: "#FFFFFF"
    },
    freshli: {
        name: "Freshli",
        desc: "Plataforma en línea que permite a los usuarios mediante un modelo de suscripción crear su mercado de frutas y verduras en línea, elegir la frecuencia de entrega y recibir a domicilio productos orgánicos adquiridos directamente de agricultores independientes con prácticas agrícolas sostenibles.",
        team: [
            {
                name: "Juan Camilo Rosero",
                role: "Desarrollador frontend",
                linkedin: "https://www.linkedin.com/in/juan-rosero/",
                img: "assets/members/pato.png"
            },
            {
                name: "Juan David Días",
                role: "Ingeniero agrícola",
                linkedin: "https://www.linkedin.com/in/juan-rosero/",
                img: "assets/members/pato.png"
            }
        ],
        img: "assets/projects/logo_freshli.png",
        bgColor: "#5F8D4E"
    },

    gaiaRed: {
        name: "Gaia Red",
        desc: "Gaia Red es un grupo interdisciplinar de estudiantes interesados en el internet de las cosas, los microcontroladores y en darle una oportunidad de modernización al campo colombiano. Con nuestro proyecto buscamos mejorar la productividad de los cultivos al tiempo que brindamos una solución tecnológica.",
        team: [
            {
                name: "Camila Piñeros",
                role: "Diseñadora industrial",
                linkedin: "https://www.linkedin.com/in/camila-pineros-di/",
                img: "assets/members/pato.png"
            }
        ],
        img: "assets/projects/logo_gaia_red.png",
        bgColor: "#ffffff"
    }
}

d.documentElement.style.setProperty("--main-gradient", "linear-gradient(135deg, rgba(1,139,169,1) 0%, rgba(0,208,218,1) 100%)")
d.documentElement.style.setProperty("--tb-purple", "#018ba9")

d.addEventListener("DOMContentLoaded", e => {
    scrollAnimation(".bg-2", ".bg-3", ".bg-4", "header img", "header-scroll", "header-images-scroll", "pink")
    setInterval(e => mouseAnimation(".mouse-wheel"), 1750)
    hamburgerMenu("#menu", ".header-menu", ".close-menu")
    w.addEventListener("scroll", e => scrollAnimation(".bg-2", ".bg-3", ".bg-4", "header img", "header-scroll", "header-images-scroll", "purple"))
    showProjectsDiv(".see-project", "#info")
    changeProjectValues(".see-project", "#info", projects, ".info-title")
})
