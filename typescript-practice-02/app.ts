// === Konstanta (const) ===
const appName: string = "Aplikasi To-Do Angular";
const version: number = 1.0;
const isProduction: boolean = false;
console.log("Aplikasi:", appName);
console.log("Versi:", version);
console.log("Produksi:", isProduction);
// Coba ubah nilai const → akan error saat compile!
// appName = "Aplikasi Baru"; // Error: Cannot assign to 'appName' because it is a constant.

console.log("==============================");
// === Variabel yang bisa diubah (let) ===
let currentUser: string = "admin";
let taskCount: number = 0;
console.log("Pengguna:", currentUser);
console.log("Jumlah tugas:", taskCount);
// Ubah nilai
currentUser = "user123";
taskCount = 5;
console.log("Pengguna baru:", currentUser);
console.log("Jumlah tugas baru:", taskCount);

console.log("==============================");
// === Tipe any (bisa berisi apa saja) ===
let dynamicData: any = "Ini string";
console.log("Dynamic:", dynamicData);
dynamicData = 123; // Boleh!
console.log("Dynamic:", dynamicData);
dynamicData = true; // Boleh!
console.log("Dynamic:", dynamicData);
// Tapi ini bisa menyebabkan error di kemudian hari
// Jangan gunakan di proyek besar!

console.log("==============================");
//  === Tipe void (tidak mengembalikan nilai) ===
function showWelcome(): void {
    console.log("Selamat datang di aplikasi!");
}
// === Tipe fungsi dengan parameter dan nilai kembali ===
function tambah(a: number, b: number): number {
    return a + b;
}
let hasil: number = tambah(5, 10);
console.log("Hasil penjumlahan:", hasil);
let h =  showWelcome(); // Output: Selamat datang di aplikasi!
console.log("Nilai h:", h); // Output: Nilai h: undefined