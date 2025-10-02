// Generowanie wartosci dla wybierania ilosci produktow

function optionSelectFunction() {
    let html = `<option selected value="1">1</option>\n`;
    for (let i = 2; i<=10; i++) {
        html += `<option value="${i}">${i}</option>\n`;
    }
    return html;
}

////////////////////////////////////////////////////////////


let productsHTML = '';

products.forEach((product) => {
    productsHTML +=  `
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
        <select class="option-select">
           ${optionSelectFunction()}
        </select>
        <div class="item-button-container">
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

document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        let matchingItem;

        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        });
        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            });
        }
        console.log(cart);
        });
    });