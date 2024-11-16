const body = document.body
const burger = document.querySelector('#burger-menu')
const menu = document.querySelector('.mobile-menu')
const instagram = document.querySelector('.menu-right > a > img')
let currentScroll = window.scrollY
let lastScroll = 0

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    instagram.classList.toggle('opacity')
    if (body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }
    if (menu.classList.contains('active')) {
        disable_scroll()
    }
})

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY

    if (currentScroll <= 0) {
        body.classList.remove('scroll-up')
    }

    if (currentScroll > 10 && currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }

    if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }

    lastScroll = currentScroll
})

function disable_scroll() {
    document.ontouchmove = function(e){ 
         e.preventDefault(); 
    }
 }
 
 function enable_scroll() {
    document.ontouchmove = function(e){ 
      return true; 
    }
 }