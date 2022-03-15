let buttons = document.getElementById("button") ;
let inputs = document.getElementById("input") ;
let totalBall = document.querySelector(".totalball") ;

/* let stage = document.querySelector(".stage") ;
let ball = document.querySelector(".ball") ;
let number = document.querySelector(".number") ; */

let numElement = [] ;
let luckyElement = [] ;
let randomNum = 0 ; 
let randomJoker = 0 ;
let randomSuper = 0

buttons.addEventListener("click", () => {
  totalBall.innerHTML = ""
  if(inputs.value < 9 && inputs.value > 0) {
    for (let i = 0; i < Number(inputs.value); i++) {



      for (let j = 0; j < 6; j++) {
        let sections = document.createElement("section") ;
        let figures = document.createElement("figure") ;
        let spans = document.createElement("span") ;
        
        sections.classList.add("stage") ;
        figures.classList.add("ball") ;
        spans.classList.add("number") ;
        

        totalBall.appendChild(sections) ;
        sections.appendChild(figures) ;
        figures.appendChild(spans) ;
        

        numElement[j] = spans ;
        randomNum = Math.floor(Math.random() * 99 ) + 1 ;
        luckyElement.includes(randomNum) ? "" : (luckyElement[j] = randomNum) ;
      }
      luckyElement = luckyElement.sort(function(a,b){
        return a-b ;
      })

      for (let k = 0; k < luckyElement.length; k++) {
        numElement[k].innerHTML = luckyElement[k] ;
        
      }
      // ball7 joker number
      let sections1 = document.createElement("section") ;
      let figures1 = document.createElement("figure") ;
      let spans1 = document.createElement("span") ;
      
      sections1.classList.add("stage") ;
      figures1.classList.add("ball" , "ball7") ;
      spans1.classList.add("number") ;
      

      totalBall.appendChild(sections1) ;
      sections1.appendChild(figures1) ;
      figures1.appendChild(spans1) ;

      randomJoker = Math.floor(Math.random() * 99 + 1);
      while (luckyElement.includes(randomJoker)) {
        randomJoker = Math.floor(Math.random() * 99 + 1);
      }
      spans1.innerHTML =randomJoker ;




      //ball8 superstar number

      let sections2 = document.createElement("section") ;
      let figures2 = document.createElement("figure") ;
      let spans2 = document.createElement("span") ;
      
      sections2.classList.add("stage") ;
      figures2.classList.add("ball" , "ball8") ;
      spans2.classList.add("number") ;
      

      totalBall.appendChild(sections2) ;
      sections2.appendChild(figures2) ;
      figures2.appendChild(spans2) ;

      
      randomSuper = Math.floor(Math.random() * 99 + 1);
      spans2.innerHTML = randomSuper;
    }

  } else alert("Please enter a number between 1-8 (both inclusive)");
  inputs.value = ""
})















/* const ball = document.querySelectorAll(".number") ;
const lotteryButton = document.getElementById("button") ;
const lotteryInput = document.getElementById("txt-num") ;
console.log(ball);


lotteryButton.addEventListener("click" , (e ) => {
    // çekiliş yapacağımız sayıları array içine alalım 
    const lotterNum = [] ;
    for (let i = 0; i < lotteryInput.value ; i++){
        for (let j = 0; lotterNum.length < 6 ; j++) {
            let number = Math.floor(Math.random() * 90) + 1;
            if(lotterNum.indexOf(number) == -1 )
            lotterNum.push(number) ;
/*             else {
                i-- ;
            } */
            
/*         }
        
    }
    let i = 0 ;
    ball.forEach((btn) => {
        btn.innerHTML = lotterNum[i] ;
        i++ ;
    });
/*     e.preventDefault() ; */
/*    ball.innerHTML += createBall(lotterNum[i])

})

const createBall = (a) => {
    return    `<section class="stage">
    <figure class="ball">
      <span class="number" data-number="">${lotterNum[i]}</span>
    </figure>
</section>`
} */

 







/* let button = document.getElementById("button");
let txt_number = document.getElementById("txt-num");
let number_box = document.querySelector(".number-box");
let lucky_numbers = [];
let numElements = [];
let rand_num = 0;
let rand_joker = 0;
let rand_sstar = 0;
button.addEventListener("click", () => {
  number_box.innerHTML = "";

  if (txt_number.value < 9 && txt_number.value > 0) {
    for (let i = 0; i < Number(txt_number.value); i++) {

      // Lucky Numbers 6
      for (let i = 0; i < 6; i++) {
        let content_ball = document.createElement("div");
        let ball = document.createElement("figure");
        let number = document.createElement("span");
  
        content_ball.classList.add("content-ball");
        ball.classList.add("ball");
        number.classList.add("number");
  
        number_box.appendChild(content_ball);
        content_ball.appendChild(ball);
        ball.appendChild(number);
        numElements[i] = number;
        rand_num = Math.floor(Math.random() * 90 + 1);
        lucky_numbers.includes(rand_num) ? "" : (lucky_numbers[i] = rand_num);
      }
      lucky_numbers = lucky_numbers.sort(function (a, b) {
        return a - b;
      });
      for (let i = 0; i < lucky_numbers.length; i++) {
        numElements[i].innerHTML = lucky_numbers[i];
      }

      // joker number
      let content_ball1 = document.createElement("div");
      let ball1 = document.createElement("figure");
      let number1 = document.createElement("span");

      content_ball1.classList.add("content-ball");
      ball1.classList.add("ball","ball7");
      number1.classList.add("number");

      number_box.appendChild(content_ball1);
      content_ball1.appendChild(ball1);
      ball1.appendChild(number1);
      rand_joker = Math.floor(Math.random() * 90 + 1);
      while (lucky_numbers.includes(rand_joker)) {
        rand_joker = Math.floor(Math.random() * 90 + 1);
      }
      number1.innerHTML = rand_joker;

      // superstar number
      let content_ball2 = document.createElement("div");
      let ball2 = document.createElement("figure");
      let number2 = document.createElement("span");

      content_ball2.classList.add("content-ball");
      ball2.classList.add("ball","ball8");
      number2.classList.add("number");

      number_box.appendChild(content_ball2);
      content_ball2.appendChild(ball2);
      ball2.appendChild(number2);
      rand_sstar = Math.floor(Math.random() * 90 + 1);
      number2.innerHTML = rand_sstar;
    }
  } else alert("Please enter a number between 1-8 (both inclusive)");
});
  */