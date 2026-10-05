//callback: The callback is the function to pass an argument to another function, Which will be called later.
//Call by value
//call by object reference
//call by function: callback.

let sayHi = function () {
    console.log('Hi Amit');
};

let sayHello = function (somefunction) {    //this function says whenever someone calling me(sayHello calling here)
    //Then Please give me any function; whatever it is I will be execute it.
    console.log();
}


//follow below example
let sayHiHello = function (callback) {     //we can write any keyword in () like Amit,xyz,callback
    callback();            //same keyword we used here with ().
};

sayHiHello(sayHi);
//sayHiHello function says give me callback function that which function you really want to call.
//So here supply 'sayHi' in (); It means calling 'sayHiHello' function by passing 'sayHi' function.
//sayHi function now will be given to 'callback' which is under () means callback=sayHi.
//sayHi= as per written written above in {} for sayHi.
//so at line number 18 where we called callback() it will give function of line no 6-8
//So, at line number 21, calling a function by passing a function name.



let add = (a, b) => a + b;     //arrow function   //expression name=add
let a = add(10, 20);
console.log(a);



//******Utility feature (calculator utilities)
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

//Now I dont want to expose these function to the end user.
//*********Core function:End user function
function calculator(a, b, callback) {     //we can write anything here instead of callback.callback();
    console.log(callback(a, b));
};

calculator(40, 20, sub);

//40 given to 'a', 20 given to 'b','sub' given to 'callback'.
//It means 'callback'='sub'= value already written at line no 38.(a,b)=>a-b.
//It means callback=(a,b)=>a-b.
//Here we can say in this example,calling the function by passing some values and function.

calculator(40, 20, mul);  //******here sub,mul,div all these are callback function.
calculator(40, 20, div);

//Advantage: here user dont have any idea how the things are implemented in calculator.
//User just give 2 numbers and which functionality want to use.
//It looks like encapsulation but its not bcz, its not coming in the form of classes and objects.