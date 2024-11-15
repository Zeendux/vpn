const hamburgerIcon = document.querySelector('.hamburger-icon')
const menu = document.querySelector('.navbar')
const navLinks = document.querySelectorAll('.navlink')

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active')
  menu.classList.toggle('active')
})

navLinks.forEach((item) => {
  item.addEventListener('click', () => {
    hamburgerIcon.classList.remove('active')
    menu.classList.remove('active')
  })
})
