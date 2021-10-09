const detailContainer = document.querySelector(".jackets-details"); 
const menuDetails = document.querySelector(".jacket-details-menu");
const queryString = document.location.search; 
const params = new URLSearchParams(queryString);
const id = params.get("id"); 
const url = "https://rainydays.student-noroff.store/wp-json/wc/store/products/" + id;

let cartArray = [];

async function detailsApi() {
    try {
        const response = await fetch(url); 
        const details = await response.json(); 
        createHtml(details); 
        createMenu(details)
    }
    
    catch(error) {
        detailContainer.innerHTML = "An error has occured"; 
    }
}

detailsApi(); 

function createHtml(details) {
    detailContainer.innerHTML = 
        `<div class="jacketContainer">
            <div>
                <img src="${details.images[0].src}" alt="${details.name}"> 
            </div>
            <div class="jacketDescription">
                <h1>${details.name}</h1>
                <h4>Description</h4>
                <p>${details.description}</p>
                <p>${details.prices.price} kr</p>
                <button class="add-to-cart" data-product="${details.id}">Add to cart</button>
            </div>
        </div>`

        const buttons = document.querySelectorAll(".add-to-cart");

        buttons.forEach(function(button) {
            button.onclick = function() { 

                alert("Item added to cart");
                
                cartArray = JSON.parse(localStorage.getItem("cartList"));
                if(cartArray === null) cartArray = [];
                cartArray.push(details);
                localStorage.setItem("cartList", JSON.stringify(cartArray));
            }
        })
}  

function createMenu(details) {
    menuDetails.innerHTML = 
        `<nav class="wheremAmI-container">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="shop.html"><i class="fas fa-chevron-right"></i> Jackets</a></li>
                <li><a class="wheremAmI"><i class="fas fa-chevron-right"></i> ${details.name}</a></li>
            </ul>
        </nav>`
}; 