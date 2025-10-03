// Eksport zmiennej do //
export const cart = [];

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