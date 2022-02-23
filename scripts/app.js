function appendproducts(data, parent){
    data.forEach( (el) => {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.url;

        let heading = document.createElement("p");
        heading.innerText = el.heading;

        let price = document.createElement("h3");
        price.innerText = el.price;

        div.append(image,heading,price);

        parent.append(div);
    })
}

export default appendproducts;