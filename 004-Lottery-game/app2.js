const newdiv = document.getElementById("div") ;
let numElement = []


for (let i = 0; i <6 ; i++) {
    let spanNum = document.getElementById("yeni");
    numElement[i] = spanNum ;
       
}
console.log(numElement); 
/* 
const newbox = document.createElement("div")
newbox.classList.add("box") ;
newdiv.appendChild(newbox)


const a = document.getElementById("yenidiv") ;
const b = document.getElementById("buton") ;

b.addEventListener("click" , (e) => {
    e.preventDefault() ;
    newdiv += createtask
})

const createtask = (task) => {
    return ` <div id="yenidiv">
    <div id="lan"></div>
    <span id="yeni"></span>
</div>`
} */