// === TypeScript (dengan tipe) ===
let name: string = "Andi";
let age: number = 25;
let isStudent: boolean = true;
console.log(name);
console.log(age + 5);
console.log(isStudent);
// / Kesalahan: mencoba menambahkan string ke number tanpa konversi
// let result = age + "5"; // ❌ ERROR! TypeScript akan menangkap ini saat compile
// Solusi: gunakan konversi
let result: string = age.toString() + "5";
console.log(result); // Output: "255"

let score: number = 61;
let grade: string = "A";
let isActive: boolean = false;

/*
function calculateGrade(score: number): string {
    if (score >= 85) return "A";
    else return "B";
}*/
function calculateGrade(score: number): string {
    if (score >= 81 && score <= 100) {
        return "A";
    } else if (score >= 61 && score <= 80) {
        return "B";
    } else if (score >= 41 && score <= 60) {
        return "C";
    } else if (score >= 21 && score <= 40) {
        return "D";
    } else {
        return "E";
    }
    console.log(calculateGrade(score)); // Output: "A"