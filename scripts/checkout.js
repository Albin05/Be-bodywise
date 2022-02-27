import {navbar, footer} from "./components/navbar.js";


let navbar_div = document.getElementById("nav_container");
navbar_div.innerHTML = navbar();

let footer_content = document.getElementById("foot_cont");
footer_content.innerHTML = footer();



let arr = JSON.parse(localStorage.getItem("cart_data")) || []
arr.map(function (el) {
    let div = document.createElement("div")
    row.style.display="flex"
    row.style.height="50px"
    row.style.width="100px"
    row.style.justifyContent="space-between"

    let p1 = document.createElement("p")
    p1.textContent=el.heading;
    p1.style.marginLeft="10px"

    let p2 = document.createElement("p")
    p2.textContent=el.price;
    p2.style.marginRight="20px"
    p2.style.fontWeight="900"
    p2.style.color="rgb(235,150,51)";

    div.append(p1,p2)

    document.querySelector("#order_append").append(div)

});

    let discount = JSON.parse(localStorage.getItem("cart_data"))

    let sum = 0
    for(i=0 ; i<discount.length ; i++){
        sum = sum + discount[i].price
    }
    document.querySelector(".check_total").textContent=sum;
    function clicked(){
        let val = document.querySelector(".check_coupon").value
        if(val=="masaimasai"){
            alert("Coupon Code Applied")
            let res = sum*0.3
            document.querySelector(".check_disc").textContent = res;
            let total = sum - res ;
            document.querySelector(".check_total").textContent=total;
        }
        else{ 
           alert("Invalid code")
           let res = 0
           document.querySelector(".check_disc").textContent = 0;
        }
    }
