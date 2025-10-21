import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {
  nama = 'Andi';
  umur = 25;
  fotoUrl = 'assets/user.jpg';
  isDisabled = false;
  teks = '';
  jumlahKarakter = 0;
  
  pesan = 'Klik tombol untuk melihat pesan!';
  jumlahKlik = 0;

  // Fungsi yang dipanggil saat tombol diklik
  onButtonClick() {
    this.pesan = 'Tombol sudah diklik! 🎉';
    this.jumlahKlik++;
  }

  // Fungsi untuk reset pesan
  resetPesan() {
    this.pesan = 'Klik tombol untuk melihat pesan!';
    this.jumlahKlik = 0;
  }

   // Saat pengguna mengetik → update teks
  onInput(event: any) {
    this.teks = event.target.value;
    this.jumlahKarakter = this.teks.length;
    this.pesan = `Karakter: ${this.jumlahKarakter}`;
  }

  // Saat pengguna menekan Enter
  onEnterKey(event: Event) {
  // Cek apakah event adalah KeyboardEvent
  if (event instanceof KeyboardEvent && event.key === 'Enter') {
    alert(`Anda mengetik: "${this.teks}"`);
  }
}

  // Saat kolom kehilangan fokus (blur)
  onBlur() {
    if (!this.teks.trim()) {
      this.pesan = '⚠️ Kolom kosong! Silakan isi.';
    } else {
      this.pesan = `✅ Teks sudah diisi: ${this.teks}`;
    }
  }

  // Reset input
  reset() {
    this.teks = '';
    this.jumlahKarakter = 0;
    this.pesan = 'Tulis sesuatu di kolom di bawah ini...';
  }
}
