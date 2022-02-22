const clock = document.getElementById("clock") ;
// symbol unutma 4 tane
//div ekranın üst tarafındaki diplay in 2 tane span biri sayı diğeri operatör.alt tarafındaki diplay ise ilk girilen rakamları göstermek için. 
const topDisplayNum = document.querySelector("#top-display-num") ;
const topDisplayOprt = document.getElementById("top-display-operator") ;
const bottomDisplay = document.querySelector(".current-display")

// tüm divi alıp işlem yapıyorum
const buttonClick = document.querySelector(".calculator") ;
console.log(buttonClick);

// setInterval =  amacı belirttiğimiz süre içerisinde sürekli olarak belirttiğim işleri yapmasını sağlar.ilk attribute fonk , 2. kaç saniye
setInterval( () => {
    const time = new Date() ;
    // burada saat dakika görüntülemek istiyorum.getHours,getMinutes
    // gösterdiğim saati 3 değil 03 olması için başta string yapıyorum sonra ilk 2 sayısını alıyorum.(padStart)
    const [h,m,y,mt,d] = [time.getHours().toString().padStart(2,"0"),time.getMinutes().toString().padStart(2,"0"),time.getFullYear().toString().padStart(2,"0"),time.getMonth().toString().padStart(2,"0"),time.getDate().toString().padStart(2,"0")]
    
    //görüntülenmesi için ;
    clock.innerText = h + ":" + m + " " + " " + y + "- " + mt + "-"+ d ;
    } , 1000) ;
    


// display kısmındaki işlemlerimi yapacam ilk önce bir fonk. belirliyorum ve diğer işlemlerimde bu fonk. ihtiyacı olabilir diye.
function operator(operate) {
/*        if (bottomDisplay.innerHTML == "") {
    return;
  }  */

  //ilk rakam girdiğimde sayı alt display de görünecek sadece rakam girilip operator girilmeden eşittir e basınca rakamın üst displaye çıkmasını istiyorum.
  if(topDisplayNum.innerText && topDisplayOprt.innerText == "") {
    topDisplayNum.innerText = bottomDisplay.innerText ;
    bottomDisplay.innerText = "" ;
    return ;
  }
  
// topDisplayNum doluysa ve operatorumün içinde % varsa
    if(topDisplayNum.innerText) {
        if(topDisplayOprt.innerText == "%") {
        topDisplayNum.innerText = (topDisplayNum.innerText * bottomDisplay.innerText) / 100 ;
        bottomDisplay.innerText ="" ;
        return ;
    }
    

 
/*      if(operate == "=") {
        operate = topDisplayOprt.innerText
    } 
 */
    switch (operate) {
        case "+":
            topDisplayNum.innerText = +topDisplayNum.innerText + +bottomDisplay.innerText ;
            break ;

        case "-":
            topDisplayNum.innerText = topDisplayNum.innerText - bottomDisplay.innerText ;
            break ;
            
        case "x":
            topDisplayNum.innerText = topDisplayNum.innerText * bottomDisplay.innerText
            break ;

        case "÷":
            topDisplayNum.innerText = topDisplayNum.innerText / bottomDisplay.innerText                    
            break;
            
 
    }
    bottomDisplay.innerText ="" ;
    return ;

} 
topDisplayNum.innerText = bottomDisplay.innerText ;
bottomDisplay.innerText = ""
} 

// switch case yapısında anahtar kelime tüm durumlarla karşılaştırılır.bir eşleşme varsa ilgili kod bloğu yürütülür.eşleşme yoksa default değer yürütülür.
buttonClick.addEventListener("click" , (e) =>{
    if(e.target.tagName === "BUTTON") {
        switch (e.target.id) {
            case "funPercent":
            case "opDiv":
            case "opMult":
            case "opSub":
            case "opAdd":
                // şayet "." ile bitmişse ve sonrasında yukarıdaki butonlardan birine basarsa noktayı silmesi gerekir.o zaman ;
                if(bottomDisplay.innerText.endsWith(".")) {
                    bottomDisplay.innerText = bottomDisplay.innerText.slice(0,-1) ;
                }
                if(bottomDisplay.innerText) {
                    operator(topDisplayOprt.innerText)
                }
                
// e.target.innerHTML = container içindeki yukarıdaki tuşlardan herhangi bir tuşa basmak oluyor.burada şayet topDisplayNum doluysa yanına operatörü ekle.
                if(topDisplayNum.innerText) {
                    topDisplayOprt.innerText = e.target.innerHTML ;
                }
                break;
        case "num9" :
        case "num8" :
        case "num7" :
        case "num6" :
        case "num5" :
        case "num4" :
        case "num3" :
        case "num2" :
        case "num1" :
        case "num0" :

// 0 sayısını bir defa yazlıyken girilen rakamları yazarken 0 silinmesini istiyorum.0 da bir daha yazdırmamak için yaptım.
            if(bottomDisplay.innerText === "0") {
                bottomDisplay.innerText = ""
            }

// 10 a kadar sayı ekleyebileyim.
            if(bottomDisplay.innerText.length < 10) {
                bottomDisplay.innerText += e.target.innerHTML ;
            }
                break;
            
// ac tuşu ile tüm displayı sildim.
            case "funAc" :
                topDisplayNum.innerText = topDisplayOprt.innerText =bottomDisplay.innerText = ""
                break ;

// del tuşu ile bir tane silme işlemi yaptım.
            case "funDel" :
                if(bottomDisplay.innerText){
                    bottomDisplay.innerText = bottomDisplay.innerText.slice(0,-1)
                }
                break ;

// dot ile nokta ekledim
            case "dot" :
                if(bottomDisplay.innerText && !bottomDisplay.innerText.includes(".")) {
                    bottomDisplay.innerText +="."
                }
                break ;

            case "equ" :
                operator(topDisplayOprt.innerText)
                    topDisplayOprt.innerText = ""
                
                break ;
        }
    }
})