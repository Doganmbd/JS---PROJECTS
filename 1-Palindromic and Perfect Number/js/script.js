// toString() metodu, kendisine tanımlanan değişken değerini string olarak değiştirerek döndürür.

let PalindromInput = document.querySelector("#pali3") ;
let PalindromButton = document.querySelector("#pali1") ;
let PalindromTextarea = document.querySelector("#pali2") ;

PalindromButton.addEventListener("click" , () =>{
    for (let index = 0; index < PalindromInput.value; index++) {
        if (index.toString() == index.toString().split("").reverse().join("")) {
            PalindromTextarea.value += index +"\n"
        }
        
    }
})


// perfect number

let perfectInput = document.querySelector(".per1") ;
let perfectButton = document.querySelector(".per2") ;
let perfectTextarea = document.querySelector(".per3") ;


console.log(perfectTextarea);
perfectButton.addEventListener("click", () => { 
    if (perfectTextarea.value) {
        perfectTextarea.value =""
        
    }
    for (let i = 1; i <= perfectInput.value; i++) {
        let sum = 0
        for(let j=1 ; j<=i/2 ; j++){
            if(i % j == 0){
                sum += j
            }
        }
        if(sum == i){
            perfectTextarea.value += i + "\n"
        }
    }
})

perfectInput.addEventListener("click", () => { 
    if(perfectInput.value){      // perfectInput.value doluysa yani true'dur. içini boş yap
        perfectTextarea.value =""
        perfectInput.value =""
    }

})




