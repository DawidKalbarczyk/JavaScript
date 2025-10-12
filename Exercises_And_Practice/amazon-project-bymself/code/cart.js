// Eksport zmiennej do //
export let cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
}, {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
}];

export function addToCart(productId) {
    //Nalezy przypisac wartosc do matchinItem//
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    ///////////////////////////////////////////
    ///////Sparsowanie do inta oraz nadanie wartosci value z selecta do zmiennej//////////
    const selectorQuantity = parseInt(document.querySelector(`.js-quantity-selector-${productId}`).value,10);
    if (matchingItem) {
        matchingItem.quantity += selectorQuantity;
        ///// Zastapienie selectorQuantity zamiast +1////////
    } else {
        cart.push({
            productId: productId,
            quantity: selectorQuantity
        });
    }
}
export function cartAbove() {
    let quantity = document.querySelector('.js-cart-quantity');
    console.log(quantity);
    if (quantity.innerHTML >= 10 && quantity.innerHTML < 100) {
        quantity.classList.add('cart-above-10');
    } else if (quantity.innerHTML >= 100) {
        quantity.classList.add('cart-above-100');
    } else {
        quantity.classList.remove('cart-above-10');
        quantity.classList.remove('cart-above-100');
    }
}

export function removeFromCart(productId) {
    const newCart = [];
    cart.forEach((item) => {
        if (item.productId !== productId ) {
            newCart.push(item);
        }
    })

    cart = newCart;
}