
let registerUsers=JSON.parse(localStorage.getItem("users"))||[];
let register=(event)=>{
    event.preventDefault();
    let regData={
        firstName:document.getElementById("firstName").value,
        lastName:document.getElementById("lastName").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    }
    console.log(regData.password.length)
    if(registerUsers.length>0){
        registerUsers.forEach((element) => {
            if(element.email===regData.email){
                alert("User already exists");
                window.location.href="./login.html"
                return;
            }else{
                if(!regData.firstName||!regData.lastName||!regData.email||!regData.password){
                    alert("Please enter details")
                }else{
                    if(regData.password.includes("!")||regData.password.includes("@")||regData.password.includes("#")||regData.password.includes("$")||regData.password.includes("%")||regData.password.includes("&")||regData.password.includes("_")||regData.password.includes("=")||regData.password.includes("-")||regData.password.includes("*")||regData.password.includes("~")||regData.password.includes("+")){
                     if(regData.password.length>=8){
                    registerUsers.push(regData);
                localStorage.setItem("users",JSON.stringify(registerUsers));
                // console.log('registerUsers :>> ', registerUsers);
                alert("Account created successfully");
                location.href="./login.html";
                     }else{
                        alert("Password should have minimun 8 characters")
                     }
            }else{
                alert("Password must contain one symbol");
            }
            }
            }
        });
    }else{
        if(regData.password.includes("!")||regData.password.includes("@")||regData.password.includes("#")||regData.password.includes("$")||regData.password.includes("%")||regData.password.includes("&")||regData.password.includes("_")||regData.password.includes("=")||regData.password.includes("-")||regData.password.includes("*")||regData.password.includes("~")||regData.password.includes("+")){
            registerUsers.push(regData);
            localStorage.setItem("users",JSON.stringify(registerUsers));
            alert("Account created successfully");
            location.href="./login.html";
        }else{
            alert("Password must contain one symbol");
        }
    }
    
}
document.getElementById("create").addEventListener("click",register);





