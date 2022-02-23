import appendproducts from "./scripts/app.js"

    let data = JSON.parse(localStorage.getItem("hair_products"));

    let parent = document.getElementById("prod_container");
    
    appendproducts(data, parent);