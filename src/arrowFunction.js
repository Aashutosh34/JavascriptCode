//Arrow Function: This is also kind of annonymous function.

//Annonymous Functions
//1.IIFE Concept
//2.Normal Annonymous function with function keyword
//3.Arrow function.
//4.No Function keyword.


//3.1 No param arrow function
let print = () => console.log('Hello Javascript');    //no function name here
print();    //zero parameter because above also we mention zero parameter before =>.


//3.2 One param arrow function
let printName = (name) => console.log(name);  //name => console.log(name) means name given it to body.
printName('Amit');

console.log('----------------------------------------------------------------');

let test = (a) => console.log(a + 10);
test(10);   //here this 10 given to (a) and (a) passes this to right side body.

console.log('----------------------------------------------------------------');

let printNumber = (num) => console.log(`Total number: ${num + 100} `);
printNumber(1000);

console.log('----------------------------------------------------------------');

//let printTotal = (total) => console.log(total + 90);
//In bracket only one paramenter; we can remove the ()
let printTotal = total => console.log(total + 90);   //No error: JS will understand
printTotal(10);

console.log('----------------------------------------------------------------');
let printBill = (billing) => { console.log(billing + 90); }  //here body written in {}.
printBill(200);

//JS says if we have only one single line in the body we can ignore the {}.
//but if there multiple lines then need to mention body in {}.
//if multiple line and if we not put {} it will not print body in sequence.

console.log('----------------------------------------------------------------');

let printMyBill = (billingLight) => {
    console.log(billingLight + 90);
    console.log('Billing is done');
    console.log('Bye');

}  //here body written in {}.
printMyBill(200);

console.log('----------------------------------------------------------------');

let proName = (a) => a + 4;
let r1 = proName(100);   //proName(100) will given to (a) then it will go right side (a+4) and then 104 return automatically.
console.log(r1);  //it means if we not write console.log (a+4)


console.log('----------------------------------------------------------------');

let doLowerCase = (name) => name.toLowerCase();
let convertedLower = doLowerCase('TESTING');
console.log(convertedLower);

console.log('----------------------------------------------------------------');

let sum = (a, b) => a + b;
let p1 = sum(10, 20);
console.log(p1);

console.log('----------------------------------------------------------------');


let initBrowser = (browserName) => {
    console.log(`Browser name is:${browserName}`);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('Launch chrome');
            return true;
        //break;      //return and break cannot use togehter.
        case 'firefox':
            console.log('Launch FF');
            return true;

        case 'edge':
            console.log('Launch edge');
            return true;

        default:
            console.log('Please pass the right browser', browserName);
            return false;
        //  break;
    }
};

let flag = initBrowser('chrome');
console.log(flag);


console.log('----------------------------------------------------------------');


let printDetails = (...details) => {
    console.log(details);
    console.log(details.length);
    return 0;
};

let s1 = printDetails('Amit', 210, 'Lonand', 'Associate Software Tester');
console.log(s1);