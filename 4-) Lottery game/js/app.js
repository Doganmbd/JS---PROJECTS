let button = document.getElementById("button");
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
 