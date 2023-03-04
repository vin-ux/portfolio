const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })

}

const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))





const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})


// const tabs = document.querySelectorAll('[data-target]'),
//       tabContents = document.querySelectorAll('[data-content]')

// tabs.forEach(tab =>{
//     tab.addEventListener('click', () =>{
//         const target = document.querySelector(tab.dataset.target)

//         tabContents.forEach(tabContent =>{
//             tabContent.classList.remove('qualification__active')
//         })
//         target.classList.add('qualification_active')

//         tabs.forEach(tab =>{
//             tab.classList.remove('qualification_active')
//         })
//         tab.classList.add('qualification__active')
//     })
// })


const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
       
    })
})




let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))






  const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})





var $animation_elements = $('.skills__percentage');
console.log($animation_elements);
$(window).on('scroll resize', function () {
    var viewportHeight = document.documentElement.clientHeight;

    $animation_elements.each(function () {
        var $el = $(this);
        var position = this.getBoundingClientRect();
        console.log(position);
        if (position.top > viewportHeight || position.bottom < 0) {
            this.inView && $el.css({ width: 0 });
            this.inView = false;
        } else {
            !this.inView && $el.css({ width: $el.data("percent")});
            this.inView = true;
        }
    });
});


// plugins //

var typyingEffect = new Typed(".multi__text", {
    strings : ["Frontend developer", 
    "Ui/Ux designer"],
    loop : true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})



const sr = ScrollReveal({
    // origin: 'center',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data', {origin:'right'})
sr.reveal('.home__img', {origin:'right'})
sr.reveal('.home__scroll, .home__social',{delay: 1500, origin:'bottom'})

sr.reveal('.about__img', {origin:'left'})
sr.reveal('.about__description', {origin:'right'})
sr.reveal('.about__info', {origin:'right', delay: 600})
sr.reveal('.about__buttons', {origin:'right', delay: 700})

sr.reveal('.qual__left', {origin: 'left', delay: 600})
sr.reveal('.qual__right', {origin: 'right', delay: 600})

sr.reveal('.work__card', {origin: 'bottom', delay: 600})

sr.reveal('.callme', {origin: 'left', delay: 600})
sr.reveal('.email', {origin: 'left', delay: 600})
sr.reveal('.location', {origin: 'left', delay: 600})

sr.reveal('.name', {origin: 'right', delay: 600})
sr.reveal('.emailf', {origin: 'right', delay: 600})
sr.reveal('.pfield', {origin: 'right', delay: 600})
sr.reveal('.comment', {origin: 'right', delay: 600})
sr.reveal('.send__button', {origin: 'right', delay: 600})


$("a#submit-button").click(function()
{
$("#contact-form").submit();
return false;
});


setTimeout(function(){
    $('.loader__bg').fadeToggle();

}, 1500);