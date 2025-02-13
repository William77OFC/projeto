function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  const newSrc = html.classList.contains("light")
    ? "./assets/assets/avatar-light.png"
    : "./assets/assets/avatar.png"

  img.setAttribute("src", newSrc)
}
