//var, let,const
//1.var used in old javascript

var x = 10;
var x = 20;
var x = 30;
console.log(x);

//problem with var is duplicate variables are allowed.
//redeclaration is allowed.
//overwritting previous value.

//2.Reassignment
var y = 10;
y = 20;
y = 30;
console.log(y);

//3.Hoisting
console.log(t);
var t = 40;    //undefined

//because of this 1st and 3rd issue javascript introduce let.

//4.Declaratiom
let z = 10;
//let z = 20;   //here its showing error.
//redeclaration is not allowed with let.
console.log(z);

let a;
console.log(a);


//Reassignment in let
//Reassignment is allowed in let
let b = 10;
b = 20;
console.log(b);

//Hoisting in let
//it will gives error for let. that is the benifit of let.
//console.log(c);
//let c = 40;


//const :- whenever the value is fix, universal truth go with const.

const pi = 3.14;
//pi = 99.80;               //Not allowed reassignment for const.
const login_Title = 'LoginPage';

const DAYS_IN_WEEK = 7;
const MONTH_IN_YEAR = 12;
//title,url,day,month,PI this kind of value should be const.

let days_in_week = 7;
days_in_week = 10;   //Reassignment is possible for let so const is good for this.
let Week_Salary = days_in_week * 7;
console.log(Week_Salary);

//const hoisting
// console.log(PI);
// const PI = 3.14;    //Hoisting is also not allowed

//const a;     //const a should be initialized also while declaration becz if we know the universal truth/fixed
//value then it should be initialized while declaration time only.
