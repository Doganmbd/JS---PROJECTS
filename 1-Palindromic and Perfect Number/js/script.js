// toString() metodu, kendisine tanımlanan değişken değerini string olarak değiştirerek döndürür.

let PalindromInput = document.querySelector(".pali") ;
let PalindromButton = document.querySelector(".pali1") ;
let PalindromTextarea = document.querySelector(".pali2") ;

PalindromButton.addEventListener("click" , () =>{
    for (let index = 0; index < PalindromInput.value; index++) {
        if (index.toString() == index.toString().split("").reverse().join("")) {
            PalindromTextarea.value += index +"\n"
        }
        
    }
})


// perfect number

