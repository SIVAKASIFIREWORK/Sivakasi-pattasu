document.addEventListener("DOMContentLoaded", function() {
  console.log("Products page loaded");
  console.log("productsData:", window.productsData);

  const container = document.getElementById("products-container") || document.querySelector(".products-grid") || document.querySelector("main");

  function displayProducts(products) {
    if (!products || products.length === 0) {
      console.log("No products found!");
      if (container) container.innerHTML = "<h3 style='text-align:center; margin-top:20px;'>Products loading... Check js/products-data.js</h3>";
      return;
    }

    let target = document.getElementById("products-container");
    if (!target) {
      // products-container id illana namma create pannuvom
      target = document.createElement("div");
      target.id = "products-container";
      target.style.display = "grid";
      target.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
      target.style.gap = "15px";
      target.style.padding = "20px";
      const searchBox = document.querySelector("input");
      if (searchBox) searchBox.parentElement.insertAdjacentElement("afterend", target);
      else document.body.appendChild(target);
    }

    target.innerHTML = "";
    products.forEach(p => {
      target.innerHTML += `
        <div style="border:1px solid #ddd; border-radius:10px; padding:10px; text-align:center; background:white;">
          <img src="${p.image}" alt="${p.name}" style="width:100%; height:150px; object-fit:cover; border-radius:8px;">
          <h4 style="margin:10px 0 5px 0;">${p.name}</h4>
          <p style="color:#666; font-size:13px;">${p.content}</p>
          <p><span style="color:green; font-weight:bold; font-size:18px;">Rs. ${p.price}</span> <span style="text-decoration:line-through; color:#999;">Rs. ${p.originalPrice}</span></p>
          <button onclick="addToCart(${p.id})" style="background:#d32f2f; color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer;">Add to Cart</button>
        </div>
      `;
    });
  }

  // Display immediately from local file
  if (window.productsData) {
    displayProducts(window.productsData);
  } else {
    console.error("products-data.js load aagala! File path check pannunga: js/products-data.js");
  }

  // Search function
  window.searchProducts = function(query) {
    const filtered = window.productsData.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    displayProducts(filtered);
  }
});

function addToCart(id) {
  alert("Product " + id + " added to cart!");
  // Unga cart logic inga
}
