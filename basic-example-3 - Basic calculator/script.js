let explain = document.getElementById("error");
let calculate = document.getElementById("calculater");

// butona tıkladığıım zaman ;
calculate.addEventListener("click" , () => {
    // input değerleri value alınır. num1 ve num2 sayıya çevirmek için Number kullandım.
    let numOne = Number(document.getElementById("num1").value) ;
    let numTwo = Number(document.getElementById("num2").value);
    let optr = document.getElementById("operator").value;
    let result = 0 ;
    // şayet sayı girilmezse ;
    if (isNaN(numOne) || isNaN(numTwo)) {
        explain.innerText ="Please enter a number !" ;
    }

    // switch-case kullanmalıyız . ifadenin deeri her adımda değerlndidrilirbir eşleşme varsa ilgili kod bloğu döner. eşleşme yoksa default değer döner. default değer olmasa hepsine explain.innerHTML = result ;yazmaya gerek yok sadece en alta yazarız.
    
    else{
        
        switch(optr) {
            case "+" :
                result = numOne + numTwo
                explain.innerHTML = result ;
                break ;

            case "-" :
                result = numOne - numTwo
                explain.innerHTML = result ;
                break ;
                
            case "*" :
                result = numOne * numTwo 
                explain.innerHTML = result ;  
                break ; 
                
            case "/" :
                result = numOne / numTwo
                explain.innerHTML = result ;
                break ;

            default :
            explain.innerText = "You entered the wrong operator."
            break ;
    }
    
    }
    
    
})

