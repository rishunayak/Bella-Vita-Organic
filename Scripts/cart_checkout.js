function checkout_cart() {
    return `<div id="cartItems"></div>
            <hr>
            <div id="promoContainer">
                <input oninput="promo()" id="promoInput" type="text" placeholder="Gift card or discount code">
                <button id="promoBtn">Apply</button>
            </div>
            <hr>
            <div id="subtotalContainer">
                <div id="subtotal">
                    <span>Subtotal</span>
                    <span id="sub_amount">0</span>
                </div>
                <div id="shippingTotal">
                    <span>Shipping</span>
                    <span id="delCharges">Calculated at next step</span>
                </div>
            </div>
            <hr>
            <div id="totalContainer">
                <div id="totalLeft">
                    <h3>Total</h3>
                    <span id="taxes"></span>
                </div>
                <div id="totalRight">
                    <span id="inr">INR</span>
                    <span id="totalAmount"></span>
                </div>
            </div>`
}

export { checkout_cart }
