// 1. For Loop
console.log("1. For Loop:");
for (let i = 0; i < 3; i++) {
    console.log(`Iteration ${i}`);
}

// 2. While Loop
console.log("\n2. While Loop:");
let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}

// 3. Do-While Loop
console.log("\n3. Do-While Loop:");
let num = 0;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num < 3);

// 4. For...of Loop (for iterating arrays)
console.log("\n4. For...of Loop:");
const numbers: number[] = [1, 2, 3];
for (const num of numbers) {
    console.log(`Array value: ${num}`);
}

// 5. For...in Loop (for iterating object properties)
console.log("\n5. For...in Loop:");
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (const key in person) {
    console.log(`${key}: ${person[key as keyof typeof person]}`);
}

// 6. forEach Loop (array method)
console.log("\n6. forEach Loop:");
const fruits: string[] = ["apple", "banana", "orange"];
fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index}: ${fruit}`);
});
