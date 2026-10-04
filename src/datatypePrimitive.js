//1.Primitive datatypes
// Simple, all datatype will store in Stack memory.
// All these datatypes are not part of objects/References, Fixed memory, No garbage collector.


//2.Non-Primitive datatypes.
// Objects/References,Classes,Arrays,Functions,Interfaces.
//Dynamic memory.


//Primitive datatypes
//A.number:
//Range: -9007199254740991 to 9007199254740991
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


let i = 10;
console.log(i);
console.log(typeof (i));

let j = 12.33  //any number is called number in javascript there is no float,double like java.
console.log(j);;
console.log(typeof (j));

const PI = 3.14;
console.log(PI);
console.log(typeof (PI));

//For numbers= 8 bytes = 64 bits



//B.String
//string should be write in '' or "".

let firstName = 'Amit';
let lastName = 'Kundalkar';
let phoneNumber = '9890323645';
console.log(firstName);
console.log(typeof (firstName));
console.log(typeof (phoneNumber));

//size= 2 Bytes per character
let e = 'abc';  //3 char=3*2=6 bytes
console.log('My First name is ' + firstName);


//C.Boolean:true/false
let flag = true;
console.log(flag);
console.log(typeof (flag));

let isActive = 'true';   //'' so string
console.log(isActive);
console.log(typeof (isActive));
//size = 1 byte = 8 bits
//Memory allocation will be happen at runtime for all.

let num = 9007199254740993;
let num1 = num + 1;
console.log(num);   //9007199254740992    giving wrong calculation bcz beyond range 9007199254740991


//D.BigInt: used for the long value/large value.
let l = 9007199254740993n;
console.log(typeof l);

let m = 10n;
console.log(typeof m);
let n = 10n;
console.log(typeof n);
let o = m + n;
console.log(o);
console.log(typeof o);
//let p = 10.22n;    Error becauze it should be integer (. not allowed)

let q = BigInt(100);
console.log(typeof q);

//E.null: Nothing/No value
//Size: Depends on engine, here we are using V8 engine. So need to say 0 to 8 bytes.
let myName = null;
let data = null;
console.log(myName);   //null
console.log(typeof myName);  //object: JS bug (because object is comes under non-primitive datatype)

//F.Undefined:
let v;
console.log(v);
console.log(typeof v);
//Size: Depends on engine, here we are using V8 engine. So need to say 0 to 8 bytes.