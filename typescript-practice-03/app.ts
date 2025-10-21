// === Interface: Definisi struktur objek
interface User{
	id: number;
	name: string;
	email: string;
	isActive:boolean;

}

// Buat objek berdasarkan interface
const user: User={
	id: 1,
	name: "Andi",
	email: "andi@example.com",
	isActive: true

};

console.log("User: ", user)
console.log("Name: ", user.name)
console.log("Email: ", user.email)
console.log("Active", user.isActive)


