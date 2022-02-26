
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


// Doctor Health
const dhproductContainers = [...document.querySelectorAll('.dhproduct-container')];
const dhnxtBtn = [...document.querySelectorAll('.dhnxt-btn')];
const dhpreBtn = [...document.querySelectorAll('.dhpre-btn')];

dhproductContainers.forEach((dhitem, i) => {
    let containerDimensions = dhitem.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    dhnxtBtn[i].addEventListener('click', () => {
        dhitem.scrollLeft += containerWidth;
    })

    dhpreBtn[i].addEventListener('click', () => {
        dhitem.scrollLeft -= containerWidth;
    })
})

// Doctor experiences
const deproductContainers = [...document.querySelectorAll('.deproduct-container')];
const denxtBtn = [...document.querySelectorAll('.denxt-btn')];
const depreBtn = [...document.querySelectorAll('.depre-btn')];

deproductContainers.forEach((deitem, i) => {
    let containerDimensions = deitem.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    denxtBtn[i].addEventListener('click', () => {
        deitem.scrollLeft += containerWidth;
    })

    depreBtn[i].addEventListener('click', () => {
        deitem.scrollLeft -= containerWidth;
    })
})