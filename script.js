import { mouseAnimation, scrollAnimation} from "./animations.js"

const d = document,
w = window

d.addEventListener("DOMContentLoaded", e => {
    setInterval(e => mouseAnimation(".mouse-wheel"), 1750)
    w.addEventListener("scroll", e => scrollAnimation(".bg-2", ".bg-3", ".bg-4", "header img", "header-scroll", "header-images-scroll"))
})