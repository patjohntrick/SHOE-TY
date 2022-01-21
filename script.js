const navBar = document.querySelector('.nav-bar');
const query = document.querySelector('.query');
const navContainer = document.querySelector('.nav-container');
const overLayer = document.querySelector('.overlayer');
const imgChanger = document.querySelector('#img-changer');
const imgChange = document.querySelector('#img-change');

const imgs =['img/p10.jpg'];

// function mouseOut(){
//     imgChange.src = "";
// }
// function mouseOver(e){
//     // var imgChange = e.id;
//     imgChange.src = imgs[0]
//     console.log(imgChange);
// }

navBar.addEventListener("click", function() {
    query.classList.toggle("query-active")
    navBar.classList.toggle('nav-bar-active')
    overLayer.classList.toggle('overlayed')
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

    // console.log(scroll);
});