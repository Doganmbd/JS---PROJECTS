const down = document.getElementById("down") ;
const up = document.getElementById("up");
const inputOne = document.getElementById("inpt");
const btnOne = document.getElementById("btn");
const textGuess = document.getElementById("p2");
const remainder = document.querySelector(".count-input");
const restart = document.querySelector(".btn2")


// rastgele bir sayı belirlemem lazım ve kullanıcıdan onu bulmasını istemeliyiz.
const answer = randomNumber() ;
function randomNumber() {
    return Math.floor(Math.random() * 100) + 1  ;
    
}

console.log(answer);
//kullanıcı tahmin ettiği sayıyı girip butona bastığında cevap ile arasındaki bağlantıları kurmam lazım.

remainder.value = 10 ;
// bir tane gameOver = false tanımlayacam  ve işlemlerim sonucu buraya yönlendirecem.
let gameOver = false ;

const againGuess=[] ;
btnOne.addEventListener("click" , e => {
    e.preventDefault() ;

    if(gameOver) return ;
    // dışarıda bir againGuess=[] tanımlayacam ve içerisine girdiğim sayıları pushlayacam ki aynı sayıyı tekrar girdiğimde bana uyarı versin.
    if(againGuess.includes(inputOne.value)){
        textGuess.innerText=`You already guessed ${inputOne.value}`
    }else {
    if(inputOne.value > answer) {
        textGuess.innerText ="enter smaller number";

        up.innerText = inputOne.value ;
        
    }
    else if(inputOne.value < answer) {
        textGuess.innerText ="enter a larger number";
        down.innerText = inputOne.value ;
        
    }
    else{
        textGuess.innerText =`you entered the correct number ${answer}`;
    }
    
    againGuess.push(inputOne.value) ;
    remainder.value -= 1 ;
    if(remainder.value == 0) {
        textGuess.innerText = `you lost . The correct answer is ${answer}.`
        gameOver = true // 10 yanlış cevaptan sonra true oldu.yukarıda if ile yaptığımız kod çalıştı ve return edip beni dışarı attı döngü bitti.
        
    }
    inputOne.value =""
}
})

console.log(againGuess);

restart.addEventListener("click" , () => {
    
    gameOver = false ;
    up.innerText = 100 ;
    down.innerText = 1 ;
    textGuess.innerText ="Make a guess" ;
    remainder.value = 10 ;
    inputOne.value ="" ;
    
})

/* restart.addEventListener("click" , e => {
    e.preventDefault();
    document.formname.reset() ;

}) */