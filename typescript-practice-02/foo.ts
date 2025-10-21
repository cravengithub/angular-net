import * as readlineSync from 'readline-sync';

const nama = readlineSync.question('Masukkan nama Anda: ');
const usia = parseInt(readlineSync.question('Masukkan usia Anda: '));

console.log(`Halo, ${nama}! Usia Anda ${usia} tahun.`);