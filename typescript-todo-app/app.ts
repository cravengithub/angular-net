// === Interface: Struktur tugas ===
interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
    createdAt: Date;
}
// === Type Alias: Status tugas ===
type Status = 'active' | 'completed' | 'overdue';
// === Class: Kelas untuk manajemen tugas ===
class TaskManager {
    private tasks: Task[] = [];
    private nextId: number = 1;
    // Method: Tambah tugas baru
    addTask(title: string): void {
        const newTask: Task = {
            id: this.nextId++,
            title,
            isCompleted: false,
            createdAt: new Date()
        };
        this.tasks.push(newTask);
        console.log(`Tugas "${title}" ditambahkan!`);
    }
    // Method: Toggle status tugas
    toggleTask(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.isCompleted = !task.isCompleted;
            console.log(`Status tugas ${id} diubah.`);
        } else {
            console.log(`Tugas dengan ID ${id} tidak ditemukan.`);
        }
    }
    // Method: Hapus tugas
    deleteTask(id: number): void {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            const deletedTask = this.tasks.splice(index, 1)[0]!;
            console.log(`Tugas "${deletedTask.title}" dihapus.`);
        } else {
            console.log(`Tugas dengan ID ${id} tidak ditemukan.`);
        }
    }
    // Method: Dapatkan semua tugas
    getAllTasks(): Task[] {
        return this.tasks;
    }
    // Method: Filter tugas berdasarkan status
    getTasksByStatus(status: Status): Task[] {
        switch (status) {
            case 'active':
                return this.tasks.filter(t => !t.isCompleted);
            case 'completed':
                return this.tasks.filter(t => t.isCompleted);
            case 'overdue':
                return this.tasks.filter(t => !t.isCompleted && t.createdAt < new Date(Date.now() - 7 *
                    24 * 60 * 60 * 1000));
            default:
                return this.tasks;
        }
    }
    // Method: Cetak daftar tugas
    printTasks(): void {
        console.log("\n📋 Daftar Tugas:");
        if (this.tasks.length === 0) {
            console.log("Belum ada tugas.");
            return;
        }
        this.tasks.forEach(t => {
            const status = t.isCompleted ? "✓" : "○";
            const date = t.createdAt.toLocaleDateString();
            console.log(`${t.id}. ${t.title} (${status}) - ${date}`);
        });
    }
}

// === Inisialisasi aplikasi ===
const taskManager = new TaskManager();
// === Contoh penggunaan ===
taskManager.addTask("Belajar TypeScript");
taskManager.addTask("Buat project");
taskManager.addTask("Ikut pelatihan");
// Tampilkan daftar
taskManager.printTasks();

// Ubah status
taskManager.toggleTask(1);
// Tampilkan lagi
taskManager.printTasks();
// Hapus tugas
taskManager.deleteTask(2);
// Tampilkan akhir
taskManager.printTasks();
// Filter tugas aktif
console.log("\n✅ Tugas Aktif:");
taskManager.getTasksByStatus('active').forEach(t => console.log(`- ${t.title}`));