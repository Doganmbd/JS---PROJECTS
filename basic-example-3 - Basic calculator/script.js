let explain = document.getElementById("error");
let calculate = document.getElementById("calculater");
let numOne = document.getElementById("num1") ;  // istersem global de value suz tanımlarım ve içeride işlemlerimi Number(numOne.value) şeklinde gerçekleştirirm.



// butona tıkladığıım zaman ;
calculate.addEventListener("click" , () => {
    // input değerleri value alınır. num1 ve num2 sayıya çevirmek için Number kullandım.
    let numTwo = Number(document.getElementById("num2").value);
    let optr = document.getElementById("operator").value;
    let result = 0 ;
    // şayet sayı girilmezse ; Ama direk HTML de number yaparak kullanıcının sadece rakam girmesini sağladım
/*     if (isNaN(Number(numOne.value)) || isNaN(numTwo)) {
        explain.innerText ="Please enter a number !" ;
            else{
       
    }
 */
    // switch-case kullanmalıyız . ifadenin deeri her adımda değerlndidrilirbir eşleşme varsa ilgili kod bloğu döner. eşleşme yoksa default değer döner. default değer olmasa hepsine explain.innerHTML = result ;yazmaya gerek yok sadece en alta yazarız.
    

        switch(optr) {
            case "+" :
                explain.innerHTML = Number(numOne.value) + numTwo
                break ;

            case "-" :
                explain.innerHTML = Number(numOne.value)  - numTwo
                break ;
                
            case "*" :
                explain.innerHTML = Number(numOne.value) * numTwo 
                break ; 
                
            case "/" :
                explain.innerHTML = Number(numOne.value) / numTwo
                break ;

            default :
            explain.innerText = "You entered the wrong operator."
            break ;
    }
    
    }
    
    
)

