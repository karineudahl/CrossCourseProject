const addToCarts = document.querySelectorAll("#add-to-cart");
const cartCount = document.querySelector(".cart-count");
const productContainer = document.querySelector(".product-container");

let products = [
    {
        name: "Lofoten Jacket",
        tag: "lofotenjacket",
        price: 1499,
        inCart: 0
    },
    {
        name: "Senja Jacket",
        tag: "senjajacket",
        price: 1499,
        inCart: 0
    },
    {
        name: "Romsdalen Jacket",
        tag: "romsdalenjacket",
        price: 1499,
        inCart: 0
    }
];

for (let i = 0; i < addToCarts.length; i++) {
    addToCarts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function cartCountCheck() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers) {
        cartCount.innerHTML = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        cartCount.innerHTML = `${productNumbers++}`;
       
    } else {
        localStorage.setItem("cartNumbers", 1);
        cartCount.innerHTML = `1`;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if(cartItems !== null) {
        if(cartItems[product.tag] === undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1; 
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem("totaltCost"); 

    if(cartCost !== null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totaltCost", cartCost + product.price)
    } else {
        localStorage.setItem("totaltCost", product.price);
    }
    
}

function displayCart() {
    let cartItem = localStorage.getItem("productsInCart");
    cartItem = JSON.parse(cartItem);

    if(cartItem && productContainer) {
        console.log("running");
    }
}


cartCountCheck();
displayCart();