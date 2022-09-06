let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]; // günleri array içerisine aldık
let Name = prompt("Adınız Nedir?"); // setInterval ile clockFunction fonksiyonunu 1 saniyede bir çalıştır dedik.
let myName = document.querySelector("#myName"); //isim bilgisi

if(Name){
    myName.innerHTML = `${Name} `
}else{
    alert("Bir isim giriniz.")
    location.reload();
}
/* 
İf bloğu içerisinde eğer isim girilmezse Alert göster ve sayfayı yeniledik.
*/
function clockFunction(){
    let dateTime= new Date();
    let day = days[dateTime.getDay()];
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML= `${hrs}: ${min}: ${sec}  ${day}` // saat bilgisi
}
    
    setInterval(clockFunction, 1000);

