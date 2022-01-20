const navBar = document.querySelector('.nav-bar');
const query = document.querySelector('.query');
const navContainer = document.querySelector('.nav-container');
const bodyElement = document.getElementById('body');

navBar.addEventListener("click", function() {
    query.classList.toggle("query-active")
    navBar.classList.toggle('nav-bar-active')
    bodyElement.classList.toggle('overlay')
})

window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    if (scroll > 10) {
        // navContainer.style.position = 'fixed';
        navContainer.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; 
        navContainer.style.transition = ".3s";
    } else {
        navContainer.style.backgroundColor = "rgba(255, 255, 255, 0)"
        navContainer.style.transition = ".3s";
    }

    console.log(scroll);
});