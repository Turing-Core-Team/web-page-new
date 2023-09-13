const d = document;

export function mouseAnimation(mouseWheel) {
  const $mouseWheel = d.querySelector(mouseWheel);

  // Animar durante 1 segundo
  $mouseWheel.style.transition = "all 1s ease";
  $mouseWheel.style.marginTop = "1.5rem";
  $mouseWheel.style.opacity = "0";

  // Volver al inicio después de 1 segundo
  setTimeout(() => {
    $mouseWheel.style.transition = "none";
    $mouseWheel.style.marginTop = "1rem";
    $mouseWheel.style.opacity = "1";
  }, 1000);
}

export function scrollAnimation(bg1, bg2, bg3, images, hClass, iClass, aClass) {
    const $header = document.querySelector("header"),
    $bg1 = d.querySelector(bg1),
    $bg2 = d.querySelector(bg2),
    $bg3 = d.querySelector(bg3),
    $headerA = d.querySelectorAll("header a"),
    scrollPosition = window.scrollY,
    windowHeight = window.innerHeight;

    if (scrollPosition >= windowHeight * 1) {
        document.querySelectorAll(images).forEach(a => a.classList.add(iClass));
        $header.classList.add(hClass);
        $headerA.forEach($a => $a.classList.add(aClass));
        $bg3.classList.remove('hidden');
    } else {
        document.querySelectorAll(images).forEach(a => a.classList.remove(iClass));
        $bg3.classList.add('hidden');
        $header.classList.remove(hClass);
        $headerA.forEach($a => $a.classList.remove(aClass));
    }
    if (scrollPosition >= windowHeight * 0.4) {
        $bg2.classList.remove('hidden');
    } else {
        $bg2.classList.add('hidden');
      }
  }

export function hamburgerMenu(menu, open, close) {
  const $menu = d.querySelector(menu),
  $open = d.querySelector(open),
  $close = d.querySelector(close)

  $open.addEventListener("click", () => {
      $menu.classList.remove("none");
      setTimeout(() => $menu.style.right = "0", 10)
  });
  $close.addEventListener("click", () => {
      $menu.style.right = "-100vw";
      setTimeout(() => $menu.classList.add("none"), 300)
  });
}