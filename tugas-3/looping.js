// looping.js
// Soal 1 Looping While
console.log("LOOPING PERTAMA");

let i = 2;
while (i <= 20) {
  console.log(i + " - I love coding");
  i += 2;
}

console.log("LOOPING KEDUA");

let j = 20;
while (j >= 2) {
  console.log(j + " - I will become a mobile developer");
  j -= 2;
}

// Soal 2 Looping For
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 2 !== 0) {
    console.log(i + " - I Love Coding");
  } else if (i % 2 === 0) {
    console.log(i + " - Berkualitas");
  } else {
    console.log(i + " - Santai");
  }
}
