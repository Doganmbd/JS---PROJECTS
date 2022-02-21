const inputText = document.getElementById("task") ;
const button = document.querySelector(".button") ;
const form = document.querySelector(".input-search") ;
const ul = document.querySelector("#ul") ;

const createTask= (taskText) =>{
    return `   <div class="row">    
    <li class="unchecked">${taskText}</li>
    <button class="btn" href="">&#9866;</button>
    </div>    `

}
    button.addEventListener("click" , e => {    
        e.preventDefault() ;
        if(inputText.value){  
            ul.innerHTML += createTask(inputText.value) ; 
            form.reset() ;  
        }else {
            alert("please select  a note !") ;
        }
        completedFooterCount();
    })
    

    ul.addEventListener("click" , (e)=> {
        if(e.target.classList.contains("btn")){   
            e.target.parentElement.remove() ; 
        }
    
        
        if(e.target.classList.contains("unchecked")){
            e.target.setAttribute("class","checked") ;
        
        }else {
            e.target.setAttribute("class","unchecked")
        }
        completedFooterCount();
    })
    
    const completedFooterCount = () => {
        let footerCount = ul.getElementsByClassName("checked").length;
        let footerCountAll = ul.getElementsByClassName("row").length ;
        console.log(footerCount ,footerCountAll );
    
        const checkedTasks =document.getElementById("checkedTasks") ;
        const allTasks =document.getElementById("allTasks") ;
    
        checkedTasks.innerText = footerCount ;
        allTasks.innerText = footerCountAll ;
    
    }


