const d = document

function createMember(name, role, linkedin, img) {

    const $div = d.createElement("figure"),
    $img = d.createElement("img"),
    $name = d.createElement("p"),
    $role = d.createElement("p"),
    $socialMediaDiv = d.createElement("div"),
    $linkedin = d.createElement("img")

    $div.setAttribute("data-aos", "fade-up")
    $div.setAttribute("data-aos-duration", "1000")
    $div.classList.add("info-member")

    $img.setAttribute("src", img)
    $img.setAttribute("alt", "Imagen miembro")
    $img.classList.add("member-img")
    
    $name.classList.add("member-name")
    $name.textContent = name
    
    $role.classList.add("member-profession")
    $role.textContent = role

    $socialMediaDiv.classList.add("social-media")

    $linkedin.setAttribute("src", "assets/linkedin.png")
    $linkedin.setAttribute("alt", "Linkedin")

    $linkedin.addEventListener("click", e => window.open(linkedin))

    $socialMediaDiv.appendChild($linkedin)

    $div.appendChild($img)
    $div.appendChild($name)
    $div.appendChild($role)
    $div.appendChild($socialMediaDiv)

    return $div
}

export function showProjectsDiv(btns, div) {
    const $btns = d.querySelectorAll(btns),
    $div = d.querySelector(div)

    $btns.forEach($btn => {
        $btn.addEventListener("click", e => {
            $div.classList.remove("none")
        })
    });
}

export function changeProjectValues(btns, div, projects, title) {
    const $btns = d.querySelectorAll(btns),
    $div = d.querySelector(div),
    $title = d.querySelector(title),
    $desc = d.querySelector(`${div} .info-text`),
    $members = d.querySelector(`${div} .info-members`),
    $img = d.querySelector(".info-image img"),
    $imgDiv = d.querySelector(".info-image")

    $btns.forEach($btn => {
        const projectName = $btn.getAttribute("data-project")
        $btn.addEventListener("click", e => {
            $desc.textContent = projects[projectName].desc
            $title.textContent = projects[projectName].name
            $img.setAttribute("src", projects[projectName].img)
            $imgDiv.style.backgroundColor = projects[projectName].bgColor
            $members.innerHTML = ""
            projects[projectName].team.forEach(member => {
                $members.appendChild(createMember(member.name, member.role, member.linkedin, member.img))
            });
        })
    });
}
