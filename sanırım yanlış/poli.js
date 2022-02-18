let polidromnumber = document.querySelector("#polidrom");
let perfectnumber = document.querySelector("#perfect");

let perfectarea = document.querySelector("#areaperfect");

let polidromarea = document.querySelector("#areapolidrom");


let polidromButton = document.querySelector(".buttonPolidrom");
let perfectButton = document.querySelector(".buttonPerfect");



polidromButton.addEventListener("click",()=>{
    result=""
    if(polidromnumber.value < 0){
        // alert(false)
        polidromarea.value = "False"
        
    }
    for(var i=String(polidromnumber.value).length-1;i>=0;i--){
        result+=String(polidromnumber.value)[i]
    }
    if(String(polidromnumber.value)==result){
        // alert(false)
        polidromarea.value = "True"
    }
    else{
        polidromarea.value = "False"
    }
});


perfectButton.addEventListener("click",()=>{
    for (let i = 1; i < perfectnumber.value; i++) 
        if (condition) {
            
        }
     }

};





