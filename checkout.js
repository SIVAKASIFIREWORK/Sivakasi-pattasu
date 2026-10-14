function placeOrder(){

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const address = document.getElementById("address").value.trim();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(name === "" || mobile === "" || address === ""){

        alert("Please fill all fields");
        return;

    }

    if(cart.length === 0){

        alert("Your cart is empty");
        return;

    }

    let message = "🎆 *Sivakasi Pattasu Order*\n\n";

    message += "👤 Name : " + name + "\n";
    message += "📱 Mobile : " + mobile + "\n";
    message += "📍 Address : " + address + "\n\n";

    message += "🛒 *Products*\n";

    let total = 0;

    cart.forEach(item => {

        const subtotal = item.price * item.qty;

        message +=
        "• " + item.name +
        "\n   Qty : " + item.qty +
        "\n   Price : ₹" + item.price +
        "\n   Total : ₹" + subtotal + "\n\n";

        total += subtotal;

    });

    message += "💰 Grand Total : ₹" + total;

    const whatsapp =
    "https://wa.me/918220216784?text=" +
    encodeURIComponent(message);

    window.open(whatsapp, "_blank");

}