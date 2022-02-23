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

        image.setAttribute("id","product_image")
        image.src = el.url;

        let star = document.createElement("img");
        star.setAttribute("id", "star_image")

        if(el.rating == 4){
            star.src = "https://cdn.discordapp.com/attachments/945524831842095116/945981157395300402/4starratee.png"
        }
        else if(el.rating == 4.5){
            star.src = "https://cdn.discordapp.com/attachments/945524831842095116/945981157604990976/4.5starratee.png"
        }
        else if(el.rating == 5){
            star.src = "https://cdn.discordapp.com/attachments/945524831842095116/945981157860859924/5starratee.png"
        }
        
        let heading = document.createElement("p");
        heading.innerText = el.heading;

        let price_div = document.createElement("div");
        price_div.style.display = "flex"

        let price = document.createElement("h3");
        price.innerText = `₹${el.price}`;

        let strikedprice = document.createElement("s")
        strikedprice.innerText = el.strikedprice;

        let uses = document.createElement("p");
        uses.innerText = `FOR ${el.use}`;

        let ingredients = document.createElement("p");
        ingredients.innerText = `WITH ${el.ingredients}`;

        price_div.append(price, strikedprice);

        div.append(image, star, heading, price_div, uses, ingredients);


        parent.append(div);
    })
}

export default appendproducts;