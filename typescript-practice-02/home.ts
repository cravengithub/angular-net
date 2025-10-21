// membuat variabel untuk menyimpan
let email: string = "andi@example.com"
let score: number = 95
let hasCompleted: boolean = true
function checkScore(score: number): string {
    if (score >= 85) return "Lulus";
    else return "Gagal";
}
console.log(checkScore(90)); // Output: "Lulus"