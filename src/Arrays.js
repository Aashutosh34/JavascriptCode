const x = [10, 20, 30];
x[0] = 500;
//console.log(x);  //const in applicable only for normal variable not for Array.

//const x = [40, 50, 60];   // error because array x we already created above.

x = [40, 50, 60];
console.log(x);     //if x is not constant then it will not give error.


let y = [70, 80, 90];
//console.log(y);

y = [90, 100, 110];
console.log(y);


const z = [10, 20, 30];
z[0] = 1000;
console.log(z);   //it will allow to change one index value even if it's constant.
z[3] = 2000;
console.log(z);  //we can add new value also in constant array variable.


//Homogenous array:- Type of data is same
let products = ['macbook pro', 'imac', 'samsung galaxy'];
console.log(typeof products);    //This array is collection of multiple string.but type is object.


//heterogenous array, bcz diff types of data.
let emp = ['Amit', 194, 'Lonand'];
console.log(typeof emp);   //type object.

console.log('--------------------------------');

let num1 = Array.of(1, 2, 3);
console.log(num1);   //Array.of will create array for these numbers.


let pro = Array.from('playwright')  // it will return character array means all character will be seprated and will stored in variable.
console.log(pro);     //in java to characted array is available for this.


let num2 = Array.from(12345)  // it will return character array means all character will be seprated and will stored in variable.
console.log(num2);    //[]...becz Array.form is working only for string array.


