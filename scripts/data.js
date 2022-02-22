let hair_products = [];

function hair (rating, url, heading, price, strikedprice, use, ingredients){
    this.rating = rating
    this.url = url
    this.heading = heading
    this.price = price
    this.strikedprice = strikedprice
    this.use = use
    this.ingredients = ingredients

    hair_products.push(this)
}

let p1 = new hair(4,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1613991979/staging/products/hair-health-gummies/Carousel%20NEW/Hair_white-BG.jpg","Biotin Hair Gummies (30)", 499, null,"Hair growth & strength", "Biotin 5000 MCG, Multivitamins, Zinc");
let p2 = new hair(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1621853749/staging/products/Hair%20Growth%20Concentrate/Carousel%20NEW/1000x750.jpg","Hair Growth Serum", 799, 899,"Hair Growth", "3% Redensyl, 3% Procapil, 2% Baicapil, 3% Fenugreek, 3% Moringa");
let p3 = new hair(4, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1620821626/staging/products/hair-health-gummies/Hair%20Gummies%2060%20Pack/hair_1600x1200.jpg","Biotin Hair Gummies (60)", 899, 999,"Hair growth & strength", "Biotin 5000 MCG, Multivitamins, Zinc");
let p4 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1645458145/staging/products/Anti%20dandruff%20lotion/0_UPDATED/PRODUCT%20IMAGES/ADL_1000x750.png","Anti Dandruff Lotion", 349, 399,"Instant Dandruff Control", "ICHTHYOL® PALE, Zinc Pyrithione, Menthol");
let p5 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1638857946/staging/products/effervescent-biotin-tablets/PACK%20OF%202/pack-of-2.png","Effervescent Biotin Tablets - Pack of 2", 499, 598,"Hair growth, Hair health, Hair fall", "Biotin, Sesbania Extract, Beta-sitosterol");
let p6 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1643995764/staging/products/1-ketoconazole-dandruff-shampoo/1_PHOTO/PRODUCT%20IMAGES/1KDS_1000x750.jpg","1% Ketoconazole Dandruff Shampoo", 299, null,"Dandruff Control", "1% Ketoconazole, Salicylic Acid");
let p7 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/staging/app/category_images/cat%20display%20units%20images/hair_oil.jpg","Onion Hair Growth Oil", 399, 449,"Hair growth & strengthening", "Onion oil, Castor oil, Olive oil, Amla oil");
let p8 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/staging/products/hair-strengthening-serum/1_Product_Image_2.jpg","Hair Strengthening Serum", 449, 499,"Fizzy, unruly hair", "Argan oil, Olive oil, Sunflower oil");
let p9 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1643983066/staging/products/shampoo-pdp/1_PHOTO/CAROUSEL/HFCS_0.jpg","Keratin Shampoo for Hair Fall", 449, 499,"Hair fall reduction", "Keratin, Biotin, Niacin, Panthenol");
let p10 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1602319806/staging/products/Conditioner%20-pdp/1600x1200.png","Deep Conditioner for Dry Hair", 399, 499,"Dry, damaged, dehydrated hair", "Silk Protein, Biotin, Niacinamide, Shea Butter");
let p11 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1640335849/staging/products/darkenyl-hair-serum/PRODUCT%20IMAGES/1DHS_1000x750.jpg","1% Darkenyl Hair Serum", 899, null,"Reducing Premature Greying", "1% Darkenyl, Bhringraj, Amla");
let p12 = new hair(4, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1638940998/staging/products/redensyl-hair-oil/PRODUCT%20IMAGES/1RHO_1000x750.jpg","1% Redensyl Hair Oil", 549, null,"Hair growth, Onion oil", "1% Redensyl, Onion oil, Bhringraj");
let p13 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1637851321/staging/products/effervescent-biotin-tablets/PRODUCT%20IMAGES/1000x750_EBT.jpg","Effervescent Biotin Tablets", 299, null,"Hair growth, Hair health, Hair fall", "Biotin, Sesbania Extract, Beta-sitosterol");

console.log(hair_products)

localStorage.setItem("hair_products", JSON.stringify(hair_products))