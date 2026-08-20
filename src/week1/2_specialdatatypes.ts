// 1. any
let a: any = 7;
a = "String";
a = true;

//  2. unknown
let b: unknown = "String";
// let len: number = b.length;

// 3. void
function notify(msg: string): void {
    console.log("ALERT: " + msg);
    // return "Success";
}
notify("Environment Setup Complete!");