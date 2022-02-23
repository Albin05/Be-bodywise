function appendproducts(data, parent){
    data.forEach( (el) => {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.url;

        // star part

        let heading = document.createElement("p");
        heading.innerText = el.heading;

        let price_div = document.createElement("div");
        price_div.style.display = "flex"

        let price = document.createElement("h3");
        price.innerText = el.price;

        let strikedprice = document.createElement("s")
        strikedprice.innerText = el.strikedprice;

        let uses = document.createElement("p");
        uses.innerText = `FOR ${el.use}`;

        let ingredients = document.createElement("p");
        ingredients.innerText = `WITH ${el.ingredients}`;

        price_div.append(price, strikedprice);

        div.append(image, heading, price_div, uses, ingredients);

        parent.append(div);
    })
}

export default appendproducts;