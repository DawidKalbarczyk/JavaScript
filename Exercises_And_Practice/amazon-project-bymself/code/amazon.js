// Generowanie wartosci dla wybierania ilosci produktow

function optionSelectGenerate() {
    let html = `<option selected value="1">1</option>\n`;
    for (let i = 2; i<=10; i++) {
        html += `<option value="${i}">${i}</option>\n`;
    }
    return html;
}

////////////////////////////////////////////////////////////
// Import z pliku cart.js ktory ma export w zmiennej//
import {cart, addToCart} from "./cart.js";
import {products} from "./products.js";
let productsHTML = '';


12:55;45
/////////////////Generowanie HTML///////////////////////////////
products.forEach((product) => {
    productsHTML += `
    <div class="item-container">
      <div class="photo-container">
        <img class="photo" src="${product.image}" tabindex="0">
      </div>
      <div class="item-info-container">
        <p class="item-info">${product.name}</p>
        <div class="stars-container">
          <img class="stars-photo" src="images/ratings/rating-${product.rating.stars * 10}.png">
          <p class="stars-text">${product.rating.count}</p>
        </div>
        <p class="item-price">$${(product.priceCents / 100).toFixed(2)}</p>
        <select class="option-select js-quantity-selector-${product.id}">
           ${optionSelectGenerate()}
        </select>
        <div class="item-button-container">
          <div class="added-to-cart-container js-added-to-cart-container-${product.id}">
            <img class="added-to-cart-img" src="images/icons/checkmark.png">
            <div class="added-to-cart-text">
              Added
            </div>
          </div>
          <button class="item-button js-add-to-cart-button"
          data-product-id="${product.id}">
          Add to Cart</button>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-products-grid')
    .innerHTML = productsHTML;





////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////






//Zmienna globalna dla timeout//
let timeoutId = [];
let index = 0;
////////////////////////////////





////////////////////////Nasluchiwanie przycisku i obliczanie ilosci w cart////////////////////////////////
function updateCartQuantity(productId) {
    /////// Obliczenie calkowitej ilosci przedmiotow w koszyku //////
    let totalQuantity = 0;
    cart.forEach((cartItem) => {
        totalQuantity = totalQuantity += cartItem.quantity;
    });
    document.querySelector('.js-cart-items').innerHTML = totalQuantity;
    /////////////////////////////////////////////////////////////////



    // Wyczyszczenie timeouta (aby mogl powstac nowy podczas klikniecia przycisku w trakcie trwania starego timeouta) //
    clearTimeout(timeoutId[index]);

    //Nadanie i odebranie klasy z opacity: 1 do kontenera z Added //
    document.querySelector(`.js-added-to-cart-container-${productId}`).classList.add('added-to-cart-container-active');
    timeoutId[index] = setTimeout(() => {
        document.querySelector(`.js-added-to-cart-container-${productId}`).classList.remove('added-to-cart-container-active');
    }, 2500);
    index++;
}





document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
        // Skrot dekonstrukcyjny. Skraca obie strony (po prawej po kropce rowniez jest .productId///
        const { productId } = button.dataset;
        addToCart(productId);
        updateCartQuantity(productId);
    });
});
