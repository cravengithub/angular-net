import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Input nama
rl.question('Masukkan nama Anda: ', (nama: string) => {
    // Output nama
    console.log(`Halo ${nama}, selamat datang!`);
        // Input umur
    rl.question('Berapa umur Anda? ', (umur: string) => {
        // Output umur
        console.log(`${nama} berumur ${umur} tahun`);
        rl.close();
    });
});
