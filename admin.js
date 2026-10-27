// Sivakasi Pattasu Admin JS

const db = firebase.database();

const productList = document.getElementById("productList");
const statusBox = document.getElementById("status");


// Load Products From Firebase

function loadProducts(){

    db.ref("products").once("value")
    .then((snapshot)=>{

        const products = snapshot.val();

        if(!products){
            statusBox.innerHTML = "No Products Found";
            return;
        }

        let html = "";

        Object.keys(products).forEach((key)=>{

            let product = products[key];

            html += `
            <div class="product-card">

                <h3>${product.name}</h3>

                <p>ID : ${product.id}</p>

                <p>
                Price:
                <input 
                type="number"
                id="price-${key}"
                value="${product.price}">
                </p>


                <p>
                Name:
                <input 
                type="text"
                id="name-${key}"
                value="${product.name}">
                </p>


                <p>
                Image:
                <input 
                type="text"
                id="image-${key}"
                value="${product.image || ''}">
                </p>


                <button onclick="updateProduct('${key}')">
                Update
                </button>

            </div>
            `;

        });


        productList.innerHTML = html;


    })
    .catch((error)=>{

        statusBox.innerHTML =
        "Error : " + error.message;

    });

}


// Update Product

function updateProduct(key){

    let newName =
    document.getElementById("name-"+key).value;


    let newPrice =
    Number(document.getElementById("price-"+key).value);


    let newImage =
    document.getElementById("image-"+key).value;


    db.ref("products/"+key).update({

        name:newName,
        price:newPrice,
        image:newImage

    })
    .then(()=>{

        alert("Product Updated Successfully");

    })
    .catch((error)=>{

        alert(error.message);

    });

}


loadProducts();
