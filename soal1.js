/*
    Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
    - Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
    - Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"

Hint : gunakan rumus sqrt(x)

*/
function hitungAkar(x) {
  if (x % 2 == 0) {
    hasil = Math.sqrt(x);
    console.log(hasil);
  } else if (x % 2 == 1) {
    console.log("Tidak bisa input bilangan ganjil");
  } else {
    console.log("Tidak bisa input bilangan negatif");
  }
}

var x = 5;
hitungAkar(x);
var x = 6;
hitungAkar(x);
var x = -5;
hitungAkar(x);
