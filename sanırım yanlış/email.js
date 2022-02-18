const eMail = document.querySelector("#email");

const buttonCheck = document.querySelector(".button");

const result = document.querySelector(".result");



buttonCheck.addEventListener("click", ()=>{
    if (eMail.value.includes("@") == false) {
    // alert("false email");
    result.innerHTML += "false"

    }
    else if(eMail.value.split("")[eMail.value.length-3] != "." &&
    eMail.value.split("")[eMail.value.length-4] != "."){
        // alert("false email");
        result.innerHTML += "false"
    }
    else{
        // alert("true email");
        result.innerHTML += "true"
    }
});

