import appendproducts from "./scripts/app.js"


    let data = JSON.parse(localStorage.getItem("hair_products"));

    let parent = document.getElementById("prod_container");
    
    appendproducts(data, parent);


// Page loading

let parent = document.getElementById("prod_container");

let data = JSON.parse(localStorage.getItem("hair_products"));

appendproducts(data, parent);

// Functions for button clicks

let hair_cont = document.getElementById("hair_prod");
hair_cont.addEventListener("click", hairprod);


function hairprod(){
    
    parent.innerHTML = "";
    let data = JSON.parse(localStorage.getItem("hair_products"));

    appendproducts(data, parent);
    
}

let skin_cont = document.getElementById("skin_prod");
skin_cont.addEventListener("click", skinprod);

function skinprod(){

    parent.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("skin_products"));

    appendproducts(data, parent);
    
}

let weight_cont = document.getElementById("weight_prod");
weight_cont.addEventListener("click", weightprod);

function weightprod(){

    parent.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("weight_products"));

    appendproducts(data, parent);
    
}

let pcos_cont = document.getElementById("pcos_prod");
pcos_cont.addEventListener("click", pcosprod);

function pcosprod(){

    parent.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("pcos_products"));

    appendproducts(data, parent);
    
}

let feminine_cont = document.getElementById("feminine_prod");
feminine_cont.addEventListener("click", feminineprod);

function feminineprod(){

    parent.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("femine_products"));

    appendproducts(data, parent);
    
}



    
    

