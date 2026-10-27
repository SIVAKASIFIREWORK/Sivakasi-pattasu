// Display Products
function displayProducts(productList) {
    let html = "";

    productList.forEach(product => {
        html += `
        <div class="product-card">

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
                onclick="openImage('${product.image}', '${product.name}')"
                style="cursor: pointer;"
            >

            <h3>${product.name}</h3>

            <p><strong>Category:</strong> ${product.category}</p>

            <p>₹${product.price}</p>

            <button onclick="addToCart(${product.id})">
                🛒 Add to Cart
            </button>

        </div>
        `;
    });

    document.getElementById("products").innerHTML = html;
}

// Add to Cart

window.products = [
    
{
id:1,
name:"7 CM Electric Sparklers",
price:10,
category:"Sparklers",
image:"images/7cm-electric.jpg"
},

{
id:2,
name:"7 CM Colour Sparklers",
price:12,
category:"Sparklers",
image:"images/7cm-colour.jpg"
},

{
id:3,
name:"10 CM Electric Sparklers",
price:17,
category:"Sparklers",
image:"images/10cm-electric.jpg"
},

{
id:4,
name:"10 CM Colour Sparklers",
price:19,
category:"Sparklers",
image:"images/10cm-colour.jpg"
},

{
id:5,
name:"10 CM Red Sparklers",
price:21,
category:"Sparklers",
image:"images/10cm-red.jpg"
},

{
id:6,
name:"10 CM Green Sparklers",
price:22,
category:"Sparklers",
image:"images/10cm-green.jpg"
},

{
id:7,
name:"12 CM Electric Sparklers",
price:23,
category:"Sparklers",
image:"images/12cm-electric.jpg"
},

{
id:8,
name:"12 CM Colour Sparklers",
price:25,
category:"Sparklers",
image:"images/12cm-colour.jpg"
},

{
id:9,
name:"15 CM Electric Sparklers",
price:32,
category:"Sparklers",
image:"images/15cm-electric.jpg"
},

{
id:10,
name:"15 CM Colour Sparklers",
price:36,
category:"Sparklers",
image:"images/15cm-colour.jpg"
},

{
id:11,
name:"15 CM Red Sparklers",
price:42,
category:"Sparklers",
image:"images/15cm-red.jpg"
},

{
id:12,
name:"15 CM Green Sparklers",
price:46,
category:"Sparklers",
image:"images/15cm-green.jpg"
},

{
id:13,
name:"30 CM Electric Sparklers",
price:43,
category:"Sparklers",
image:"images/30cm-electric.jpg"
},

{
id:14,
name:"30 CM Colour Sparklers",
price:47,
category:"Sparklers",
image:"images/30cm-colour.jpg"
},

{
id:15,
name:"Flower Pots Big",
price:52,
category:"Flower Pots",
image:"images/flowerpots-big.jpg"
},
{
id:16,
name:"Flower Pots Special",
price:120,
category:"Flower Pots",
image:"images/flowerpots-special.jpg"
},
{
id:17,
name:"Colour Koti",
price:180,
category:"Flower Pots",
image:"images/colour-koti.jpg"
},
{
id:18,
name:"Ground Chakkar Big",
price:48,
category:"Chakkars",
image:"images/ground-chakkar-big.jpg"
},
{
id:19,
name:"Ground Chakkar Special",
price:80,
category:"Chakkars",
image:"images/ground-chakkar-special.jpg"
},
{
id:20,
name:"Ground Chakkar Deluxe",
price:140,
category:"Chakkars",
image:"images/ground-chakkar-deluxe.jpg"
},
{
id:21,
name:"1½ Feet 7 Star",
price:26,
category:"Twinkling Star",
image:"images/1-5feet-7star.jpg"
},
{
id:22,
name:"4 Feet 7 Star",
price:68,
category:"Twinkling Star",
image:"images/4feet-7star.jpg"
},
{
id:23,
name:"Minionies Candle Mega",
price:145,
category:"Wonder Candle",
image:"images/minionies-candle-mega.jpg"
},
{
id:24,
name:"Navrang Multi Candle",
price:165,
category:"Wonder Candle",
image:"images/navrang-multi-candle.jpg"
},
{
id:25,
name:"Goodly Candle Mega",
price:145,
category:"Wonder Candle",
image:"images/goodly-candle-mega.jpg"
},
{
id:26,
name:"Free Fire Green",
price:130,
category:"Crackling Green",
image:"images/free-fire-green.jpg"
},
{
id:27,
name:"King of King Bomb",
price:0,
category:"Bombs",
image:"images/king-of-king.jpg"
},
{
id:28,
name:"Classic Bomb",
price:0,
category:"Bombs",
image:"images/classic-bomb.jpg"
},
{
id:29,
name:"Deluxe Bomb",
price:0,
category:"Bombs",
image:"images/deluxe-bomb.jpg"
},
{
id:30,
name:"Digital Bomb",
price:0,
category:"Bombs",
image:"images/digital-bomb.jpg"
},
{
id:31,
name:"28 Deluxe Wala",
price:115,
category:"Wala Crackers",
image:"images/28-deluxe-wala.jpg"
},
{
id:32,
name:"56 Deluxe Wala",
price:225,
category:"Wala Crackers",
image:"images/56-deluxe-wala.jpg"
},
{
id:33,
name:"100 Deluxe Wala",
price:385,
category:"Wala Crackers",
image:"images/100-deluxe-wala.jpg"
},
{
id:34,
name:"1000 Wala",
price:720,
category:"Wala Crackers",
image:"images/1000-wala.jpg"
},
{
id:35,
name:"Red Bijili",
price:58,
category:"Bijili",
image:"images/red-bijili.jpg"
},
{
id:36,
name:"Stripped Bijili",
price:78,
category:"Bijili",
image:"images/stripped-bijili.jpg"
},
{
id:37,
name:"Bullet Bomb",
price:92,
category:"One Sound",
image:"images/bullet-bomb.jpg"
},
{
id:38,
name:"Hydro Bomb",
price:105,
category:"One Sound",
image:"images/hydro-bomb.jpg"
},
{
id:39,
name:"Rocket Bomb",
price:75,
category:"Rockets",
image:"images/rocket-bomb.jpg"
},
{
id:40,
name:"Colour Rocket",
price:145,
category:"Rockets",
image:"images/colour-rocket.jpg"
},
{
id:41,
name:"Peacock Fountain",
price:240,
category:"Fancy",
image:"images/peacock-fountain.jpg"
},
{
id:42,
name:"Colour Crackling Fountain",
price:275,
category:"Fancy",
image:"images/colour-crackling-fountain.jpg"
},
{
id:43,
name:"Twin Colour Fountain",
price:295,
category:"Fancy",
image:"images/twin-colour-fountain.jpg"
},
{
id:44,
name:"Whistling Fountain",
price:165,
category:"Fancy",
image:"images/whistling-fountain.jpg"
},
{
id:45,
name:"Magic Pop",
price:85,
category:"Kids",
image:"images/magic-pop.jpg"
},
{
id:46,
name:"Electric Stone",
price:90,
category:"Kids",
image:"images/electric-stone.jpg"
},
{
id:47,
name:"Magic Whip",
price:110,
category:"Kids",
image:"images/magic-whip.jpg"
},
{
id:48,
name:"30 Items Gift Box",
price:650,
category:"Gift Box",
image:"images/giftbox-30.jpg"
},
{
id:49,
name:"50 Items Gift Box",
price:1100,
category:"Gift Box",
image:"images/giftbox-50.jpg"
},
{
id:50,
name:"60 Items Gift Box",
price:1450,
category:"Gift Box",
image:"images/giftbox-60.jpg"
},
{
id:51,
name:"2½ Inch Twinkling Star",
price:180,
category:"Fancy",
image:"images/2-5inch-twinkling-star.jpg"
},
{
id:52,
name:"3½ Inch Twinkling Star",
price:240,
category:"Fancy",
image:"images/3-5inch-twinkling-star.jpg"
},
{
id:53,
name:"5 Inch Twinkling Star",
price:320,
category:"Fancy",
image:"images/5inch-twinkling-star.jpg"
},
{
id:54,
name:"Mini Aerial Fancy",
price:350,
category:"Aerial",
image:"images/mini-aerial-fancy.jpg"
},
{
id:55,
name:"Mega Multi Shot",
price:650,
category:"Multi Shot",
image:"images/mega-multishot.jpg"
},
{
id:56,
name:"Super Multi Shot",
price:950,
category:"Multi Shot",
image:"images/super-multishot.jpg"
},
{
id:57,
name:"Gun Crackers",
price:175,
category:"Gun Series",
image:"images/gun-crackers.jpg"
},
{
id:58,
name:"Paper Bomb",
price:65,
category:"Kids",
image:"images/paper-bomb.jpg"
},
{
id:59,
name:"Colour Smoke",
price:220,
category:"Fancy",
image:"images/colour-smoke.jpg"
},
{
id:60,
name:"Festival Special Gift Box",
price:1850,
category:"Gift Box",
image:"images/festival-special-gift-box.jpg"
},
{
id:61,
name:"7 Shot Aerial",
price:450,
category:"Aerial",
image:"images/7-shot-aerial.jpg"
},
{
id:62,
name:"12 Shot Aerial",
price:780,
category:"Aerial",
image:"images/12-shot-aerial.jpg"
},
{
id:63,
name:"25 Shot Aerial",
price:1450,
category:"Aerial",
image:"images/25-shot-aerial.jpg"
},
{
id:64,
name:"30 Shot Aerial",
price:1750,
category:"Aerial",
image:"images/30-shot-aerial.jpg"
},
{
id:65,
name:"Rainbow Fountain",
price:280,
category:"Fancy",
image:"images/rainbow-fountain.jpg"
},
{
id:66,
name:"Silver Shower",
price:310,
category:"Fancy",
image:"images/silver-shower.jpg"
},
{
id:67,
name:"Golden Shower",
price:330,
category:"Fancy",
image:"images/golden-shower.jpg"
},
{
id:68,
name:"Disco Wheel",
price:210,
category:"Fancy",
image:"images/disco-wheel.jpg"
},
{
id:69,
name:"Helicopter",
price:190,
category:"Kids",
image:"images/helicopter.jpg"
},
{
id:70,
name:"Magic Pencil",
price:95,
category:"Kids",
image:"images/magic-pencil.jpg"
},
{
id:71,
name:"Red Colour Smoke",
price:180,
category:"Colour Smoke",
image:"images/red-colour-smoke.jpg"
},
{
id:72,
name:"Green Colour Smoke",
price:180,
category:"Colour Smoke",
image:"images/green-colour-smoke.jpg"
},
{
id:73,
name:"Blue Colour Smoke",
price:180,
category:"Colour Smoke",
image:"images/blue-colour-smoke.jpg"
},
{
id:74,
name:"Yellow Colour Smoke",
price:180,
category:"Colour Smoke",
image:"images/yellow-colour-smoke.jpg"
},
{
id:75,
name:"Peacock Fountain",
price:350,
category:"Fancy Fountain",
image:"images/peacock-fountain.jpg"
},
{
id:76,
name:"Magic Peacock",
price:420,
category:"Fancy Fountain",
image:"images/magic-peacock.jpg"
},
{
id:77,
name:"Colour Rain Fountain",
price:295,
category:"Fancy Fountain",
image:"images/colour-rain-fountain.jpg"
},
{
id:78,
name:"Disco Fountain",
price:315,
category:"Fancy Fountain",
image:"images/disco-fountain.jpg"
},
{
id:79,
name:"Whistling Wheel",
price:240,
category:"Fancy",
image:"images/whistling-wheel.jpg"
},
{
id:80,
name:"Festival Mega Gift Box",
price:2200,
category:"Gift Box",
image:"images/festival-mega-gift-box.jpg"
}
];

// Add to Cart
function addToCart(id) {

const product = window.products.find(p => p.id === id);
    
    if (!product) {
        alert("Product not found!");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            qty: 1
        });
    }

    // Save cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count immediately
    const cartCount = document.getElementById("cartCount");

    if (cartCount) {
        const count = cart.reduce(
            (total, item) => total + (item.qty || 1),
            0
        );

        cartCount.textContent = count;
    }

    alert(product.name + " Added to Cart");
}

// Search
function searchProducts(){

    const input = document.getElementById("searchBox").value.toLowerCase();

    const filtered = window.products.filter(product =>
        product.name.toLowerCase().includes(input)
    );

    displayProducts(filtered);
}

// Category Filter
function filterProducts(){

    const category = document.getElementById("categoryFilter").value;

    if(category === "All"){
        displayProducts(window.products);
        return;
    }

    const filtered = window.products.filter(product =>
        product.category === category
    );

    displayProducts(filtered);
}

displayProducts(window.products);

// Open product image
function openImage(imageSrc, productName) {
    const viewer = document.getElementById("imageViewer");
    const preview = document.getElementById("previewImage");
    const title = document.getElementById("previewTitle");

    preview.src = imageSrc;
    preview.alt = productName;
    title.textContent = productName;

    viewer.style.display = "flex";
            }
db.ref("products").once("value")
.then((snapshot) => {

    const data = snapshot.val();

    if (data) {
        window.products = Object.values(data);
        displayProducts(window.products);
    }

})
.catch((error) => {
    console.error(error);
});
