class Locker<T> {
    private contents: T;

    constructor(initialItem: T) {
        this.contents = initialItem;
    }

    public getItem(): T {
        console.log("Accessing locker...");
        return this.contents;
    }

    public depositItem(newItem: T): void {
        this.contents = newItem;
        console.log("Locker updated successfully.");
    }
}

const cashLocker = new Locker<number>(5000);
let cash = cashLocker.getItem();
console.log(`Cash in locker: ${cash}`);

const documentLocker = new Locker<string>("Property Papers - Mumbai Flat");
console.log(`Document in locker: ${documentLocker.getItem()}`);

interface Gold {
    weight: number;
    purity: string;
}

const goldLocker = new Locker<Gold>({
    weight: 10,
    purity: "24K"
});

const myGold = goldLocker.getItem();
console.log(`Gold in locker: ${myGold.weight} grams, Purity: ${myGold.purity}`);