
import {navbar, footer} from "./components/navbar.js";


let navbar_div = document.getElementById("nav_container");
navbar_div.innerHTML = navbar();

let footer_content = document.getElementById("foot_cont");
footer_content.innerHTML = footer();

// Sliders Hair Skin Uti

const productContainers = [...document.querySelectorAll('.sproduct-container')];
const nxtBtn = [...document.querySelectorAll('.snxt-btn')];
const preBtn = [...document.querySelectorAll('.spre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});