const navHeader = document.querySelector('.header-nav')
const navButton = document.querySelector('.header-nav-wraper-button')

navButton.addEventListener('click', function () {
    if (navHeader.classList.contains('nav-closed')) {
        navHeader.classList.remove('nav-closed')
        navHeader.classList.add('nav-opened')
    } else {
        navHeader.classList.add('nav-closed')
        navHeader.classList.remove('nav-opened')
    }

})