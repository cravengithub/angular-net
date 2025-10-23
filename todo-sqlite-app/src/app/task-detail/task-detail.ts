import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Database } from '../database';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.html',
  styleUrls: ['./task-detail.css'],
  imports: [CommonModule, DatePipe]
})
export class TaskDetail implements OnInit {
  taskId!: number;
  task: any = null;
  constructor(
    private route: ActivatedRoute,
    private db: Database,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = +params['id'];
      this.loadTask();
    });
  }
  loadTask() {
    this.db.getAllTasks().then(tasks => {
      this.task = tasks.find((t: any) => t.id === this.taskId);
      if (!this.task) {
        console.log('Tugas tidak ditemukan');
      }
    }).catch(err => {
      console.error('Gagal memuat tugas:', err);
    });
  }
  updateTask() {
    const newTitle = prompt('Ubah judul:', this.task.title);
    if (newTitle !== null && newTitle.trim() !== '') {
      this.db.updateTask(this.task.id, newTitle.trim(), this.task.isCompleted)
        .then(success => {
          if (success) {
            alert('Tugas berhasil diperbarui!');
            this.loadTask();
          }
        });
    }
  }
  deleteTask() {
    if (confirm('Yakin ingin menghapus tugas ini?')) {
      this.db.deleteTask(this.task.id).then(success => {
        if (success) {
          alert('Tugas dihapus.');
          this.router.navigate(['/']);
        }
      });
    }
  }
  goBack() {
    this.router.navigate(['/']);
  }
}