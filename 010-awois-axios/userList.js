// Api dan aldığımız kullanıcıları fotoğraflarıyla birlikte listeleyecem
// postman de test ettim ve kafamda projemi tasarladım.
// api dan gelen verileri bir format içerisinde tbodyuserlist içine append edecem.

const tbody = document.getElementById("tbodyUserList");
const loading = document.getElementById("loading");

window.onload = () => {
  //genelde başına get veya post yazıyorum ne olduğunu anlayabilmek için.
  getApiUserList();
};
// ilkin verilerin gelmesini sağlayacam sonra 5 sn de bir güncellenmesini sağlayacam
// veri gelmesi için bekleme yapacağım için async-await kullanmam lazım fonksiyonlarımda.
const getApiUserList = async () => {
  showLoading();
  try {
    // burada hata yakalamk istersem try-catch kullanırım.kodu try a yazarım yakalama işini de catch ile yaparım .

    //axios
    const responseData = await axios("https://reqres.in/api/users?page=1");
    console.log(responseData); // veriyi görüyorum ona göre hareket ediyorum.
    const { data: UserListArray } = responseData.data; // destructure ile birlikte responsedata nın datasının data sını aldım.
    // console.log(data)
    console.log(UserListArray);
    
    // array imi forEach ile teker teker gezip tbody nin içine yazdıracam
    UserListArray.forEach(customer => {
        tbody.innerHTML +=   `
    <tr>
        <td>${customer.id}</td>
        <td><img src="${customer.avatar}"></td>
        <td>${customer.email}</td>
        <td>${customer.first_name} </td>
        <td>${customer.last_name}</td>
    </tr>
    `
    });
  } catch (error) {
    //hataya düştüyse spinner ekranda kalmaya devam eder.bu yüzden removeLoading catch de hata aldığım yerde yok etmeliyim. yani catch içinde yazmalıyım.
    alert(error);
    removeLoading();
  }
};

// diyelim bizim çok sayfamız var bunların hepsine teker teker show ve remove yazmak mantıklı değil bu yüzden ben bunu extension.js diye bir java fonk.içerisine yazabilirim ve bunu sayfama import edebilirim veya import-export şeklinde yapabilirim
