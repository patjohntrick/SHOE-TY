var navBar = document.querySelector('.nav-bar');
var query = document.querySelector('.query');
const navContainer = document.querySelector('.nav-container');
var overLayer = document.querySelector('.overlayer');
const imgChanger = document.querySelector('#img-changer');
const imgChange = document.querySelector('#img-change');

const titleContainerAbout = document.querySelector('.about');
const horAbout = document.querySelector('.hor-about');
const footerTextAbout = document.querySelector('.footer-text-about')

const titleContainerAddress = document.querySelector('.address');
const horAddress = document.querySelector('.hor-address');
const footerTextAddress = document.querySelector('.footer-text-address')

const titleContainerContact = document.querySelector('.contact');
const horContact = document.querySelector('.hor-contact');
const footerTextContact = document.querySelector('.footer-text-contact')

const titleContainerInfo = document.querySelector('.info');
const horInfo = document.querySelector('.hor-info');
const footerTextInfo = document.querySelector('.footer-text-info')

const titleContainerFollow = document.querySelector('.follow');
const horFollow = document.querySelector('.hor-follow');
const footerTextFollow = document.querySelector('.footer-text-follow')


titleContainerAbout.addEventListener('click', function(){
    horAbout.classList.toggle('hor-hide-about');
    footerTextAbout.classList.toggle('show-text');
})
titleContainerAddress.addEventListener('click', function(){
    horAddress.classList.toggle('hor-hide-address');
    footerTextAddress.classList.toggle('show-text');
})
titleContainerContact.addEventListener('click', function(){
    horContact.classList.toggle('hor-hide-contact');
    footerTextContact.classList.toggle('show-text');
})
titleContainerInfo.addEventListener('click', function(){
    horInfo.classList.toggle('hor-hide-info');
    footerTextInfo.classList.toggle('show-text');
})
titleContainerFollow.addEventListener('click', function(){
    horFollow.classList.toggle('hor-hide-follow');
    footerTextFollow.classList.toggle('show-text');
})


navBar.addEventListener("click", function() {
    query.classList.toggle("query-active")
    navBar.classList.toggle('nav-bar-active')
    overLayer.classList.toggle('overlayed')
})

window.addEventListener('scroll', function() {
    var scroll = window.scrollY;
    console.log(scroll);
    if (scroll > 10) {
        navContainer.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; 
        navContainer.style.transition = ".3s";
        navContainer.style.boxShadow = '0 0 1px rgba(0, 0, 0, .4)';
    } else {
        navContainer.style.backgroundColor = "rgba(255, 255, 255, 0)"
        navContainer.style.transition = ".3s";
        navContainer.style.boxShadow = '0 0 2px rgba(0, 0, 0, 0)';
    }
});
document.querySelector('.logo').addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})
// const secondaryLink = document.querySelectorAll('.secondary-link').forEach(function(item){
//     item.addEventListener('click', function(e){
//         e.preventDefault();
        
//         navBar.classList.remove('nav-bar-active');
//         query.classList.remove('query-active');
//         overLayer.classList.remove('overlayed');
//         // query.classList.toggle("query-active")
//         // navBar.classList.toggle('nav-bar-active')
//         // overLayer.classList.toggle('overlayed')
//         })
// })
