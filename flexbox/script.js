const openNavBtn = document.getElementById('open-nav')
const closeNavBtn = document.getElementById('close-nav')
const navMenu = document.getElementById('nav-menu')
const navItems = document.querySelectorAll('.nav__item')

navItems.forEach(item =>
  item.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) navMenu.classList.remove('open')
  })
)

openNavBtn.addEventListener('click', () => {
  navMenu.classList.add('open')
})

closeNavBtn.addEventListener('click', () => {
  navMenu.classList.remove('open')
})
