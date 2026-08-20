// Variable annotations
let studentName: string = "Lilly";
let age: number = 19;
let isStudent: boolean = true;

// Array annotation
let marks: number[] = [97, 90, 95];

// Object annotation
let student: {
    name: string;
    rollNo: number;
    course: string;
} = {
    name: "Lilly",
    rollNo: 66,
    course: "TypeScript"
};

// Function annotation
function calculateTotal(a: number, b: number): number {
    return a + b;
}

// Function with void return type
function displayMessage(message: string): void {
    console.log(message);
}

// Output
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Student:", student);
console.log("Marks:", marks);

let total: number = calculateTotal(50, 40);
console.log("Total:", total);

displayMessage("TypeScript annotations completed!");