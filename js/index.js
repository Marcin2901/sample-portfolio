const mainNavHamburger = document.querySelector('.main-nav--hamburger')
const mainNav = document.querySelector('.main-nav')
const links = document.querySelectorAll('.main-nav--ul li')


mainNavHamburger.addEventListener('click', () => {
    mainNav.classList.toggle('clicked')
    links.forEach(link => {
            link.classList.toggle("fade")
    })
})