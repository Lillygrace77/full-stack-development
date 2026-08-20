let userName: string = "student";
let userAge: number = 19;
let isHuman: boolean = true;
console.log(typeof userName);
console.log(typeof userAge);
console.log(typeof isHuman);
function display(name: string, age: number, isHuman: boolean): void {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`isHuman: ${isHuman}`);    
}
display(userName, userAge, isHuman);
// userAge="twenty-five" Error: Type 'string' is not assignable to type 'number'