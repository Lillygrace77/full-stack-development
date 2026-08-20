class BankBranch {
    // STATIC: Shared by all objects. Belongs to the class.
    public static readonly bankName: string = "HDFC Bank";
    public static totalAccountsCreated: number = 0;

    // READONLY: Can be assigned only once (during declaration or in constructor)
    public readonly accountNumber: string;

    // Instance property
    public accountHolder: string;

    constructor(name: string, accNo: string) {
        this.accountHolder = name;
        this.accountNumber = accNo; // Allowed

        // Increment total accounts whenever a new object is created
        BankBranch.totalAccountsCreated++;
    }

    // STATIC METHOD
    public static getBankPolicy(): void {
        console.log(
            `Welcome to ${this.bankName}. All FDs are subject to market risks.`
        );
    }

    // Instance method
    public showAccount(): void {
        console.log(`Holder: ${this.accountHolder}`);
        console.log(`Account No: ${this.accountNumber}`);
    }
}

// -------- Execution --------

// Accessing static members
console.log(BankBranch.bankName);
BankBranch.getBankPolicy();

// Creating objects
const user1 = new BankBranch("Suresh Raina", "HDFC000123");
const user2 = new BankBranch("Deepika P.", "HDFC000456");

// Display account details
user1.showAccount();
user2.showAccount();

// Testing readonly
console.log(user1.accountNumber);

// Testing static persistence
console.log(
    `Total Accounts in System: ${BankBranch.totalAccountsCreated}`
);