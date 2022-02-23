// Database

// Hair Products

let hair_products = [];

function hair(rating, url, heading, price, strikedprice, use, ingredients){
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

console.log(hair_products);

localStorage.setItem("hair_products", JSON.stringify(hair_products));

// Skin Products
let skin_products = [];

function skin(rating, url, heading, price, strikedprice, use, ingredients){
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
let s12 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1636697869/staging/products/2-salicylic-acid-serum/PRODUCT%20IMAGES/2SAFS_1000x750.jpg","2% Salicylic Acid Face Serum", 549, null, "Acne, Blackheads, Whiteheads", "2% Salicylic Acid, 2% Femented Rice Water, 0.5% Niacinamide");
let s13 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1641555836/staging/products/2-salicylic-acid-face-wash/PRODUCT%20IMAGES/2SAFW_1000x750.png","2% Salicylic Acid Face Wash", 299, null, "Acne-Prone skin", "2% Salicylic acid, Allantonin");
let s14 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1622686002/staging/products/Pore%20Tightening%20Toner/Carousel/1600x1200.jpg","Pore Tightening Toner", 499, null, "Large open pores", "5% Lactic Acid, Arginine, Witch Hazel, Aloe Vera");
let s15 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1611886096/staging/products/Skin%20Hydrating%20Cleanser/Carousel/1600x1200.jpg","Hyaluronic Acid Face Wash", 315, 349, "Dry, sensitive skin", "Pentavitin, Shea Butter, Hyaluronic Acid, Allantoin");
let s16 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1639978172/staging/products/Retinol%20Under%20Eye%20Cream/PRODUCT%20IMAGES/2RUEC_1000X750.jpg","2% Bio Retinol Under Eye", 499, null, "Dark Circles, Fine Lines & Wrinkles", "2% Bio Retinol, 1% Niacinamide, 2% kakadu Plum");
let s17 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1637737681/staging/products/skin-regenerate-night/0_BLUE/PRODUCT%20IMAGES/1000x750.jpg","1% Retinol Liposome Night Cream", 599, null, "Fine lines & wrinkles", "1% Retinol, 3% Niacinamide");
let s18 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1639097000/staging/products/Sunscreen/0_BLUE/PRODUCT%20IMAGES/BSS_1000x750.png","Broad Spectrum SPF 30 Sunscreen", 399, null, "Sun & blue light protection", "Avobenzone, Titanium Dioxide");
let s19 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1643027363/staging/products/buying-options/clear%20skin%20edition/0_BLUE/PRODUCT%20IMAGES/TCSE_1000x750_N.jpg","The Clear Skin Edition", 1379, 1849, "Active acne, Acne scars", "10% Niacinamide Serum, AHA-BHA Facewash, AHA-BHA Gel, Broad Spectrum SPF 30");
let s20 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1643259335/staging/products/buying-options/Acne%20scar%20control%20starter%20pack/0_BLUE/PRODUCT%20IMAGES/AMRK_1000x750_N.jpg","Acne Marks Reduction Kit", 799, 949, "Acne scars", "AHA-BHA Facewash, 10% Niacinamide Serum");
let s21 = new skin(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1634181333/staging/products/buying-options/Active%20Acne%20and%20Scar%20Removal%20Pack/0_BLUE/Acne%20Treatment%20Kit_1000X750.png","Acne Treatment Kit", 899, 1099, "Active acne, Acne scars", "10% Niacinamide Serum, AHA-BHA Gel");
let s22 = new skin(4,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1639457747/staging/products/buying-options/Skin%20Glow%20Starter%20Pack/0_BLUE/PRODUCT%20IMAGES/SGSP_1000x750.jpg","Skin Glow Starter Pack", 1099, 1299, "Bright & Glowing skin", "20% Vitamin C Serum, Skin Health Gummies");
let s23 = new skin(4,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1639450858/staging/products/buying-options/Anti-aging%20starter%20pack/0_BLUE/PRODUCT%20IMAGES/SIK_1000x750.jpg","Skin Illuminating Kit", 1149, 1299, "Dullness, Fine lines & wrinkles", "20% Vitamin C Serum, 1% Retinol Liposome Night Cream");
let s24 = new skin(4,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1620097921/staging/products/buying-options/Oil%20Control%20Starter%20Pack/New%20Carousel/Oil_Control_Starter_Pack.jpg","Oil Control Starter Pack", 599, 699, "Oil Control", "1% AHA-BHA Facewash, Ceramide Moisturiser");


localStorage.setItem("skin_products", JSON.stringify(skin_products));


//Weight Products

let weight_products = [];

function weight(rating, url, heading, price, strikedprice, use, ingredients){
    this.rating = rating
    this.url = url
    this.heading = heading
    this.price = price
    this.strikedprice = strikedprice
    this.use = use
    this.ingredients = ingredients

    weight_products.push(this)
}

let w1 = new weight(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1640076363/staging/products/active-assist-acv-gummies/0_ACV/CAROUSEL/0.jpg","Apple Cider Vinegar Gummies (30)", 599, null, "Gut health improvement", "Apple Cider Vinegar, Inulin");
let w2 = new weight(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1637312363/staging/products/active-assist-acv-gummies/Cylindrical%20Pack%20%2860%29/1N-1000x750.png","Apple Cider Vinegar Gummies (60)", 999, 1199, "Gut health improvement", "Apple Cider Vinegar, Inulin");
let w3 = new weight(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1637905761/staging/products/apple-cider-vinegar-effervescent-tablets/PRODUCT%20IMAGES/1000x750_ACVET.jpg","ACV Effervescent Tablets (15)", 399, null, "Weight Loss, Gut Health", "Apple Cider Vinegar, Vitamin B6 and B12");
let w4 = new weight(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1638857876/staging/products/apple-cider-vinegar-effervescent-tablets/PACK%20OF%202/acv-pack-of-2.png","ACV Effervescent Tablets (30)", 599, 798, "Weight Loss, Gut Health", "Apple Cider Vinegar, Vitamin B6 and B12");
let w5 = new weight(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1626765615/staging/products/Protein/1600x1200.jpg","Vegan Plant Protein Powder + Shaker", 1599, 1998, "Muscle toning, Bone Density Improvement", "4-Plant Based Proteins, 28 Vitamins and Minerals, 9 Amino Acids");
let w6 = new weight(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1636541751/staging/products/Protein/1_1000x750.png","Vegan Plant Protein Powder", 1499, 1599, "Muscle toning, Bone Density Improvement", "4-Plant Based Proteins, 28 Vitamins and Minerals, 9 Amino Acids");
let w7 = new weight(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1644488397/staging/products/active-assist-weight-tea/30%20Pack/PRODUCT%20IMAGES/AAT30_1000x750.jpg","Active Assist Tea", 499, null, "Curbing appetite", "Green Tea, Garcinia, Turmeric, Ginger");


localStorage.setItem("weight_products", JSON.stringify(weight_products));


//PCOS Products

let pcos_products = [];

function pcos(rating, url, heading, price, strikedprice, use, ingredients){
    this.rating = rating
    this.url = url
    this.heading = heading
    this.price = price
    this.strikedprice = strikedprice
    this.use = use
    this.ingredients = ingredients

    pcos_products.push(this)
}

let c1 = new pcos(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1635160165/staging/products/pms-gummies/PRODUCT%20IMAGES/PMS%20Gummies_1000x750.png","PMS Gummies", 999, null, "Managing PMS Symptoms", "Chasteberry Extract, L-tryptophan, St. John's wort");
let c2 = new pcos(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1629302467/staging/products/PCOS%20Balance%20Capsule/Carousel/Updated/PCOS_product_image_NEW.jpg","PCOS Balance Capsules", 599, null, "Irregular Periods", "Shatavari, Ashoka, Lodhra, Chandan");
let c3 = new pcos(5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1623500692/staging/products/PCOS%20Superfood/New%20Carousel/superdood_1000x750.jpg","PCOS Superfood: Insoitol Supplement", 539, 599, "Managing PCOS Symptoms", "Myo-Inositol, D-chiro-inositol, Multivitamins");
let c4 = new pcos(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1621260455/staging/products/Period%20Pain%20Relief%20Patch/Carousel/1000x750.jpg","Period Pain Relief Patch", 355, 399, "Menstrual Cramps", "Eucalyptus, Boswellia, Evening Primose Oil, Menthol");
let c5 = new pcos(5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1637158873/staging/products/PCOS%20Superfood/Pack%20of%202/1000x750-Pack_of_2.png","PCOS Superfood - 15 Sachet - Pack of 2", 999, 1199, "Managing PCOS Symptoms", "Myo-Inositol, D-chiro-inositol, Multivitamins");
let c6 = new pcos(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1631868631/staging/products/buying-options/pcos%20support%20kit/Period-pain-relief-patch-_-PCOS-capsules_1000X750.jpg","PCOS Support Kit", 799, 999, "Menstrual Cramps, Irregular Periods", "Period Pain Relief Patches, Shatavari PCOS Balance Capsules");
let c7 = new pcos(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1631868664/staging/products/buying-options/pcos%20control%20kit/Period-pain-relief-patch-_-PCOS-capsules_1600X1200.jpg","PCOS Control Kit", 899, 999, "Menstrual Cramps, Managing PCOS Syptoms", "Period Pain Relief Patches, PCOS Superfood");
let c8 = new pcos(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1631868728/staging/products/buying-options/pcos%20360%C2%B0%20kit/PCOS-Capsules-_-PCOS-Superfood_1000X750.jpg","PCOS 360° Kit", 999, 1198, "Irregular Periods, Managing PCOS Symptoms", "Shatavari PCOS Balance Capsules, PCOS Superfood");


localStorage.setItem("pcos_products", JSON.stringify(pcos_products));


//Feminine Products

let feminine_products = [];

function feminine(rating, url, heading, price, strikedprice, use, ingredients){
    this.rating = rating
    this.url = url
    this.heading = heading
    this.price = price
    this.strikedprice = strikedprice
    this.use = use
    this.ingredients = ingredients

    feminine_products.push(this)
}

let f1 = new feminine(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1624343637/staging/products/Intimate%20Wash/New%20Carousel/1600x1200.jpg","pH Balancing Intimate Wash", 349, null, "Maintaining ph balance & hygiene", "1% Niacinamide, Lactic Acid, Tea Tree");
let f2 = new feminine(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1614334593/staging/products/UTI%20shield%20capsule/Carousel/vitamic_C_serum_product_image.jpg","pH Balancing Intimate Wash", 599, null, "UTI Prevention", "D - Mannose, Cranberry Extract, Hibiscus Extract, Pobiotics");
let f3 = new feminine(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1617507488/staging/products/UTI%20Detection%20Strips/Carousel/1600x1200.jpg","pH Balancing Intimate Wash", 399, null, "UTI Detection", "Detection Reagents for Leukocyte & Nitrite");
let f4 = new feminine(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1619692195/staging/products/Intimate%20Care%20Serum/Carousel/1000x750.jpg","Intimate Care Serum", 399, 499, "Maintaining intimate hygiene", "3% Manjakani Extract, 2% Niacinamide, Kojic Acid");
let f5 = new feminine(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1622127981/staging/products/Chafing%20Guard%20Gel/Carousel/2.png","Anti Rash and Chafing Gel", 399, null, "Intimate area rashes & chafing", "Olive oil, Jojoba oil, Vitamin E");
let f6 = new feminine(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1622127929/staging/products/Intimate%20Powder/Carousel/1.png","Clotrimazole Intimate Powder", 249, 349, "Intimate area sweat, infections", "1% Clotrimazole, Zinc Oxide, Peppermint");
let f7 = new feminine(4.5,"https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1641384277/staging/products/buying-options/complete%20hygiene%20combo/PRODUCT%20IMAGES/CHC_1000x750.jpg","Complete Hygiene Combo", 599, 748, "Intimate area sweat, rashes & chafing", "Clotrimazole Intimate Powder, Anti Rash and Chafing Gel");



localStorage.setItem("femine_products", JSON.stringify(feminine_products));