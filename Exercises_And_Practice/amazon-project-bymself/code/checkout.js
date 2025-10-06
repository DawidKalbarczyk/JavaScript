function updateItems() {
    document.querySelector('.js-items-nr').innerHTML = (JSON.parse(localStorage.getItem('cart')) || 0) + " items";
}
function resetCart() {
    localStorage.removeItem('cart');
    updateItems();
}

updateItems();
document.querySelector('.js-reset-cart-button').addEventListener('click', () => {
    const decision = confirm("Are you sure you want to reset the cart?");
    if (decision) {
        resetCart();
        alert('You have reset the cart.');
    } else {
        alert('You haven\'t reset the cart.');
    }
});

import {cart} from "./cart.js";
import {products} from "./products.js";

let cartSummaryHTML = '';
cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let matchingProduct;
    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });
    cartSummaryHTML += `
    <div class="order-summary-container1">
      <p class="delivery-date">Delivery date: Tuesday, June 21</p>
      <div class="items-container">
        <div class="item-container1">
          <img class="item-photo" src="${matchingProduct.image}">
        </div>
        <div class="item-container2">
          <p class="item-name">${matchingProduct.name}</p>
          <p class="item-price">${matchingProduct.price / 100}</p>
          <div class="quantity-container">
            <p style="white-space: nowrap;">${cartItem.quantity}</p>
            <p class="quantity-update">Update</p>
            <p class="quantity-delete">Delete</p>
          </div>
        </div>
        <div class="item-container3">
          <div>
            <p class="delivery-option-paragraph">Choose a delivery option:</p>
            <div class="delivery-option-container">
              <input class="delivery-option-checkbox" type="checkbox">
              <div class="delivery-option-info">
                <p class="delivery-option-date">Tuesday, June 21</p>
                <p class="delivery-option-shipping">FREE Shipping</p>
              </div>
            </div>
          </div>
    
    
    
          <div class="delivery-option-container">
            <input class="delivery-option-checkbox" type="checkbox">
            <div class="delivery-option-info">
              <p class="delivery-option-date">Wednesday, June 15</p>
              <p class="delivery-option-shipping">$4.99 Shipping</p>
            </div>
          </div>
    
    
          <div class="delivery-option-container">
            <input class="delivery-option-checkbox" type="checkbox">
            <div class="delivery-option-info">
              <p class="delivery-option-date">Monday, June 13</p>
              <p class="delivery-option-shipping">$9.99 Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
`});
console.log(cartSummaryHTML);
//document.querySelector('.js-checkout-button').innerHTML = cartSummaryHTML;

13:15:35