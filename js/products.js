
// Display Products
function displayProducts(productList) {
    let html = "";
    productList.forEach(product => {
        html += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="openImage('${product.image}', '${product.name}')" style="cursor:pointer;">
            <h3>${product.name}</h3>
            <p><strong>Category:</strong> ${product.category}</p>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">🛒 Add to Cart</button>
        </div>`;
    });
    const container = document.getElementById("products");
    if(container) container.innerHTML = html;
}

function addToCart(id){
    const product = window.products.find(p => p.id === id);
    if(!product){ alert("Product not found!"); return; }
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.id === id);
    if(existing){ existing.qty = (existing.qty || 1) + 1; }
    else { cart.push({id:product.id,name:product.name,price:product.price,qty:1}); }
    localStorage.setItem("cart", JSON.stringify(cart));
    const cartCount = document.getElementById("cartCount");
    if(cartCount){ cartCount.textContent = cart.reduce((t,i)=>t+(i.qty||1),0); }
    alert(product.name + " Added to Cart");
}

function searchProducts(){
    const input = document.getElementById("searchBox").value.toLowerCase();
    displayProducts(window.products.filter(p=>p.name.toLowerCase().includes(input)));
}
function filterProducts(){
    const category = document.getElementById("categoryFilter").value;
    if(category==="All"){ displayProducts(window.products); return; }
    displayProducts(window.products.filter(p=>p.category===category));
}
function openImage(imageSrc, productName){
    const viewer = document.getElementById("imageViewer");
    const preview = document.getElementById("previewImage");
    const title = document.getElementById("previewTitle");
    if(viewer && preview && title){
        preview.src=imageSrc; preview.alt=productName; title.textContent=productName;
        viewer.style.display="flex";
    }
}

// MAIN LOGIC - FIXED
// Local data-வை முதல்ல set பண்ணுது, அப்புறம் Firebase-ல இருந்து update பண்ணுது
window.products = window.productsData || [];

if(typeof firebase !== 'undefined' && firebase.database){
    firebase.database().ref("products").once("value")
    .then((snapshot) => {
        const data = snapshot.val();
        if(data){
            // Firebase-ல data இருந்தா அதை எடுக்கும்
            window.products = Array.isArray(data) ? data : Object.values(data);
            console.log("Loaded from Firebase:", window.products.length);
        } else {
            console.log("Firebase null, using local data:", window.products.length);
        }
        displayProducts(window.products);
    })
    .catch((error) => {
        console.error("Firebase read error:", error);
        displayProducts(window.products); // Error வந்தாலும் local data காட்டும்
    });
} else {
    // Firebase இல்லனா local data காட்டும்
    displayProducts(window.products);
}
