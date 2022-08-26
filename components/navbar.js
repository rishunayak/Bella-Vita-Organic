function navbar(){
    return `

    <div id="cartbar" style="display: none;">
        <div>
         <p id="cartclose">Your Cart <img src="https://cdn.discordapp.com/attachments/707486765136740384/1012151660996460734/unknown.png" alt="" ></p>
         <a href="shop_all.html">Continue Shopping</a>
        </div>
        <div id="cartp">

        </div>
        <div id="checkout">

        </div>
    </div>

    <div id="navbar">

        <div id="nav1">
            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_220_x_220_480x.png?v=1653304683" alt=""> 
            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701" alt="">
            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721" alt="">
        </div>

        <div id="nav2">
            <a href="shop_all.html">SHOP ALL</a> |
            <a href="new_arrivals.html">NEW ARRIVALS</a> |
            <a href="bestsellers.html">BESTSELLERS</a> |
            <a href="skin_care.html">SKIN CARE</a> |
            <a href="hair_care.html">HAIR CARE</a> | 
            <a href="body_care.html">BODY CARE</a> |
            <a href="prefumes.html">PREFUMES</a> |
            <a href="combos.html">COMBOS</a> |
            <a href="build_a_box.html">BUILD A BOX</a> 
           
         </div>
         
         <div id="nav3">
            <img src="https://cdn.discordapp.com/attachments/707486765136740384/1012088877302939748/unknown.png" alt="">
            <a href="login.html"><img src="https://cdn.discordapp.com/attachments/707486765136740384/1012089121168171028/unknown.png" alt=""></a>
            <a href="#"><img  src="https://cdn.discordapp.com/attachments/707486765136740384/1012089258745544784/unknown.png" alt="" onclick="cart()"  id="cartpage"></a> 
            <span id="cart">0</span>
        </div>  
        
    </div>`
}

let head=()=>
 {
    let data=["FREE SHIPPING on PREPAID Orders","Flexi Box - Buy any 4 products at ₹999"];
    let count=0;
    document.getElementById("top_bar").innerText=data[count];
    count++

    setInterval(()=>
    {
        if(count==data.length)
        {
            count=0;
        }
        document.getElementById("top_bar").innerText=data[count];
        count++
    },5000)
 }
 head();

export {navbar,head}