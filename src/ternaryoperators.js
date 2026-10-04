

let num = 10;
let bill = num >= 15 ? 100 : 200;   //?=what you will do?  part 1=100, part 2=200
console.log(bill);
//if condition is true it will go to part 1.
//if condition false it will go to part 2.


let age = 18;
let isEligible = age >= 18 ? 'Eligible for voting' : 'Not eligible for voting';
console.log(isEligible);


let number1 = 90;
switch (true) {
    case (number1 <= 90):
        console.log('Hi');
        break;
    case (number1 > 90):
        console.log('Hello')
        break;

    default:
        console.log('Exit');
        break;
}


//truthy and falsy concept applicable only for if else.