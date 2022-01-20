const navBar = document.querySelector('.nav-bar');
const query = document.querySelector('.query');
const navContainer = document.querySelector('.nav-container');
const bodyElement = document.getElementById('body');

navBar.addEventListener("click", function() {
    query.classList.toggle("query-active")
    navBar.classList.toggle('nav-bar-active')
    bodyElement.classList.toggle('query-active')
})

window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    if (scroll > 300) {
        navContainer.style.position = 'fixed';
        navContainer.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        navContainer.style.marginTop = '10px';
        navContainer.style.marginLeft = '1%';
        navContainer.style.marginRight = 'auto';
        navContainer.style.width = '98%'; 
        navContainer.style.transition = ".5s";
    } else {
        navContainer.style.position = 'static';
        navContainer.style.backgroundColor = "rgba(255, 255, 255, 0)"
        navContainer.style.marginTop = '10px';
        navContainer.style.marginLeft = 'auto';
        navContainer.style.marginRight = 'auto';
        navContainer.style.width = '98%';
        navContainer.style.transition = ".5s";
    }

    console.log(scroll);
});