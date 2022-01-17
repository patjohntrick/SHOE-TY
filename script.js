const navBar = document.querySelector('.nav-bar');
const query = document.querySelector('.query');
const navContainer = document.querySelector('.nav-container');

navBar.addEventListener("click", () => {
    query.classList.toggle("query-active")
    navBar.classList.toggle('nav-bar-active')
})

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    if (scroll > 300) {
        navContainer.style.position = 'fixed';
        navContainer.style.backgroundColor = "white";
        navContainer.style.width = '98.5%';
        navContainer.style.transition = ".5s";
    } else {
        navContainer.style.position = 'static';
        navContainer.style.backgroundColor = "rgba(255, 255, 255, 0)"
        navContainer.style.transition = ".5s";
    }

    console.log(scroll);
});