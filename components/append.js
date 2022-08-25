

let main = document.querySelector("#main");

 function append(data) {
	main.innerHTML=null;

    data.forEach(function (e) {
        let card = document.createElement("div")
        card.setAttribute("class", "product-card")
        let imgDiv = document.createElement("div")
        imgDiv.setAttribute("class", "product-image")
        let img = document.createElement("img")
        img.setAttribute("src", e.image)
        img.addEventListener('mouseover', (event) => {
            img.src=e.hoverImage;
         });
                
         img.addEventListener('mouseout', (event) => {
            img.src=e.image;
         })
        let contentDiv = document.createElement("div")
        contentDiv.setAttribute("class", "product-content")
        let title = document.createElement("div")
        title.setAttribute("class", "product-title")
        title.innerText = e.title
        let desc = document.createElement("div")
        desc.setAttribute("class", "product-desc")
        desc.innerText = e.description
        let bottomDiv = document.createElement("div")
        bottomDiv.setAttribute("class", "content-bottom")
        let priceDiv = document.createElement("div")
        priceDiv.setAttribute("class", "product-price")
        let oldPrice = document.createElement("span")
        oldPrice.setAttribute("class", "old-price")
		if(e.strikePrice){
			oldPrice.innerText = `₹ ${e["strikePrice"]}`;
		}
        let newPrice = document.createElement("span")
        newPrice.setAttribute("class", "finalPrice")
        newPrice.innerText = `₹ ${e["finalPrice"]}`;
        let ratingDiv = document.createElement("div")
        ratingDiv.setAttribute("class", "product-rating")
        let rating = document.createElement("span")
        rating.setAttribute("class", "rating")
        rating.innerText = `${e.rating} ★`;
        let button = document.createElement("button")
        button.innerText = "ADD TO CARD"
        button.setAttribute("class", "product-button")

        imgDiv.append(img)
        priceDiv.append(newPrice, oldPrice)
        ratingDiv.append(rating)
        bottomDiv.append(priceDiv, ratingDiv)
        contentDiv.append(title, desc, bottomDiv)
        card.append(imgDiv, contentDiv, button)
        main.append(card)
    })
}





    // *********************Filter*************************

    let filtering=document.getElementById("filtering");
    const filterFunc=(data)=>{
        if(filtering.value==="all"){
            append(data);
        }else if(filtering.value==="A-Z"){
            data.sort((a,b)=>{
                let x=a.title.toUpperCase();
                let y=b.title.toUpperCase();
                if(x>y) return 1;
                if(x<y) return -1;
                return 0;
            })
            append(data);
        }
        else if(filtering.value==="Z-A"){
            data.sort((a,b)=>{
                let x=a.title.toUpperCase();
                let y=b.title.toUpperCase();
                if(x<y) return 1;
                if(x>y) return -1;
                return 0;
            })
            append(data);
        }
        else if(filtering.value==="Low-High"){
            data.sort((a,b)=>{
                return a.finalPrice-b.finalPrice;
            })
            append(data);
        }
        else if(filtering.value==="High-Low"){
            data.sort((a,b)=>{
                return b.finalPrice-a.finalPrice;
            })
            append(data);
        }
        console.log("hi")
    }

	export {append, filterFunc}