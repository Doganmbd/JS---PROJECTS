let button = document.querySelector(".btn")
let input = document.querySelector(".search")
let father = document.querySelector(".tasks")
let total = document.querySelectorAll(".task-num")






button.addEventListener("click", (e)=>{
    if(input.value){
        let task = document.createElement("div") // yeni oluşturuyoruz
        task.classList.add("task-num")
        
        let remove = document.createElement("div")  // 
        remove.classList.add("delete")
        
        let content = document.createElement("div")
        content.classList.add("task")
        
        
        let correct = document.createElement("i")
        correct.classList.add("fa-solid")
        correct.classList.add("fa-check")
        
        
        let parah = document.createElement("p")
        parah.classList.add("theme")
        
            
        
        let cross = document.createElement("i")
        cross.classList.add("fa-solid")
        cross.classList.add("fa-xmark")


    parah.innerText = input.value[0].toUpperCase()+input.value.slice(1)
    content.appendChild(correct)
    content.appendChild(parah)
    remove.appendChild(cross)
    task.appendChild(content)
    task.appendChild(remove)
    father.insertBefore(task,father.children[0])
    input.value = ""
    
    }   
    
    hover()
    line()
    remoVe()
    // counter()
})



let hover = () =>{
    let total = document.querySelectorAll(".task-num")
    total.forEach(item => item.addEventListener("mouseover",(e)=>{
        item.querySelector(".fa-check").style.visibility = "visible"
        item.querySelector(".fa-xmark").style.visibility = "visible"
        item.style.cursor = "pointer"
        // item.querySelector(".theme").style.textDecoration = "line-through" 
        
    }
))

    total.forEach(item => item.addEventListener("mouseout",(e)=>{
    item.querySelector(".fa-check").style.visibility = "hidden"
    item.querySelector(".fa-xmark").style.visibility = "hidden"
    
    // item.querySelector(".theme").style.textDecoration = "none" 
}
))


}

////////
hover()
////////




let line = () => {
    let total = document.querySelectorAll(".task-num")
    
    
    
    total.forEach((item,flag = 1) => item.addEventListener("click",
    (e) => {
        
        if(flag == 1){
            item.querySelector(".theme").style.textDecoration = "line-through" ;
            flag = 0

        }else{
            item.querySelector(".theme").style.textDecoration = "none" 
            flag = 1
            
            
        }
        
    }
    )
    
    

    
)
}

/////////
line()
/////////



let remoVe = () =>{
    let total = document.querySelectorAll(".task-num")
    total.forEach(item => item.querySelector(".delete").        addEventListener("click",
    (e) =>{
        father.removeChild(item)
    })
    )
}


////////
remoVe()
////////










// let small = document.querySelector("#small")
// let all = document.querySelector("#all")

// let count;

// let counter = ()=> {
//     let total = document.querySelectorAll(".theme")
    
    
//     console.log(total);
// }
// counter()