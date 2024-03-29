const url = "https://rainydays.student-noroff.store/wp-json/wc/store/products/";
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

    productContainer.innerHTML = "";

    products.forEach(function(product) {
        productContainer.innerHTML += 
        `<a href="jackets.html?id=${product.id}" class="products">           
            <img src="${product.images[0].src}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.prices.price} kr</p>
        </a>`;
    })
}