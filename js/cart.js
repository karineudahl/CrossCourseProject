let addToCarts = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector(".cart-count");

let products = [
    {
        name: "Lofoten Jacket",
        tag: "lofotenjacket",
        price: 1499,
        inCart: 0
    }
]

for (let i = 0; i < addToCarts.length; i++) {
    addToCarts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
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
    console.log("Inside of setItems"); 
    console.log("My product is", product);
}

cartCountCheck();