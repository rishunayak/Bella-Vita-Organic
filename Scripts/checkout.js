import {checkout_cart} from './cart_checkout.js'
document.querySelector("#right").innerHTML = checkout_cart()

function newsletter() {
    let check = document.querySelector("#newsletterCheckbox")

    if (check.checked) {
        check.checked = false
    }
    else {
        check.checked = true
    }
}

function save() {
    let check = document.querySelector("#saveInfoCheckbox")

    if (check.checked) {
        check.checked = false
    }
    else {
        check.checked = true
    }
}

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
        total += +(e.price)
       
    })

    localStorage.setItem("cartTotal", total)

}

document.querySelector("#promoInput").addEventListener("input", promo)
function promo() {
    let input = document.querySelector("#promoInput").value
    let btn = document.querySelector("#promoBtn")

    console.log(input)

    if (input=="") {
       
        btn.style.backgroundColor = "#e1e1e1"
        btn.style.transition = "400ms"
    }
    else {
       
        btn.style.backgroundColor = "#475c4b"
        btn.style.transition = "400ms"
    }
}

document.getElementById("promoBtn").addEventListener("click",function()
{
    let input = document.querySelector("#promoInput").value
    if(input=="NEW7")
    {
        
    }
})


let subTotal = document.querySelector("#sub_amount")
document.querySelector("#totalAmount").innerText = `₹${total}.00`
subTotal.innerText = `₹${total}.00`
subTotal.style.color = "black"

let tax = ((15.254098360656 / 100) * total).toFixed(2)
let taxSpan = document.querySelector("#taxes")
taxSpan.innerText = `Including ₹${tax} in taxes`

document.querySelector("#shippingBtn").addEventListener("click", saveAddress)

function saveAddress() {

    let email = document.querySelector("#inputEmail").value
    let firstName = document.querySelector("#firstName").value
    let LastName = document.querySelector("#lastName").value
    let ad1 = document.querySelector("#addressOne").value
    let ad2 = document.querySelector("#addressTwo").value
    let city = document.querySelector("#city").value
    let state = document.querySelector("#state").value
    let pincode = document.querySelector("#pincode").value
    let phone = document.querySelector("#number").value

    let logedUser=localStorage.getItem("isUserloggedin");
    
    if(logedUser=="true" || email!="")
    {
        if(firstName!="" && LastName!="" && ad1!="" && ad2!="" && ad1!="" && city!="" && state!="" && pincode!="" && phone!="")
        {
            let obj = {
                email,
                firstName,
                LastName,
                ad1,
                ad2,
                city,
                state,
                pincode,
                phone
            }
        
            console.log(obj)
        
            localStorage.setItem("shippingInfo", JSON.stringify(obj))
            window.location.href="shipping.html";
        }
        else
        {
            alert("Please Enter Full Details");
        }
    }
    else

        {
            alert("Please Login or Enter Email User to Continue");
        }


  

}

function delivery(info) {
    
}


loginValidation()

function loginValidation()
{
    let logedUser=localStorage.getItem("isUserloggedin") || false;
    
    if(logedUser=="true")
    {
        document.getElementById("loginValidation").style.display="none";
    }
    

}