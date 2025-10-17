// conditional.js
// Jawaban Soal if-else
var nama = "Yazid";
var peran = "";

if (nama === "") {
  console.log("Nama harus diisi!");
} else if (peran === "") {
  console.log("Pilih peranmu untuk memulai game!");
} else {
  if (peran === "Penyihir") {
    console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`);
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
    console.log(
      "Halo Penyihir " +
        nama +
        ", kamu dapat melihat siapa yang menjadi werewolf!"
    );
  } else if (peran === "Guard") {
    console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`);
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
    console.log(
      "Halo Guard " +
        nama +
        ", kamu akan membantu melindungi temanmu dari serangan werewolf."
    );
  } else if (peran === "Werewolf") {
    console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`);
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
    console.log("Halo Werewolf " + nama + ", kamu akan memangsa setiap malam!");
  } else {
    console.log(
      "Peran tidak dikenali, silakan pilih antara Penyihir, Guard, atau Werewolf!"
    );
  }
}
