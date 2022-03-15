// const data2 = fetch("https://restcountries.com/v3.1/name/Turkey") ;
// console.log("ilk veri",data2)          //promise{pending} çıktısı verir. 
// bir promise ilk oluşturulduğu zaman pending verir işlem sonrası settled . settled sonrası ya fulfilled yada reject olur.şu an sürecin tamamlanmasını beklemeden console yaptığım için promise{pending} verdi.aslında promise içinde fulfilled işlemi tammalandı ama biz göremedik bunu yakalamam için then kullanmalıyım .yani fullfilled olduktan sonra yapılacak işlemler de bana bir response gelecek.

// then kullanmadığım zaman ben veriye ulaşamıyorum çünkü bu verinin gidip alınması bir süreç alıyor. js bekleme yapmıyor bu süreci beklemeden bir sonraki komutu çalıştırıyor.bu yüzden veriyi yakalayamıyorum .burdan gelecek data yı ancak promise ile yakalayabilirim.promiselerde de sonucu bekleten mekanizmalar var .yani sonuç geldikten sonra yapılacak işlmeler var.sonuç geldikten sonra yapılacak işlemi then in içine yazıyorum yani diyorum ki sen bu siteye gideceksin bir request atacaksın karşılığında bir  response gelecek ben diyorum ki o response geldiği zaman bunları yap yani then in içine koyduğum fonksiyonla bunu diyorum.ama fetch in yapısı daha veriye ulaşmama uygun değil çünkü 2 yapılı gibi düşünebiliriz fetch in yapısını.ilk adımda diyorum ki body nin içinda gelen formatı json formatına çevir.(JSON javascript için geliştirilmiş bir object temsili yapı.burada kullandığımız json komutu fetch e ait bir komut normal bizim her zaman kullandığımız json komutu değil ve ppromise şeklinde çalışır.).fetch i yapan adamlar bunu bir promise olarak çalıştırmamızı sağlayan bir yapıda yapmışlar.yeni bir promise oluşturmalıyım . yeni promise in sonucunu yine then ile yakalıyorum.

/* fetch("https://restcountries.com/v3.1/name/Turkey").then((promise) => {
  console.log(promise) ;
  return promise.json()
}).then((data) => {
  console.log(data) ;
  console.log(data[0].capital)
}) */


const renderCountry = (data, type = 'country') => {
  // const flag = data.flags.svg;
  // const countryName = data.name.common;
  // const region = data.region;
  // const capital = data.capital;
  // const population = data.population;
  // const languages = data.languages;
  // const currencies = data.currencies;

  //destruction yapısı
  const {
    region,
    population,
    capital,
    languages,
    currencies,
    name: { common: countryName },
    flags: { svg: flag },
  } = data;

  const countryHtmlCard = `
      <img src="${flag}" class="card-img-top border border-secondary" alt="Flag" />
      <div class="card-body">
        <h5 class="card-title">${countryName}</h5>
        <p class="card-text">${region}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><span><i class="fas fa-2x fa-landmark"></i>${capital}</span></li>
        <li class="list-group-item"><span><i class="fas fa-lg fa-users"></i>${(
          population / 1_000_000
        ).toFixed(2)} M</span></li>
        <li class="list-group-item"><span><i class="fas fa-lg fa-comments"></i>${Object.values(
          languages
        )}</span></li>
        <li class="list-group-item">
          <span
            ><i class="fas fa-lg fa-money-bill-wave"></i>${
              Object.values(currencies)[0].name
            } ${Object.values(currencies)[0].symbol}
            </span
          >
        </li>
      </ul>`;
  if (type === 'country') {
    const countryHtml = `<div class="container country">
            <div class="row justify-content-center mt-5">
              <div class="card country-card col col-sm-6 col-lg-3 py-3" >
                ${countryHtmlCard}
              </div>
            </div>
            <div class="row justify-content-start neighbour-container">
          </div>`;
    const main = document.querySelector('main');
    main.insertAdjacentHTML('afterbegin', countryHtml);
  } else if (type === 'neighbour') {
    const neighbourHtml = `<div class="card col col-sm-6 col-lg-3 py-3 neighbour">${countryHtmlCard}</div>`;
    const neighbourDiv = document.querySelectorAll('.neighbour-container');
    neighbourDiv[0].insertAdjacentHTML('beforeend', neighbourHtml);
  }
};



// fetch("").then işlemleri eskide kaldı artık async await kullanılıyor.bir fonk. içinde await kullanabilmek için o fonk. async olması lazım.await ile yapılacak işlemin sonucu bekle komutu vermiş oluyorum. 
// async-await : 1 ) yazacağımız fonk. önüne async koymalıyız. 2)async await ile birlikte kullanılır yani veri çekmek istediğimizde veya vakit alacak bir işlem varsa await ile onu çekebiliriz.

// const getCountry = async (getCountry) => {

//   const onestep = await fetch(`https://restcountries.com/v3.1/name/${getCountry}`)
//   // console.log(onestep)
//   const data2 =await onestep.json()
//   // console.log(data2)
//   // console.log(data2[0])        // 0. index benim data bilgilerimin olduğu yer.
//   renderCountry(data2[0])     // yukarıda yaptığım render fonk. dan, buradan veri çekiyorum.
// }

// getCountry("uk")


//2.yol .data yı başka bir yerde kullancağım için return edebilirim.fonk. return kullanmamızın amacı o veriyi başka bir yerde kullanmaktı.

// ben burada sadece veri çekmek için bu fonk yazıyorum.

/* const getCountry2 =async (getCountry2) => {
    const countryName =await fetch(`https://restcountries.com/v3.1/name/${getCountry2}`)
    console.log(countryName)
    const jsonCountryName = await countryName.json();
    
    // console.log(jsonCountryName)
    console.log(jsonCountryName[0])
    // console.log(jsonCountryName[0].borders)
    // console.log(jsonCountryName[0].borders[0])
    return jsonCountryName[0]  //birkaç işlem yapacağım için yani hem ülke isimlerini hemde komşu ülkeleri bulmam için return edip bunları başka yerlerde kullanmak istiyorum.bu yüzden rende işlemini burada yapmıyorum yeni bir fonk. tanımlaması yapıyorum.
    // renderCountry(jsonCountryName[0])
}



// getCountry2("Turkey")

//https://restcountries.com/v3.1/alpha/{code}

const neighbourTotal = async (neighbour)=> {
  const neighbourOne = await fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
  console.log(neighbourOne);
  const jsonNeighbour =await neighbourOne.json()
  console.log(jsonNeighbour[0]);

}
neighbourTotal()

const allMethod =async (oneMethod) => {
  const twoMethod =await getCountry2(oneMethod);
  renderCountry(twoMethod)



}

allMethod("turkey") */


// name e göre fetch yapacam
// https://restcountries.com/v3.1/name/{name}

const countryName =async (name)=> {
  const fetchCountryName =await fetch(`https://restcountries.com/v3.1/name/${name}`)
  // console.log(fetchCountryName)
  const jsonCountryName =await fetchCountryName.json()
  // console.log(jsonCountryName)
  console.log(jsonCountryName[0])
/*   console.log(jsonCountryName[0].borders)
  console.log(jsonCountryName[0].borders[0]) */
  return jsonCountryName[0];
}

//code https://restcountries.com/v3.1/alpha/{code}
// komşulara ulaşıp tek tek verilere ulaşmam lazım burada ben artık name bilgisiyle ulaşamam AZE vb. kodlar var bu end point(name) bana ülke bilgilerini getirmez . code göre almam lazım.yukarıdakinin aynısını aşağıda yeniden yazıyorum  
const countryCode = async (code) => {
  const fetchCountryCode =await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
  // console.log(fetchCountryCode)
  const jsonCountryCode = await fetchCountryCode.json() ;
  console.log(jsonCountryCode[0]) ;
  return jsonCountryCode[0];
}

// countryCode("ARM")


const renderError = (msg) => {
  const inputContainer = document.querySelector('.input-section');
  const errorHtml = document.createElement('div');

  errorHtml.classList.add('alert', 'alert-danger', 'alert-container');
  errorHtml.innerText = msg;
  inputContainer.insertAdjacentElement('beforeend', errorHtml);
  // errorHtml.remove();
  setTimeout(() => {
    errorHtml.remove();
  }, 2000);
};


const useData =async (countryAllName)=> {
  //eğer hata yakalamk istiyorsak normalde then de catch ile async-await de try-catch ile yakalarız.
  //hata olmas ihtimali olan kısmın en başına try yazıyoruz daha sonra try içine yapmak istediğimiz işlmeleri yapıyoruz ve eğer hata olursa catch ile yakalıyoruzbu noktada API üzerinden görünen hataları yakalar ve bizde hata yakalama için ayrıca oluşturabiliriz çünkü API ye göre hata olmayan şeyler bize göre hata olabiliyor
    try {
      const dataOne =await  countryName(countryAllName) ;
  console.log(dataOne)
  renderCountry(dataOne)

  // burada dataOne ın borders içinde ki kodlara ulaşmamgerekiyor bu yüzden kodlara ulaştım dataOne.borders[0] = ARM koduna eşit olduğu için bu şekilde yazmalıyım.
/*   const dataCode =await countryCode(dataOne.borders[0])
  renderCountry(dataCode,"neighbour")  //yukarıda yazdığım renderCountry fonk. içerisindeki neighbour formatında olsun diye 2.parametreye neighbour yazdım.bunları teker teker yapmam zor bu yüzden ya forEach , ya for in yad a for kullanmam lazım.  
  const dataCode2 =await countryCode(dataOne.borders[1])
  renderCountry(dataCode2,"neighbour")  */
  //! yukarıda yaptığım gibi teker teker bu işlemleri yapamam hem ne kadar komşu ülke olduğunu bilmiyorum.bu yüzden forEach ve for of metodunu kullanacam.ama bazı async yapılan yerlerde "forEach" yapısı hata verdiği için biz "for of" ile bu işlemi yapacaz.


  //eğer seçtiğim ülkenin hiç komşusu yoksa forEach boş loop döndüremediği için hata verir. bunu ortadan kaldırmak için if yapısına ihtiyacım var.
  console.log(dataOne.borders)
  if(dataOne.borders){
/*   dataOne.borders.forEach(async(item) => {
    // console.log(item)
    const neighbourCountry = await countryCode(item)
    // console.log(neighbourCountry)
    renderCountry(neighbourCountry, "neighbour") */

    for await (const itemTwo of dataOne.borders) {
      const neaighbourCountryTwo = await countryCode(itemTwo)
      console.log(neaighbourCountryTwo)
      renderCountry(neaighbourCountryTwo, "neighbour")
     }
    
  // });

}else {
  console.log("komşu yok")
  throw new Error("sorry no neighbour")
}
    } catch (error) {
      console.log(error)
      renderError(error)
    }
  
  

} 


useData("australia")