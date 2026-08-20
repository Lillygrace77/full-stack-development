// 1. Parameter and Return Types(Explicit)
function greetings(name: string): string {
    return `Hi, ${name}!`;
}

// 2. Default Parameters
function getLocation(city: string = "Hyderabad"): string {
    return `Location: ${city}`;
}

// 3. Optional Parameters
function greet(name: string, greeting?: string) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

// 4. REST Parameters
function totalScore(...scores: number[]): number{
    return scores.reduce((total, current) => total+current, 0);
}

console.log(greetings("Student"));
console.log(getLocation());
console.log(getLocation("Vijayawada"));
console.log(greet("Lilly"));            
console.log(greet("Grace", "Good morning"));
console.log(totalScore(10, 20, 30, 40, 50));
