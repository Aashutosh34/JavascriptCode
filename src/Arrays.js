//collection of the different/similler type of data in javascript
let i = 10;
let j = 20;
let k = 30;

//instead of this we will use array.
let num = [10, 20, 30, 40];    //The memory of 'num' will converted into 4 equal parts, values will be stored in the basis of index and index starts from '0'.
console.log(num[0]);                         //hightest index=length-1   //length = 4 here
console.log(num[4]);
console.log(num[-1]);  //undefined, lowest index is always 0.
console.log("Length=" + num.length);
console.log("lowest index=" + 0);
console.log("highest index=" + (num.length - 1));
num[4] = 50;
console.log(num);
console.log("Length=" + num.length);
console.log("lowest index=" + 0);
console.log("highest index=" + (num.length - 1));    //in javascript Arrays are always dynamic.

num[10] = 100;
console.log(num);
console.log("Length=" + num.length);
console.log("lowest index=" + 0);
console.log("highest index=" + (num.length - 1));
console.log(num[5]);
console.log(num[8]);   //undefined
console.log(num[10]);

num[8] = 800;
console.log(num);       //Arrays are always dynamic in javascript, Size will increase automatically when we added values.

console.log("----------------------------");

let stuName = ['Amit', 'Nikhil', 'Sagar'];
console.log(stuName);
stuName[1] = 'Akshay';
console.log(stuName);

console.log("----------------------------");

let employee = ['Amit', 171, 31, 'Lonand,Satara', true];
console.log(employee);





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


