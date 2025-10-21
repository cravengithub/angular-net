// === Fungsi dengan try-catch ===
function safeDivide(a: number, b: number): number | null {
	try {
		if (b === 0) {
			throw new Error("Pembagi tidak boleh nol!");
		}
		return a / b;
	} catch (error) {
		if (error instanceof Error) {
			console.error("Kesalahan saat pembagian:", error.message);
		} else {
			console.error("Kesalahan yang tidak diketahui");
		}
		return null;
	}
}

// Uji fungsi
console.log(safeDivide(10, 2)); // Output: 5
console.log(safeDivide(10, 0)); // Output: null (dengan pesan error)
console.log("=============================");
/*
// === Kesalahan: mengakses properti dari objek undefined ===
const user = null;
try {
	console.log(user.name); // Error: Cannot read property 'name' of undefined
} catch (error) {
	if (error instanceof Error) {
		console.error("Kesalahan:", error.message);
	}

}
	*/
console.log("=============================");
function calculateSum(a: number, b: number): number {
	debugger; // Titik henti debug
	return a + b;
}
console.log(calculateSum(5, 3));
console.log("=============================");
function processTask(taskId: number): void {
	console.log("🔄 Mulai proses tugas ID:", taskId);
	if (taskId <= 0) {
		console.error("❌ ID tugas harus lebih besar dari 0");
		return;
	}
	console.log("✅ Tugas berhasil diproses");
}
processTask(1);
processTask(-1);