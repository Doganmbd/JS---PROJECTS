//AÇIKLAMALAR

// kodlara başlamadan önce DOM ile neleri yakalamam gerektiğini düşünüyorum.
// input, button, form , ul
const inputText = document.getElementById("task") ;
const button = document.querySelector(".button") ;
// formu resetlemek için ben burada formu da yakalıyorum.yani inputText deki yeni yazdığım yazıyı silmek için.
const form = document.querySelector(".input-search") ;
const ul = document.querySelector("#ul") ;

// function
// burada createTask oluşturmalıyız ki  yeni yazacağım yazılar ul nin altındaki yazılar gibi css özelliğine sahip olsun. bu yüzden html deki div i aynen alıyorum.backtig kullanıyorum ve içine ${taskText} yazıyorum çünkü içerisine yazacağım şey benim yazdığım şey olsun.
/* return içindeki div i döndürür. */
const createTask= (taskText) =>{
    return `   <div class="row">    
    <li class="unchecked">${taskText}</li>
    <button class="btn" href="">&#9866;</button>
    </div>    `
}

// e.preventDefault =HTML elementlerinin mevcut eylemlerini engelleme isteğidir.Yani burada e.preventDefault eklemezsek sayfa otomatik yenilenir ve eklemek istediğimiz yazı eklenmez eskisi gibi görünür.bunu ekledikten sonra sayfa otomatik yenilenmez ve inputa yazdığımız yazı aşağıdaki ul nin içerisinde görünür.
button.addEventListener("click" , e => {   // 
    e.preventDefault() ;
    if(inputText.value){  // boş input eklemesini istemiyorum
        ul.innerHTML += createTask(inputText.value) ; // + işareti aşağıdaki yazıların devamına ekler . yapmasak aşağıdaki yazıları siler ve ekler.Burada HTML yazmalıyız text yazarsak yanlış çıkar.
        form.reset() ;  // note yazdıktan sonra input umun boşalmasını istedim.
    }else {
        alert("please select  a note !") ;
    }
    completedFooterCount();
})

//delete note 
// normalde ul nin tamamını DOM ile aldım benim ul nin içindeki buton ve tik işaretlerine ulaşmam lazım o zaman ; e.target 
ul.addEventListener("click" , (e)=> {
    if(e.target.classList.contains("btn")){    // class btn olanları hedefimize aldık.Yani herhangi bir btn ye basarsa işlem gerçekleşir.
        e.target.parentElement.remove() ;  // parentElement ile bir üst dive çıktım ve - işaretine basınca silme işlemini yaptım.
    }

    // class ismine bakacaz checked ları unchecked yapacaz aynı şekilde tam tersi işlemide yapacaz.yani aslında html de class adını değiştirmiş oluyoruz.
    if(e.target.classList.contains("unchecked")){
        e.target.setAttribute("class","checked") ;
        //e.target.className ="checked"
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


