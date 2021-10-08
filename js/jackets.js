const detailContainer = document.querySelector(".jackets-details"); 

const queryString = document.location.search; 
const params = new URLSearchParams(queryString);
const id = params.get("id"); 
const url = "https://rainydays.student-noroff.store/wp-json/wc/store/products/" + id;

const cartList = document.querySelectorAll(".cart-list");
const totalContainer = document.querySelector(".total");

let cartArray = [];

async function detailsApi() {
    try {
        const response = await fetch(url); 
        const details = await response.json(); 
        createHtml(details); 

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
            button.onclick = function(event) { 
                // const itemToAdd = details.find(item => item.id === event.target.dataset.product)
                cartArray.push(event.target.dataset.product);
              
                localStorage.setItem("cartList", JSON.stringify(cartArray));
            }
        })
}  




        // function showCart(cartItems) {

        //     cartItems.forEach(function(cartElement) {
        //         cartList.innerHTML += 
        //         `<div>
        //             <h4>${cartElement.name}</h4>
        //         </div>`
        //     })

        // }



