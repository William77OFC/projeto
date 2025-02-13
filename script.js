function toggleMode() {
  document.body.classList.toggle("light")

  // Troca a imagem de perfil
  const profileImage = document.getElementById("profile-img")
  if (document.body.classList.contains("light")) {
    profileImage.src = "./assets/assets/avatar-light.png" // Imagem para o modo claro
  } else {
    profileImage.src = "./assets/assets/avatar.png" // Imagem para o modo escuro
  }

}
