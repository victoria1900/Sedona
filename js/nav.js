const navHeader = document.querySelector('.header-nav')
const navButton = document.querySelector('.header-nav-wraper-button')
const navClose = document.querySelector('.header-nav-button')

navButton.addEventListener('click', function () {
    if (navHeader.classList.contains('nav-closed')) {
        navHeader.classList.remove('nav-closed')
        navHeader.classList.add('nav-opened')
    } else {

        navHeader.classList.add('nav-closed')
        navHeader.classList.remove('nav-opened')
    }

})

navClose.addEventListener('click', function () {
    if (navHeader.classList.contains('nav-opened')) {
        navHeader.classList.remove('nav-opened')
        navHeader.classList.add('nav-closed')
    }

})