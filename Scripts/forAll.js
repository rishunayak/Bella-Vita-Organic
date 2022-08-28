const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(el => {

  const button = el.querySelector(".fa-chevron-down");
  
  button.addEventListener("click", () => {
    // Close all
    [...dropdowns].filter(x => x != el).forEach(el => el.classList.remove("is-open"));
    // Toggle one
    el.classList.toggle("is-open");
  });
});

 

   
   window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 370||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.width="100%";
        document.getElementById("header").style.zIndex="1";
        document.getElementById("header").style.background="white";
      } else {
        document.getElementById("header").style.position = "static";
      }
    }

   
//    Header
     
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


// Side Cart Bar

function cart()
{

     document.getElementById("cartbar").style.display="block";  
}


// Display Cart Bar

displayCart();

function displayCart()
{
    document.getElementById("cartp").innerHTML=null;
    document.getElementById("checkout").innerHTML=null;
    let cartdata=JSON.parse(localStorage.getItem("added_to_cart")) || [];
    document.getElementById("cart").innerText=cartdata.length;
   let total_price=0;
    cartdata.forEach((ele,index)=>
    { console.log("hello bro")
        let mainDiv=document.createElement("div");

        let imgDiv=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.image;
       
        imgDiv.append(img);

        let detDiv=document.createElement("div");

        let title=document.createElement("p");
        title.innerText=ele.title;
        let price=document.createElement("span");
        price.innerText=`₹${(+ele.price)*(+ele.quantity)}`;
       
        let price2=document.createElement("span");
        price2.innerText=ele.price2

        let divUpdate=document.createElement("div");
         
        let bDiv=document.createElement("div");

        let dec=document.createElement("button");
        dec.innerText="-";
        dec.addEventListener("click",function()
        {
            
            let count=+(ele.quantity);
            if(count!=1)
            {
                
                
                let getData=JSON.parse(localStorage.getItem("added_to_cart"));

             getData.forEach((elem)=>
             {
              if(elem.title==ele.title)
              {
                elem.quantity--;
                localStorage.setItem("added_to_cart",JSON.stringify(getData))
                displayCart()
              }
           })
            }
          
        })
        let inpData=document.createElement("input");
        inpData.type="text";
        inpData.value=ele.quantity;
        inpData.id="count"
        let inc=document.createElement("button");
        inc.innerText="+";
        inc.addEventListener("click",function()
        {
            let count=ele.quantity;
              +(count)++;
           
             
           let getData=JSON.parse(localStorage.getItem("added_to_cart"));

           getData.forEach((elem)=>
           {
              if(elem.title==ele.title)
              {
                elem.quantity++;
                localStorage.setItem("added_to_cart",JSON.stringify(getData))
                displayCart()
              }
           })


                
        })
        bDiv.append(dec,inpData,inc)
        
        let Ddel=document.createElement("div");
        let imgicon=document.createElement("img");
        imgicon.src="https://cdn.discordapp.com/attachments/707486765136740384/1012147963801378876/unknown.png";
        imgicon.style.width="20px";
        imgicon.addEventListener("click",function()
        {
            cartdata.splice(index,1);
            localStorage.setItem("added_to_cart",JSON.stringify(cartdata));
            displayCart()
        })
        Ddel.append(imgicon)

        divUpdate.append(bDiv,Ddel)
       
         detDiv.append(title,price,divUpdate)

         mainDiv.append(imgDiv,detDiv);
         
         document.getElementById("cartp").append(mainDiv)
         total_price=(+ele.price)*(+ele.quantity)+total_price;
    })

    let buybutton=document.createElement("button");
    buybutton.innerText=`CHECKOUT │ ₹${total_price}`;
    buybutton.id="checkoutbutton";
    buybutton.addEventListener("click",function()
    {
        window.location.href="checkout.html";
    })
   
    document.getElementById("checkout").append(buybutton);

   document.getElementById("cartclose").addEventListener("click",function()
   {
    document.getElementById("cartbar").style.display="none";  
   })  
  
}


document.getElementById("nav1").addEventListener("click",function()
{
    window.location.href="index.html"
})
