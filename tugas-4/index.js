// ES6.js
// Jawaban Soal 1
// Menggunakan const untuk mendefinisikan fungsi (karena tidak akan diubah)
const luasPersegiPanjang = (p, l) => p * l;

const kelilingPersegiPanjang = (p, l) => 2 * (p + l);

const p = 10;
const l = 5;

console.log("Luas Persegi Panjang =", luasPersegiPanjang(p, l));
console.log("Keliling Persegi Panjang =", kelilingPersegiPanjang(p, l));

// Jawaban Soal 2
// const newFunction = function literal(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function(){
//       console.log(firstName + " " + lastName)
//     }
//   }
// }

// //Driver Code
// newFunction("William", "Imoh").fullName()
const newFunction = (firstName, lastName) => ({
  firstName,
  lastName,
  fullName: () => console.log(`${firstName} ${lastName}`),
});

const person = newFunction("Yazid", "Aqsa");
person.fullName();
// Jawaban Soal 3
const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
};

const { firstName, lastName, address, hobby } = newObject;

console.log(firstName, lastName, address, hobby);
// Jawaban Soal 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

const combined = [...west, ...east];
console.log(combined);
// Jawaban Soal 5
const planet = "earth";
const view = "glass";

console.log(`I would like to visit ${planet} with my ${view}`);
