import { hamburgerMenu, mouseAnimation, scrollAnimation } from "./animations.js"

const d = document,
w = window

d.documentElement.style.setProperty("--main-gradient", "linear-gradient(45deg, rgba(255,117,190,1) 0%, rgba(206,21,60,1) 100%)")
d.documentElement.style.setProperty("--cursor", `url(assets/pink_cursor.png), default`)
d.documentElement.style.setProperty("--pointer", `url(assets/pink_pointer.png), default`)
d.documentElement.style.setProperty("--tb-purple", "rgb(247, 99, 130)")

d.addEventListener("DOMContentLoaded", e => {
    scrollAnimation(".bg-2", ".bg-3", ".bg-4", "header img", "header-scroll", "header-images-scroll", "pink")
    setInterval(e => mouseAnimation(".mouse-wheel"), 1750)
    hamburgerMenu("#menu", ".header-menu", ".close-menu")
    w.addEventListener("scroll", e => scrollAnimation(".bg-2", ".bg-3", ".bg-4", "header img", "header-scroll", "header-images-scroll", "purple"))
})