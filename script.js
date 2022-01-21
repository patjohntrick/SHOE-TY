const navBar = document.querySelector('.nav-bar');
const query = document.querySelector('.query');
const navContainer = document.querySelector('.nav-container');
const overLayer = document.querySelector('.overlayer');
const imgChanger = document.querySelector('#img-changer');
const imgChange = document.querySelector('#img-change');

const titleContainerAbout = document.querySelector('.about');
const horAbout = document.querySelector('.hor-about');
const footerTextAbout = document.querySelector('.footer-text-about')

const titleContainerAddress = document.querySelector('.address');
const horAddress = document.querySelector('.hor-address');
const footerTextAddress = document.querySelector('.footer-text-address')



titleContainerAbout.addEventListener('click', function(){
    horAbout.classList.toggle('hor-hide');
    footerTextAbout.classList.toggle('show-text');
})
// titleContainerAddress.addEventListener('click', function(){
//     horAbout.classList.toggle('hor-hide');
//     footerText.classList.toggle('show-text');
// })


navBar.addEventListener("click", function() {
    query.classList.toggle("query-active")
    navBar.classList.toggle('nav-bar-active')
    overLayer.classList.toggle('overlayed')
})

window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    if (scroll > 10) {
        navContainer.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; 
        navContainer.style.transition = ".3s";
    } else {
        navContainer.style.backgroundColor = "rgba(255, 255, 255, 0)"
        navContainer.style.transition = ".3s";
    }

    // console.log(scroll);
});