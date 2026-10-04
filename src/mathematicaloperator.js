//Addition:
console.log(1 + 1);
console.log('1' + 2);


//Subtractiom
console.group(1 - '1');  //0   // If we are using any mathematical operator other than '+' operator.
//Number string will be converted into normal number.
console.group("5" - 4);
console.group("Hello" - 4); //Hello-4   //NaN: Not a Number.
console.group(5 - "Hello");  // 5-Hello = NaN


//Multiplication
console.group("5" * 4); //20
console.group(-1 + 1 * '4'); //-1+1*4
console.group("Hello" * 4); //Hello *4= NaN

//Division
console.group(10 / "2"); //10/2 =5
console.group(10 + 10 / "2");
console.group('10' + 10 / "2");
console.group(10 + "10" - 10);

//Unary Plus: +    // + sign will convert 42 into integer
console.log(+"42" + 5);
let billAmount = '1000';
console.log(billAmount);
console.log(billAmount + 100);  //1000100
console.log(+billAmount + 100); //1100

//Unary Negation:  
console.log(-"42" + 5);
console.log(-billAmount + 5); //-995


console.log(Number.parseInt(billAmount) + 100)   //parseInt= converted "1000" into integer.


let bmi = 17.88;
console.log(Number.parseFloat(bmi) + 100);
