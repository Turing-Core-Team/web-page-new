import { hamburgerMenu, mouseAnimation, scrollAnimation } from "./animations.js"

const d = document,
w = window

d.documentElement.style.setProperty("--main-gradient", "linear-gradient(135deg, rgba(1,139,169,1) 0%, rgba(0,208,218,1) 100%)")
d.documentElement.style.setProperty("--tb-purple", "#018ba9")

d.addEventListener("DOMContentLoaded", e => {
    scrollAnimation(".bg-2", ".bg-3", ".bg-4", "header img", "header-scroll", "header-images-scroll", "pink")
    setInterval(e => mouseAnimation(".mouse-wheel"), 1750)
    hamburgerMenu("#menu", ".header-menu", ".close-menu")
    w.addEventListener("scroll", e => scrollAnimation(".bg-2", ".bg-3", ".bg-4", "header img", "header-scroll", "header-images-scroll", "purple"))
})