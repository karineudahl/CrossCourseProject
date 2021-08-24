const detailContainer = document.querySelector(".jackets-details"); 

const queryString = document.location.search; 
const params = new URLSearchParams(queryString);
const id = params.get("id"); 
console.log(id);

const url = "https://student-noroff.store//wp-json/wc/store/products/" + id;

console.log(url)

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
            <div>
                <h1>${details.name}</h1>
                <h4>Description</h4>
                <p>${details.description}</p>
                <p>${details.prices.price} $</p>
                <button class="add-to-cart">Add to cart</button>
            </div>
        </div>`
} 