const Navbar = document.querySelector('.Header_navbar')
const ToggleBtn = document.querySelector('#menu-btn')
const CloseBtn = document.getElementById('close-btn')
const Header = document.querySelector('.Header')

ToggleBtn.addEventListener('click', () => {
    console.log('boton de toogle')
    ToggleBtn.classList.add('spin')
    Navbar.classList.add('active')
    CloseBtn.classList.add('visible')
})

CloseBtn.addEventListener('click', () => {
    console.log('boton de cerrar toggle')
    Navbar.classList.remove('active')
})

window.addEventListener('scroll', () => {
    Header.classList.remove('active')

    if (window.scrollY > 100) {
        Header.classList.add('active')
    } else {
        Header.classList.remove('active')
    }
})

window.addEventListener('load', () => {
    if (window.scrollY > 100) {
        Header.classList.add('active')
    } else {
        Header.classList.remove('active')
    }
})


const HomeSlider = new Swiper('.Home_slider', {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

const ShopSlider = new Swiper(".Shop_slider", {
    loop:true,
    grabCursor:true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevtEl: ".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 5
        },
    },
});