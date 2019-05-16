"use strict";

//check if letter is uppercase
function isUpperCase(str) {
  return str === str.toUpperCase();
}

//decipher the string
var ceaserCipher = function ceaserCipher(str, key) {
  var decipher = '';

  //decipher each letter
  for (var i = 0; i < str.length; i++) {

    //if letter is uppercase then add uppercase letters
    if (isUpperCase(str[i])) {
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
    } else {
      //else add lowercase letters
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
    }
  }

  return decipher;
};

var enkripsi1 = prompt("Tuliskan pesan");
alert("Hasil enkripsi adalah: " + ceaserCipher(enkripsi1, +1)+ "");

var enkripsi2 = prompt("Tuliskan pesan hasil enkripsi");
alert("Hasil dekripsi dari chipertext adalah: " + ceaserCipher(enkripsi2, -1)+ "");
