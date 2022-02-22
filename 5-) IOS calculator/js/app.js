const clock = document.getElementById("clock") ;
const topDisplayNum = document.querySelector("#top-display-num") ;
const topDisplayOprt = document.getElementById("top-display-operator") ;
const bottomDisplay = document.querySelector(".current-display")
const buttonClick = document.querySelector(".calculator") ;

setInterval( () => {
    const time = new Date() ;
    const [h,m,y,mt,d] = [time.getHours().toString().padStart(2,"0"),time.getMinutes().toString().padStart(2,"0"),time.getFullYear().toString().padStart(2,"0"),time.getMonth().toString().padStart(2,"0"),time.getDate().toString().padStart(2,"0")]
    

    clock.innerText = h + ":" + m + " " + " " + y + "- " + mt + "-"+ d ;
    } , 1000) ;
    
function operator(operate) {
       if (bottomDisplay.innerHTML == "") {
    return;
  } 

  if(topDisplayNum.innerText && topDisplayOprt.innerText == "") {
    topDisplayNum.innerText = bottomDisplay.innerText ;
    bottomDisplay.innerText = "" ;
    return ;
  }
  
    if(topDisplayNum.innerText) {
        if(topDisplayOprt == "%") {
        topDisplayNum.innerText = (topDisplayNum.innerText * bottomDisplay.innerText) / 100 ;
        bottomDisplay.innerText ="" ;
        return ;
    }
     
     if(operate == "=") {
        operate = topDisplayOprt.innerText
    } 

    switch (operate) {
        case "+":
            topDisplayNum.innerText = +topDisplayNum.innerText + +bottomDisplay.innerText ;
            break ;

        case "-":
            topDisplayNum.innerText = topDisplayNum.innerText - bottomDisplay.innerText ;
            break ;
            
        case "x":
            topDisplayNum.innerText = topDisplayNum.innerText * bottomDisplay.innerText
            break ;

        case "÷":
            topDisplayNum.innerText = topDisplayNum.innerText / bottomDisplay.innerText                    
            break;
            
    }
    bottomDisplay.innerText ="" ;
    return ;

} 
topDisplayNum.innerText = bottomDisplay.innerText ;
bottomDisplay.innerText = ""
} 

buttonClick.addEventListener("click" , (e) =>{
    if(e.target.tagName === "BUTTON") {
        switch (e.target.id) {
            case "funPercent":
            case "opDiv":
            case "opMult":
            case "opSub":
            case "opAdd":

                if(bottomDisplay.innerText.endsWith(".")) {
                    bottomDisplay.innerText = bottomDisplay.innerText.slice(0,-1) ;
                }
                if(bottomDisplay.innerText) {
                    operator(topDisplayOprt.innerText)
                }
                
                if(topDisplayNum.innerText) {
                    topDisplayOprt.innerText = e.target.innerHTML ;
                }
                break;
        case "num9" :
        case "num8" :
        case "num7" :
        case "num6" :
        case "num5" :
        case "num4" :
        case "num3" :
        case "num2" :
        case "num1" :
        case "num0" :

            if(bottomDisplay.innerText === "0") {
                bottomDisplay.innerText = ""
            }
                break;

            if(bottomDisplay.innerText.length < 10) {
                bottomDisplay.innerText += e.target.innerHTML ;
            }
                break;
            
            case "funAc" :
                topDisplayNum.innerText = topDisplayOprt.innerText =bottomDisplay.innerText = ""
                break ;

            case "funDel" :
                if(bottomDisplay.innerText){
                    bottomDisplay.innerText = bottomDisplay.innerText.slice(0,-1)
                }
                break ;

            case "dot" :
                if(bottomDisplay.innerText && !bottomDisplay.innerText.includes(".")) {
                    bottomDisplay.innerText +="."
                }
                break ;

            case "equ" :
                operator(topDisplayOprt.innerText)
                    topDisplayOprt.innerText = ""
                break ;
        }
    }
})



























