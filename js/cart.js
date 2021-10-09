let cartItems = JSON.parse(localStorage.getItem("cartList")); 
const cartContainer = document.querySelector(".cart-page"); 
const totalContainer = document.querySelector(".total"); 
const purcaseButton = document.querySelector(".purcase-button");

let total = 0; 

cartItems.forEach(function(cartElement) {
    total += parseInt(cartElement.prices.price); 
    cartContainer.innerHTML += 
    `<div class="cartContainer">
        <img src="${cartElement.images[0].src}" alt="${cartElement.name}">        
        <h4>${cartElement.name}</h4>
        <p>${cartElement.prices.price} kr<p>
        <button class="remove-button" id="${cartElement.id}">X</button>
    </div>`
}); 

totalContainer.innerHTML = `<p>Total: ${total} kr</p>`;
purcaseButton.innerHTML = `<div class="buttonContainer"><a href="checkout.html" class="purcaseButton">Purcase order</button></div>`


document.querySelectorAll('.remove-button').forEach(item => {
    item.addEventListener('click', event => {
        cartItems = JSON.parse(localStorage.getItem("cartList"));
        for (let index = 0; index < cartItems.length; index++) {
            if(cartItems[index].id == event.srcElement.id){
                cartItems.splice(index, 1);
                localStorage.setItem("cartList", JSON.stringify(cartItems));
                location.reload();
                break;
            }
        }
    });
});