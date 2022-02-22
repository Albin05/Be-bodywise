// Database

// Hair Products

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
let p8 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/staging/products/hair-strengthening-serum/1_Product_Image_2.jpg","Hair Strengthening Serum", 449, 499,"Frizzy, unruly hair", "Argan oil, Olive oil, Sunflower oil");
let p9 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1643983066/staging/products/shampoo-pdp/1_PHOTO/CAROUSEL/HFCS_0.jpg","Keratin Shampoo for Hair Fall", 449, 499,"Hair fall reduction", "Keratin, Biotin, Niacin, Panthenol");
let p10 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1602319806/staging/products/Conditioner%20-pdp/1600x1200.png","Deep Conditioner for Dry Hair", 399, 499,"Dry, damaged, dehydrated hair", "Silk Protein, Biotin, Niacinamide, Shea Butter");
let p11 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1640335849/staging/products/darkenyl-hair-serum/PRODUCT%20IMAGES/1DHS_1000x750.jpg","1% Darkenyl Hair Serum", 899, null,"Reducing Premature Greying", "1% Darkenyl, Bhringraj, Amla");
let p12 = new hair(4, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1638940998/staging/products/redensyl-hair-oil/PRODUCT%20IMAGES/1RHO_1000x750.jpg","1% Redensyl Hair Oil", 549, null,"Hair growth, Onion oil", "1% Redensyl, Onion oil, Bhringraj");
let p13 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1637851321/staging/products/effervescent-biotin-tablets/PRODUCT%20IMAGES/1000x750_EBT.jpg","Effervescent Biotin Tablets", 299, null,"Hair growth, Hair health, Hair fall", "Biotin, Sesbania Extract, Beta-sitosterol");
let p14 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1602753797/staging/products/minoxidil-topical/1600x1200_2___.png","Minoxidil Topical Solution USP 5% w/v", 699, null,"Bald spots, Excessive hair fall", "5% Minoxidil, Procapil");
let p15 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1642602143/staging/products/chelate-water-softener/PRODUCT%20IMAGES/CWS_1000x750.png","Chelate Water Softener", 449, null,"Softening Hard Water", "Chelating Agents");
let p16 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1618881636/staging/products/buying-options/Hair%20Pro-Growth%20Pack/New%20Carousel/Hair_Growth_Pack.jpg","Hair Growth Pack", 1199, 1399,"New hair growth", "3% Redensyl Solution, 5000 MCG Biotin Gummies");
let p17 = new hair(4, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1604072938/staging/products/buying-options/Hair%20Restore%20Edition/Hair_Restore_CAT_PAGE.png","Hair Restore Edition", 1499, 1946,"Hair Fall Control", "Silk Protein Conditioner, Biotin Shampoo, Onion Hair Oil");
let p18 = new hair(4, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1620047677/staging/products/buying-options/Hair%20Health%20Starter%20Pack/New%20Carousel/Hair_Health_Starter_Pack.jpg","Hair Health Starter Pack", 799, 999,"Hair Health, Hair Growth", "Biotin Shampoo, 5000 MCG Biotin Gummies (30)");
let p19 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1640771666/staging/products/buying-options/Anti%20Dandruff%20Starter%20Pack/CAROUSEL/ADSP_1000x750.jpg","Anti Dandruff Starter Pack", 599, 699,"Dandruff Control", "1% Keto Shampoo, Anti dandruff Lotion");
let p20 = new hair(4, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1619428969/staging/products/buying-options/Hair%20fall%20Control%20Mini/New%20Carousel/Hair_Fall_Control_Beginner_s_Pack.jpg","Hair Fall Control Mini", 799, 998,"Frizz control, Hair Fall control", "Biotin Shampoo, Silk Protein Conditioner");
let p21 = new hair(4, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1620062959/staging/products/buying-options/Hair%20fall%20Control%20Starter%20Pack/New%20Carousel/Hair_fall_Control_Starter_Pack.jpg","Hair Fall Control Starter Pack", 849, 949,"Hair Growth & Strengthening", "Onion Hair Oil, Biotin Shampoo");
let p22 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1641478408/staging/products/buying-options/dandruff%20starter%20kit/carousel/DSK_1000x750.png","Dandruff Starter Kit", 699, 799,"Dandruff Control & Hair Strength", "1% Keto Shampoo, 5000 MCG Biotin Gummies");
let p23 = new hair(4.5, "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1641480325/staging/products/buying-options/instant%20dandruff%20relief%20kit/carousel/IDRK_1000x750_N.jpg","Instant Dandruff Relief Kit", 649, 799,"Dandruff Control, Frizz control", "1% Keto Shampoo, Silk Protein Conditioner");


localStorage.setItem("hair_products", JSON.stringify(hair_products))

// Skin Products
let skin_products = [];

function skin (rating, url, heading, price, strikedprice, use, ingredients){
    this.rating = rating
    this.url = url
    this.heading = heading
    this.price = price
    this.strikedprice = strikedprice
    this.use = use
    this.ingredients = ingredients

    skin_products.push(this)
}

let s1 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1636804535/staging/products/skin-clarifying/0_BLUE/PRODUCT%20IMAGES/10NS_1000x750.jpg","10% Niacinamide Serum", 489, 599,"Acne Marks, Hyperpigmentaion", "10% Niacinamide, 1% Zinc PCA");
let s2 = new skin(4,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1635251558/staging/products/skin-rejuvenation-serum/0_BLUE/PRODUCT%20IMAGES2/20VitC_1000x750.png","20% Vitamin C Face Serum", 599, 699,"Glowing & Brightening Skin", "20% Vitamin C, Ferulic Acid, Glycolic Acid");
let s3 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1641809040/staging/products/1-salicylic-acid-body-wash/PRODUCT%20IMAGES/1SABW_1000x750.jpg","1% Salicylic Acid Body Wash for Women", 349, null,"Cleansing Skin, Preventing Body Acne", "1% Salicylic acid, Chamomile Extract");
let s4 = new skin(4,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1638247817/staging/products/skin-health-gummies/0_BLUE/PRODUCT%20IMAGES/1000x750_SHG.png","Skin Health Gummies (30)", 599, null,"Glowing Skin", "Hyaluronic Acid, Curcumin, Vit C & E");
let s5 = new skin(4,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1638891793/staging/products/skin-health-gummies/0_BLUE/Pack%20of%2060/CAROUSEL/0.png","Skin Health Gummies (60)", 999, 1199,"Dull skin", "Hyaluronic Acid, Curcumin, Vit C & E");
let s6 = new skin(4,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1636791635/staging/products/collagen-skin-gummies/PRODUCT%20IMAGES/1000x750_N.png","Collagen Skin Gummies", 999, null,"Fine Lines, Hydration", "Sesbania Extract, Collagen Boosting Blend, Multivitamin");
let s7 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1615635403/staging/products/adapalene-benzoyl/Carousel/Adapalene_BP.jpg","Adapalene and Benzoyl Peroxide Gel", 399, null,"Active Acne", "2.5% Benzoyl peroxide");
let s8 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1633410923/staging/products/acne-spot-correction/0_BLUE/1600x1200_-_acne_gel_blue.jpg","AHA BHA Acne Clearing Gel", 499, 499,"Active Acne", "2% Salicylic acid, 1% Glycolic acid");
let s9 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1643013958/staging/products/acne-control-wash/New%20blue%20images/0_BRUSH/PRODUCT%20IMAGES/SAFW_1000x750.jpg","1% Salicylic Acid Foaming Face Wash", 349, null, "Acne prone skin", "1% Salicylic acid, 1% Glycolic acid");
let s10 = new skin(4,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1610589752/staging/products/oil-control-moisturiser/Oil-Control-Moisturiser-Tube-with-monocarton_1600X1200.jpg","Oil Control Moisturizer", 297, 349, "Acne-prone skin", "Ceramides, Phytosqualene, Hyalutonic adid, Argine");
let s11 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1639571842/staging/products/collagen-powder/PRODUCT%20IMAGES/CP_1000x750.jpg","Collagen Powder", 999, null, "Fine Lines, Hydration", "Glycine & Proline, Omega 3, Multivitamins");
let s12 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1636697869/staging/products/2-salicylic-acid-serum/PRODUCT%20IMAGES/2SAFS_1000x750.jpg","2% Salicylic Acid Face Serum", 549, null, "Acne, Blackheads, Whiteheads", "2% Salicylic Adid, 2% Femented Rice Water, 0.5% Niacinamide");
let s13 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1641555836/staging/products/2-salicylic-acid-face-wash/PRODUCT%20IMAGES/2SAFW_1000x750.png","2% Salicylic Acid Face Wash", 549, null, "Acne, Blackheads, Whiteheads", "2% Salicylic Adid, 2% Femented Rice Water, 0.5% Niacinamide");


console.log(skin_products);

localStorage.setItem("skin_products", JSON.stringify(skin_products))