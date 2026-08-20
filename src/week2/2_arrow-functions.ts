// 1. Arrow Function
const total = (price: number, taxRate: number): number => {
    return price + (price * taxRate);
}

// 2. Shorthand Arrow Function
const msg = (name: string): string => `Hi ${name}!`;

console.log(`Total: ₹${total(250, 0.18)}`);
console.log(msg("Student"));
export {};