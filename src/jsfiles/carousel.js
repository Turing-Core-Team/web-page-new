const d = document

export function carousel(controls, title, content,  titlesArr, contentsArr, leftArrow, rightArrow, colors, hexagon, desktopHexagon, colorsName, bgGradients) {
    const $rightArrow = d.querySelector(rightArrow),
    $leftArrow = d.querySelector(leftArrow),
    $controls = d.querySelectorAll(controls),
    $title = d.querySelector(title),
    $content = d.querySelector(content),
    $hexagon = d.querySelector(hexagon),
    $desktopHexagon = d.querySelector(desktopHexagon)

    let actualContent = 0

    $controls.forEach((el, index) => {
        const color = el.getAttribute("data-color")
        el.addEventListener("click", e => {
            actualContent = index
            $controls.forEach(element => element.setAttribute("src", `/carousel/empty ${element.getAttribute("data-color")} hexagon.png`));
            el.setAttribute("src", `/carousel/filled ${color} hexagon.png`)
            $title.textContent = titlesArr[actualContent]
            $content.textContent = contentsArr[actualContent]
            d.documentElement.style.setProperty("--tb-purple", colors[actualContent])
            d.documentElement.style.setProperty("--main-gradient", bgGradients[actualContent])
            $hexagon.setAttribute("src", `/carousel/${colorsName[actualContent]} hexagon normal.png`)
            $desktopHexagon.setAttribute("src", `/carousel/${colorsName[actualContent]} hexagon.png`)
        })
    });

    $leftArrow.addEventListener("click", e => {
        if(actualContent > 0){
            actualContent--
            $controls.forEach(element => element.setAttribute("src", `/carousel/empty ${element.getAttribute("data-color")} hexagon.png`));
            $controls[actualContent].setAttribute("src", `/carousel/filled ${$controls[actualContent].getAttribute("data-color")} hexagon.png`)
            $title.textContent = titlesArr[actualContent]
            $content.textContent = contentsArr[actualContent]
            d.documentElement.style.setProperty("--tb-purple", colors[actualContent])
            d.documentElement.style.setProperty("--main-gradient", bgGradients[actualContent])
            $hexagon.setAttribute("src", `/carousel/${colorsName[actualContent]} hexagon normal.png`)
            $desktopHexagon.setAttribute("src", `/carousel/${colorsName[actualContent]} hexagon.png`)
        }
    })

    $rightArrow.addEventListener("click", e => {
        if(actualContent < $controls.length - 1){
            actualContent++
            $controls.forEach(element => element.setAttribute("src", `/carousel/empty ${element.getAttribute("data-color")} hexagon.png`));
            $controls[actualContent].setAttribute("src", `/carousel/filled ${$controls[actualContent].getAttribute("data-color")} hexagon.png`)
            $title.textContent = titlesArr[actualContent]
            $content.textContent = contentsArr[actualContent]
            d.documentElement.style.setProperty("--tb-purple", colors[actualContent])
            d.documentElement.style.setProperty("--main-gradient", bgGradients[actualContent])
            $hexagon.setAttribute("src", `/carousel/${colorsName[actualContent]} hexagon normal.png`)
            $desktopHexagon.setAttribute("src", `/carousel/${colorsName[actualContent]} hexagon.png`)
        }
    })
}