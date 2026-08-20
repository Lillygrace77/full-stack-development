class FixedDeposit {
    // Properties
    public name: string;
    public principal: number;
    public interest: number;
    public years: number;

    // Constructor Overloading
    constructor(name: string, amount: number);
    constructor(name: string, amount: number, rate: number, years: number);
    constructor(name: string, amount: number, rate?: number, years?: number){
        this.name = name;
        this.principal = amount;
        this.interest = rate ?? 6.5;
        this.years = years ?? 1;
    }

    // Methods
    public calculate(): number {
        const interest = (this.principal * this.interest*this.years) / 100;
        return this.principal + interest;
    }

    public display(): void {
        console.log(`FD Receipt`);
        console.log(`Customer: ${this.name}`);
        console.log(`Principal: ${this.principal}`);
        console.log(`Interest rate: ${this.interest}`);
        console.log(`Tenure: ${this.years}`);
        console.log(`Amount: ${this.calculate()}`);
        console.log(`\n`);
    }
}
    const standardFD = new FixedDeposit("Student", 50000);
    const seniorFD = new FixedDeposit("Senior", 100000, 7.5, 3);
    standardFD.display();
    seniorFD.display();
    seniorFD.principal = 110000;
    console.log(`Updated Maturity: ${seniorFD.calculate()}`);