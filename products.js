import appendproducts from "./scripts/app.js"


// Page loading

let parent = document.getElementById("prod_container");

let data = JSON.parse(localStorage.getItem("hair_products"));

appendproducts(data, parent);

let prod_description = document.getElementById("prod_details");
prod_description.innerText = "Shop Hair Solutions";

let prod_count = document.getElementById("prod_count");
prod_count.innerText = `${data.length} products`;

// Style changes

let prod_topbutton = document.getElementById("hair_prod");
prod_topbutton.style.backgroundColor = "#66509a";
prod_topbutton.style.color = "#ffffff";

let prod_addcartbtn = document.querySelector(".prod_button");


let prod_textcont_count = document.getElementById("prod_topsection");
prod_textcont_count.style.color = "#66509a";

let prod_type_selector = document .getElementById("prod_right");
prod_type_selector.style.border = "1px solid #66509a";

// Functions for button clicks

let hair_cont = document.getElementById("hair_prod");
hair_cont.addEventListener("click", hairprod);


function hairprod(){
    
    parent.innerHTML = "";
    let data = JSON.parse(localStorage.getItem("hair_products"));

    appendproducts(data, parent);

    let prod_description = document.getElementById("prod_details");
    prod_description.innerText = "Shop Hair Solutions";

    let prod_count = document.getElementById("prod_count");
    prod_count.innerText = `${data.length} products`;

    
    
}

let skin_cont = document.getElementById("skin_prod");
skin_cont.addEventListener("click", skinprod);


function skinprod(){

    parent.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("skin_products"));

    appendproducts(data, parent);

    let prod_description = document.getElementById("prod_details");
    prod_description.innerText = "Shop Skin Solutions";

    let prod_count = document.getElementById("prod_count");
    prod_count.innerText = `${data.length} products`;

    
}

let weight_cont = document.getElementById("weight_prod");
weight_cont.addEventListener("click", weightprod);

function weightprod(){

    parent.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("weight_products"));

    appendproducts(data, parent);

    let prod_description = document.getElementById("prod_details");
    prod_description.innerText = "Shop Weight Management Solutions";

    let prod_count = document.getElementById("prod_count");
    prod_count.innerText = `${data.length} products`;
    
}

let pcos_cont = document.getElementById("pcos_prod");
pcos_cont.addEventListener("click", pcosprod);

function pcosprod(){

    parent.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("pcos_products"));

    appendproducts(data, parent);

    let prod_description = document.getElementById("prod_details");
    prod_description.innerText = "";

    let prod_count = document.getElementById("prod_count");
    prod_count.innerText = `${data.length} products`;
    
}

let feminine_cont = document.getElementById("feminine_prod");
feminine_cont.addEventListener("click", feminineprod);

function feminineprod(){

    parent.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("femine_products"));

    appendproducts(data, parent);

    let prod_description = document.getElementById("prod_details");
    prod_description.innerText = "";

    let prod_count = document.getElementById("prod_count");
    prod_count.innerText = `${data.length} products`;
    
}



    
    

