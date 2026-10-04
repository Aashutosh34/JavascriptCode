//concat--merge--add

let a = 10;
let b = 20;
console.log(a + b);

console.log('Hello' + 'playwright');

let c = 'Hello';
let d = 'Amit';
console.log(a + b + c + d); //Execution will starts from left Or from 'a'.
console.log(c + d + a + b);  //HelloAmit1020
console.log(c + d + (a + b)); //HelloAmit30
console.log('Value of a:' + a);  //Concatination operator
console.log('Value sum is:' + a + b); //Value sum is: 1020
console.log('Value sum is:' + (a + b)); //Value sum is:30
