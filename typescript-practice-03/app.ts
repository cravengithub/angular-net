// === Interface: Definisi struktur objek
interface User {
	id: number;
	name: string;
	email: string;
	isActive: boolean;

}

// Buat objek berdasarkan interface
const user: User = {
	id: 1,
	name: "Andi",
	email: "andi@example.com",
	isActive: true

};
user.name = "Budi"; // Update properti	
console.log("User: ", user)
console.log("Name: ", user.name)
console.log("Email: ", user.email)
console.log("Active", user.isActive)

console.log("====================================================")

// === Type Alias: Membuat tipe khusus ===
type Status = 'active' | 'inactive' | 'pending';
// Gunakan type alias
let status: Status = 'inactive';
console.log("Status:", status);
// Coba set nilai salah → akan error!
// status = 'unknown'; // Error: Type 'unknown' is not assignable to type 'Status'

console.log("====================================================")

// / === Class: Template untuk objek ===
class Task {
	id: number;
	title: string;
	isCompleted: boolean;
	createdAt: Date;
	constructor(id: number, title: string) {
		this.id = id;
		this.title = title;
		this.isCompleted = false;
		this.createdAt = new Date();
	}
	toggle(): void {
		this.isCompleted = !this.isCompleted;
	}
	toString(): string {
		return `${this.title} (${this.isCompleted ? '✓' : '○'})`;
	}
}
// Buat instance dari class
const task1 = new Task(1, "Belajar TypeScript");
console.log("Tugas:", task1.toString());
// Ubah status
task1.toggle();
console.log("Tugas setelah toggle:", task1.toString());

console.log("====================================================")
// === Gunakan Interface untuk Array ===
interface TaskData {
	id: number;
	title: string;
	isCompleted: boolean;
}
// Simpan tugas dalam array
const tasks: TaskData[] = [
	{ id: 1, title: "Belajar Angular", isCompleted: false },
	{ id: 2, title: "Buat project", isCompleted: true }
];
console.log("Daftar Tugas:");
tasks.forEach(t => console.log(`- ${t.title} (${t.isCompleted ? '✓' : '○'})`));