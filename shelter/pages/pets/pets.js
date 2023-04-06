// BURGER
const burgerBackground = document.querySelector('.burger__background')
const burgerIconBlack = document.querySelector('.burger__icon-black')
const burgerMenuItem = document.querySelectorAll('.burger__list-item')
const burgerIcon = document.querySelector('.burger__icon')
const burgerMenu = document.querySelector('.burger')
const body = document.querySelector('body')

// show or hide burger menu and rotate icon
burgerIconBlack.addEventListener('click', () => {
  toggleBurger()
})
// change icon color
burgerIconBlack.addEventListener('click', () => {
  burgerIconBlack.classList.toggle('burger__icon-black')
})

// if click on burger link => hide burger menu
burgerMenuItem.forEach((item) => {
  item.addEventListener('click', () => {
    hideBurger()
  })
})
// if click on burger background => hide burger menu
burgerBackground.addEventListener('click', () => {
  hideBurger()
})

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 767) {
    hideBurger()
  }
})

function toggleBurger() {
  // if scroll is hidden => add margin right
  let marginSize = window.innerWidth - document.documentElement.clientWidth
  if (marginSize) {
    document.documentElement.style.marginRight = marginSize + 'px'
  } else {
    document.documentElement.style.marginRight = 0
  }
  burgerIconBlack.classList.toggle('burger__icon-active')
  burgerMenu.classList.toggle('burger__active')
  body.classList.toggle('locked')
  burgerBackground.classList.toggle('burger__background-active')
}

function hideBurger() {
  body.classList.remove('locked')
  burgerMenu.classList.remove('burger__active')
  burgerBackground.classList.remove('burger__background-active')
  burgerIcon.classList.remove('burger__icon-active')
  burgerIconBlack.classList.add('burger__icon-black')
  document.documentElement.style.marginRight = 0
}