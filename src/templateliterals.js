//Template literals
//back tick ``
let msg = `Hi,Amit here`;
console.log(msg);

let para = `Hi this is my js code
           I love JS
        I want to learn playwright
I have 6 years of expirence`;
console.log(para);         //Advantage of `` is it will print as it is with sapce.


//console.log('I love to do 'javascript' code');  //showing error becz inside '' one more '' is there
console.log('I love to do \'javascript\' code');
//console.log("I love to do "javascript" code"); // Error
console.log('I love to do "javascript" code');

//templateliteral
console.log(`I love to do 'javascript' code`);
//console.log('Hi it's javascript code');  //Error
console.log('Hi it\'s javascript code');
console.log(`Hi it's javascript code`);  //advantage of backtick `` is no need to use \.


//Dynamic values

let username = 'Amit34';
console.log(`Welcome ${username}`); //${} this is placeholder. This is good practice

let proName = 'Apple iMac';
let price = 1000.23;
console.log(`The search product is ${proName} and Price is ${price}`);

let playerName = 'Rohit Sharma';
//button[text()='Rohit Sharma']
console.log(`//button[text()='${playerName}']`);

let n1 = 10;
let n2 = 20;
console.log(`Sum of the n1 and n2 is ${n1 + n2}`);

let emailId = 'Abc.xyz@gmail.com';
let password = 'Abcxyz@123';
console.log(`The user credentials:
        username:${emailId} and
        password:${password}`);


let str = `Hi,Amit here..`;
console.log(typeof str);   //whatever we are writting in ``, type of that is string.

console.log('Testing');  //Testing
console.log('Price:', 10); //Price: 10

// ''  or "" for normal string, static string
//Dynamic string:- Means wants to print variable with string. For that `` we can use.
//${} : placeholder = to call variable in console.log.

