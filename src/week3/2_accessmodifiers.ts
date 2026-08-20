class DigitalWallet {
    // Properties
    public holderName: string;
    private balance: number;
    private secretPin: number;
    protected loyaltyPoints: number = 0;

    // Constructor
    constructor(name: string, initialDeposit: number, pin: number) {
        this.holderName = name;
        this.balance = initialDeposit;
        this.secretPin = pin;
    }

    // Private method
    private verifyPin(enteredPin: number): boolean {
        return this.secretPin === enteredPin;
    }

    // Public method
    public withdrawMoney(amount: number, enteredPin: number): void {
        if (this.verifyPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`${amount} withdrawn successfully. Remaining Balance: ${this.balance}`);
            } else {
                console.log("Insufficient funds in your wallet!");
            }
        } else {
            console.log("Incorrect PIN. Transaction declined.");
        }
    }

    // Protected method
    protected addBonus(): void {
        this.loyaltyPoints += 100;
    }

    // Public method to display balance
    public showBalance(): void {
        console.log(`Current Balance: ${this.balance}`);
    }
}

// Create object
const myWallet = new DigitalWallet("Arjun Varma", 5000, 1234);

console.log(`Welcome, ${myWallet.holderName}`);

myWallet.showBalance();

myWallet.withdrawMoney(1000, 1234);

myWallet.showBalance();