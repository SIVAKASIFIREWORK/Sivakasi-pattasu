function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach(item=>{
        count += item.qty || 1;
    });

    const cartCount = document.getElementById("cartCount");

    if(cartCount){
        cartCount.innerText = count;
    }

}

updateCartCount();
