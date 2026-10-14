let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cartItems");
const totalContainer = document.getElementById("totalPrice");

function loadCart(){

    if(cart.length === 0){

        cartContainer.innerHTML = "<h3>Your Cart is Empty</h3>";
        totalContainer.innerHTML = "Total : ₹0";

        return;
    }

    let html = "";
    let total = 0;

    cart.forEach((item,index)=>{

        if(!item.qty){
            item.qty = 1;
        }

        total += item.price * item.qty;

        html += `
        <div class="product-card">

            <h3>${item.name}</h3>

            <p>Price : ₹${item.price}</p>

            <p>
                <button onclick="decreaseQty(${index})">-</button>

                <strong style="margin:0 10px;">
                    ${item.qty}
                </strong>

                <button onclick="increaseQty(${index})">+</button>
            </p>

            <p><strong>Subtotal : ₹${item.price * item.qty}</strong></p>

            <button onclick="removeItem(${index})">
                Remove
            </button>

        </div>
        `;

    });

    cartContainer.innerHTML = html;
    totalContainer.innerHTML = "Total : ₹" + total;

    localStorage.setItem("cart", JSON.stringify(cart));
}

function increaseQty(index){

    cart[index].qty++;
    loadCart();

}

function decreaseQty(index){

    if(cart[index].qty > 1){
        cart[index].qty--;
    }

    loadCart();

}

function removeItem(index){

    cart.splice(index,1);

    loadCart();

}

loadCart();