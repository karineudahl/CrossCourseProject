const url = "http://localhost/wordpress/wp-json/wc/store/products";
const productContainer = document.querySelector(".productsContainer");

async function getProducts() {
    try {
        const response = await fetch(url); 
        const getResults = await response.json();
        createContent(getResults);
    }

    catch(error) {
        console.log(error);
    }
}

getProducts();


function createContent(products) {
    products.forEach(function(product) {
        productContainer.innerHTML += 
        `<div class="products">
            <h2>${product.name}</h2>
            <img src="${product.images[0].src}" alt="${product.name}">
        </div>`;
    })
}

createContent();