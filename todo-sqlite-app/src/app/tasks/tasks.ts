import { Component, OnInit } from '@angular/core';
import { Database } from '../database';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css'],
  imports: [CommonModule, FormsModule]
})
export class Tasks implements OnInit {
  title = 'Aplikasi To-Do SQLite';
  tasks: any[] = [];
  userInput = '';
  loading = true;
  constructor(private db: Database) {
  }
  ngOnInit(): void {
    this.loadTasks();
  }
  loadTasks() {
    this.loading = true;
    this.db = new Database();
    this.db.getAllTasks().then(tasks => {
      this.tasks = tasks;
      this.loading = false;
    }).catch(err => {
      console.error('Gagal memuat tugas:', err);
      this.loading = false;
    });
  }
  addTask() {

    if (this.userInput.trim() !== '') {
      this.db.addTask(this.userInput.trim()).then(id => {
        alert('Tugas berhasil ditambahkan!');
        this.userInput = '';
        this.loadTasks();
      }).catch(err => {
        console.error('Gagal menyimpan:', err);
      });
    } else {
      alert('Judul tugas tidak boleh kosong!');
    }
  }
  deleteTask(id: number) {
    if (confirm('Yakin ingin menghapus?')) {
      this.db.deleteTask(id).then(success => {
        if (success) {
          this.loadTasks();
        }
      });
    }
  }
  editTask(task: any) {
    const newTitle = prompt('Ubah judul:', task.title);
    if (newTitle !== null && newTitle.trim() !== '') {
      this.db.updateTask(task.id, newTitle.trim(), task.isCompleted)
        .then(success => {
          if (success) {
            alert('Tugas berhasil diperbarui!');
            this.loadTasks();
          }
        });
    }
  }
}