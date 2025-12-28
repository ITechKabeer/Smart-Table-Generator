let body = document.body;
let themeButton = document.querySelector(".themebutton");
let quickTheme = localStorage.getItem("quickTheme");
let number = document.getElementById("number");
let numError = document.querySelector("#num-error")
let resultDiv = document.querySelector(".result-div");
let generateBtn = document.querySelector(".generate");
let limit = document.getElementById("limit");
let limitError = document.querySelector("#limit-error")


themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme")

    if(body.classList.contains("dark-theme")){
        localStorage.setItem("quickTheme" , "dark")
        themeButton.innerHTML = "☀️"
    }else{
        localStorage.setItem("quickTheme" , "light")
        themeButton.innerHTML = "🌙"
    }
})

if(quickTheme === "dark"){
    body.classList.add("dark-theme")
    themeButton.innerHTML = "☀️"
}else if(quickTheme === "light"){
    body.classList.remove("dark-theme")
    themeButton.innerHTML = "🌙"
}

generateBtn.addEventListener("click" , () => {
    let num = number.value
    let totalLimit = limit.value 

    number.classList.remove("input-error")
    numError.classList.add("hide")
    limitError.classList.add("hide")
    limit.classList.remove("input-error")

    if(!num){
        number.classList.add("input-error")
        numError.classList.remove("hide")
        numError.innerHTML = "Please enter a number";
    }
    
    if(!totalLimit){
        limit.classList.add("input-error")
        limitError.classList.remove("hide")
        limitError.innerHTML = "Please enter a limit";
        return;
    }
    
    if(num === "0"){
        number.classList.add("input-error")
        numError.classList.remove("hide")
        numError.innerHTML = "Values must be greater than '0'";
        return;
    }

    if(totalLimit === "0"){
        limit.classList.add("input-error")
        limitError.classList.remove("hide")
        limitError.innerHTML = "Values must be greater than '0'";
        return;
    }

    number.classList.remove("input-error")
    numError.classList.add("hide")
    limitError.classList.add("hide")
    limit.classList.remove("input-error")
    resultDiv.innerHTML = ""
    for(i = 1; i <= totalLimit; i++){
        let resultPara = document.createElement("p")
        resultPara.classList.add("result-para")
        resultPara.innerHTML = `${num} x ${i} = ${num * i}`
        resultDiv.append(resultPara)
    }
    limit.value = ""
    number.value = ""
})

