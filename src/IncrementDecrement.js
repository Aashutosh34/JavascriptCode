//++ and --

//1. Post Increment
let a = 1;
let b = a++;          //position of ++ after a. It means a post increment. Means increase the value of a later.
//Assign first '1' value to b then increase the value of 'a'.
console.log(b);
console.log(a);


let x = -99;
let y = x++;            //y=-99     x=-98
console.log(x);
console.log(y);


let total = 10;
console.log(total++);    //++ used as post increment so 'total' will give to console.log first so o/p= 10;
console.log(total);     //In previous example 'total' first given to console.log and then ++ is executed so now total=11.


//Pre Increment

let p = 1;
let q = ++p;
console.log(p);   //In 2 statement (let q=++p) mentioned that first increase value of p.    //2
console.log(q);  // Then value of p(2) give it to 'q'   //2


let p1 = -999;
let q1 = ++p1;
console.log(p1);   //In 2 statement (let q=++p) mentioned that first increase value of p.    //-998
console.log(q1);  // Then value of p(2) give it to 'q'   //-998


//Post Decrement
let r = 2;
let s = r--;
console.log(r);   //first we gave value of 'r' to 's' so s=2 then later we decrese value of 'r' by 1 =1
console.log(s);


//Pre decrement
let t = 2;
let u = --t;
console.log(t);   //1
console.log(u);   //1

let bill = 100;
console.log(--bill);
console.log(bill);
console.log(bill--);
console.log(bill);


let i = 11;
let j = i++ + ++i;
console.log(i);   //i 11->12 ,i=12->13
console.log(j);

let f = 11, g = 12;
let h = f + g + f++ + g++ + ++f + ++g;

console.log("f=" + f);
console.log("g=" + g);
console.log("h=" + h); //11 + 12 + 11(12) + 12(13) + 13 + 14


