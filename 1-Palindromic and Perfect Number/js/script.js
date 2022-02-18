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

/* let perfectInput = document.querySelector(".per1") ;
let perfectButton = document.querySelector(".per2") ;
let perfectTextarea = document.querySelector(".per3") ;



perfectButton.addEventListener("click", () => { let sum = 0
    for (let i = 1; i < perfectInput.value; i++) {
        if(perfectInput.value % i == 0)

        sum += i
        if (sum == i ) {
            perfectTextarea.value += i + "\n"
            console.log(perfectTextarea.value);
        }
        
        }
        console.log(sum);



}) */


function find_perfect_number(num) {

    let arr = [];
    let sum = 0;
    let arrSum = 0;
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            arr.push(i);
            sum += i;
        }
    }
    arr.push(num);
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    let avg = arrSum / 2;

    if (sum === num && avg === num) console.log(num)
}

for (let i = 1; i < 100; i++) {
    find_perfect_number(i);
}