// src/tasks/task.service.ts
import { TaskData } from './task.interface';
export class TaskService {
    // Tampilkan daftar tugas
    displayTasks(): void {
        console.log("Daftar Tugas:");
        this.tasks.forEach(t => {
            const status = t.isCompleted ? '✓' : '○';
            console.log(`- ${t.title} (${status})`);
        });
    }
    // Dapatkan semua tugas
    getTasks(): TaskData[] {
        return [...this.tasks]; // Return copy
    }
    // Tambahkan tugas baru
    addTask(title: string): void {
        const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
        this.tasks.push({ id: newId, title, isCompleted: false });
        console.log(`Tugas "${title}" ditambahkan.`);
    }
    // Ubah status tugas
    toggleTask(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.isCompleted = !task.isCompleted;
            console.log(`Status tugas "${task.title}" diubah.`);
        } else {
            console.log(`Tugas dengan ID ${id} tidak ditemukan.`);
        }
    }
    private tasks: TaskData[] = [];
}