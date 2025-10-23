import { Component, OnInit } from '@angular/core'; // Impor OnInit
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// Impor modul form
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit { // Implementasi OnInit
  title = 'formval-app';
  // 1. Deklarasikan properti FormGroup
  profileForm: FormGroup = new FormGroup({});
  // 2. Injeksi FormBuilder
  constructor(private fb: FormBuilder) { }
  // 3. Inisialisasi form saat komponen dimuat
  ngOnInit() {
    this.profileForm = this.fb.group({
      // Definisikan 'controls'
      nama: ['', Validators.required, Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      umur: ['', [Validators.required, Validators.min(17)]]
    });
  }
  // 4. (Opsional) Getter untuk akses mudah di template
  get nama() {
    return this.profileForm.get('nama');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get umur() {
    return this.profileForm.get('umur');
  }
  // 5. Method untuk submit
  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Form Data:', this.profileForm.value);
      alert('Form berhasil dikirim!');
      this.profileForm.reset(); // Kosongkan form
    } else {
      // Tandai semua field sebagai 'touched' untuk memicu pesan error
      this.profileForm.markAllAsTouched();
      alert('Form tidak valid. Periksa kembali isian Anda.');
    }
  }
}