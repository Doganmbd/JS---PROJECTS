// get ile request oluşturup post ile API ye veri gönderme projesi

// baseURL ve andpoint belli. kullanıcıdan aldığım input değerlerini bazı formata çevirmem lazım.
// axios json u stringe , string i de jsona çeviriyor ekstra bir işlem yapmaya gerek yok. 

const mail = document.querySelector("#email") ;
const password = document.querySelector("#password") ;
const submitBtn = document.getElementById("submit") ;

window.addEventListener("load", ()=> {
    mail.value = "eve.holt@reqres.in"
    password.value = "pistol"
})
// bir istek atacam bana bir id ve token döncek bu token ı b  localstoage de tutacam.

submitBtn.addEventListener("click", (e)=> {
    postCustomerRegister() ;
})  

const postCustomerRegister = async () => {
    //alert("çalışıyor")
    // göndereceğim veriyi hazırlıyorum.
    const bodyData = {
        email:mail.value,
        password:password.value
    };
    // console.log(JSON.stringify(bodyData));
    try {
        showLoading();

        // artik yazdığım veriyi post metodu ile göndermeliyim .
        const response = await axios({
            url:"https://reqres.in/api/register",
            method:"post",
            data:bodyData  // yazdığım veriyi gönderiyorum.
        });
        console.log(response)
        const {data:userData} = response;
        console.log(userData);
        if(userData.token == undefined){
            alert("undefined");
            removeLoading();
        }
        else{
            sessionStorage.setItem("baseUrl", EncryptStringAES("https://reqres.in"));
            sessionStorage.setItem("apiKey", EncryptStringAES(userData.token));
            removeLoading();
            window.location.href = "userList.html";
        }
    } 
    catch (error) {
        alert(error);
        removeLoading();

    }
}
