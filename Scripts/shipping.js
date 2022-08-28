import {checkout_cart} from './cart_checkout.js'
document.querySelector("#right").innerHTML = checkout_cart()

let cart = JSON.parse(localStorage.getItem("added_to_cart"))

console.log(cart)

let total = 0

append(cart)

function append(data) {
    data.forEach(function (e) {
        let div = document.createElement("div")
        div.setAttribute("class", "card")
        let leftDiv = document.createElement("div")
        leftDiv.setAttribute("class", "leftDiv")
        let img = document.createElement("img")
        img.setAttribute("class", "img")
        img.setAttribute("src", e.image)
        let rightDiv = document.createElement("div")
        rightDiv.setAttribute("class", "rightDiv")
        let title = document.createElement("div")
        title.setAttribute("class", "title")
        title.innerText = e.title
        let price = document.createElement("div")
        price.setAttribute("class", "price")
        price.innerText = `₹${e.price}.00`
        let pseudoDiv = document.createElement("div")
        pseudoDiv.setAttribute("class", "qtyPseudo")
        let qtyDiv = document.createElement("div")
        let qty = document.createElement("span")
        qty.innerText = e.quantity
        qtyDiv.append(qty)
        pseudoDiv.append(qtyDiv)
        leftDiv.append(img, pseudoDiv)
        rightDiv.append(title, price)
        div.append(leftDiv, rightDiv)
        document.querySelector("#cartItems").append(div)
        total +=(+e.price)
    })
}

document.querySelector("#promoInput").addEventListener("input", promo)

function promo() {
    let input = document.querySelector("#promoInput").value
    let btn = document.querySelector("#promoBtn")

    console.log(input)

    if (input == "") {
        btn.style.backgroundColor = "#e1e1e1"
        btn.style.transition = "400ms"
    }
    else {
        btn.style.backgroundColor = "#475c4b"
        btn.style.transition = "400ms"
    }
}

let subTotal = document.querySelector("#sub_amount")
document.querySelector("#totalAmount").innerText = `₹${total}.00`
subTotal.innerText = `₹${total}.00`
subTotal.style.color = "black"

let tax = ((15.254098360656 / 100) * total).toFixed(2)
let taxSpan = document.querySelector("#taxes")
taxSpan.innerText = `Including ₹${tax} in taxes`

let info = JSON.parse(localStorage.getItem("shippingInfo"))


document.querySelector("#contactEmail").innerText = info.email
document.querySelector("#shippingAddress").innerText = info.ad1 + info.ad2

let freeRadio = document.querySelector("#freeRadio")
let paidRadio = document.querySelector("#paidRadio")
let freeContainer = document.querySelector("#freeContainer")
let paidContainer = document.querySelector("#paidContainer")


freeRadio.checked = true
document.querySelector("#delCharges").innerText = "Free"
document.querySelector("#shippingBtn").innerText = "Continue to Payments & Coupons"

function free() {
    freeRadio.checked = true
    paidRadio.checked = false
    document.querySelector("#delCharges").innerText = "Free"
    let total = localStorage.getItem("cartTotal")
    document.querySelector("#totalAmount").innerText = `₹${total}.00`
    document.querySelector("#shippingBtn").innerText = "Continue to Payments & Coupons"

}

function paid() {
    paidRadio.checked = true
    freeRadio.checked = false
    document.querySelector("#delCharges").innerText = "₹50.00"
    let total = +localStorage.getItem("cartTotal")
    total += 50
    document.querySelector("#totalAmount").innerText = `₹${total}.00`
    document.querySelector("#shippingBtn").innerText = "Complete Order"
}

freeRadio.addEventListener("change", free)
paidRadio.addEventListener("change", paid)
freeContainer.addEventListener("click", free)
paidContainer.addEventListener("click", paid)

document.querySelector("#shippingBtn").addEventListener("click", shipMethod)

function shipMethod() {
    if (freeRadio.checked) {
        localStorage.setItem("method", 0)
        window.location = "./payment.html"
    }
    else {
        localStorage.setItem("method", 1)
        window.location = "./orderplaced.html"
    }
}
