// === JavaScript (tanpa tipe) ===
let name = "Andi";
let age = 25;
let isStudent = "true";
console.log(name);
console.log(age + 5);
console.log(isStudent);
// Salah satu kesalahan umum: kirim string ke angka
let result = age + "5"; // Ini tidak error!
console.log(result); // Output: "255"