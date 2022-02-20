let products = document.querySelector(".products");
let quantity = document.querySelector(".quantity-controller");
let removeBtn = document.querySelectorAll(".remove-product");
let plus = document.querySelectorAll(".fa-plus")
let minus = document.querySelectorAll(".fa-minus")
let subTotalAmount = document.querySelector("#cart-subtotal")
let tax = document.querySelector("#cart-tax")
let ship = document.querySelector("#cart-shipping")
ship.innerText = 15

let total = document.querySelector("#cart-total")
//functions

let increaseAmount = (num) =>{
    let newAmount = num.parentElement.parentElement.querySelector("#product-quantity")
    newAmount.innerText = (Number(newAmount.innerText) + 1)
    
    let productTotal = num.parentElement.parentElement.parentElement.querySelector(".product-line-price")
    let temp1 =  num.parentElement.parentElement.parentElement.querySelector("strong").innerText
    console.log(temp1)
    productTotal.innerText = (temp1 * Number(newAmount.innerText)).toFixed(2)
}   
let decreaseAmount = (num) =>{
    let newAmount = num.parentElement.parentElement.querySelector("#product-quantity")
    newAmount.innerText = (Number(newAmount.innerText) -1)
    if(Number(newAmount.innerText) == 0){
        let removeAmount = num.parentElement.parentElement.parentElement.parentElement
        console.log(removeAmount)
        removeAmount.parentElement.removeChild(removeAmount)
    }
    let productTotal = num.parentElement.parentElement.parentElement.querySelector(".product-line-price")
    let temp1 =  num.parentElement.parentElement.parentElement.querySelector("strong").innerText
    console.log(temp1)
    productTotal.innerText = (temp1 * Number(newAmount.innerText)).toFixed(2)
    
    console.log(productTotal)
}

let removeItem = (num) => {
    let removeAmount = num.parentElement.parentElement.parentElement
    removeAmount.parentNode.removeChild(removeAmount)
}

let checkOut = ()=> {
    

    let subTotal = document.querySelectorAll(".product-line-price")
    let sum = 0
    subTotal.forEach(amount => sum += Number(amount.innerText))
    subTotalAmount.innerText = sum.toFixed(2)
    tax.innerText = (sum * 0.18).toFixed(2)
    if(subTotalAmount.innerText == 0){
        ship.innerText = 0
    }
    total.innerText = (sum + Number(tax.innerText) + Number(ship.innerText)).toFixed(2)
    
    
}
checkOut()
//events

plus.forEach(item => {
    item.parentElement.addEventListener("click", (e)=> {
        
        increaseAmount(e.target)
        checkOut()
    
    })
})

minus.forEach(item => {
    item.parentElement.addEventListener("click", (e)=> {
        
        decreaseAmount(e.target)
        checkOut()
    
    })
})


removeBtn.forEach(item => {
    item.addEventListener("click", (e)=> {
        removeItem(e.target)
        checkOut()
    
    })
})
