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


let sub2 = (a, b) => a - b;
let mul2 = (a, b) => a * b;
let div2 = (a, b) => a / b;

function calculator2(a, b, callback) {
    return callback(a, b);       //this return is for return to this calculator2.
};

let cal1 = calculator2(50, 10, sub2);
console.log(cal1);
cal1 = calculator2(50, 10, mul2);
console.log(cal1);



console.log('-------------------------------------------------');





function initDriver(browserName) {
    console.log('Browser Name:', browserName);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            break;

        case 'firefox':
            console.log('launch firefox');
            break;

        case 'Edge':
            console.log('launch Edge');
            break;

        default:
            console.log('Please pass the right browser', browserName);
            break;
    }
};

//Now if we want to use this above function as parameter.
//Means pass/give this functionality to other function.
//so in new function no need to write same logic again and again.
//In below new function we pass 2 parameters.
//1.browserName   2.URL   3.you have to tell which function is responsible to initialize the driver, for that we give callback as 3rd parameter.

function enterURL(browserName, URL, callback) {  //callback: this name will be anything.
    console.log('Starting the test case execution...');
    callback(browserName); //browserName bcz I want to call initDriver(). (above)
    console.log('Enter the URL', URL);
}

enterURL('CHROME', 'https://www.amitTest.com', initDriver);  //here we mention initDriver that's the reason its calling initdriver from here.

//At line no 112 function 'enterURL' saying you have to give me callback function.
//Than at the end line no 118 user using enterURL function and giving instruction as follow:
//open chrome browser 'CHROME', open URL 'https://www.amitTest.com' and use 'initDriver' function.

//Now user says how will I get to know initDriver??

//When we dont want to expose the initDriver functionality how it works with user than that time we use callback function.


console.log('----------------------------------------------------');

function mycalci(a, b, callback) {
    return callback(a, b);      //value will be return it to mycalci here and later at down,mycalci--->t1.
};

let t1 = mycalci(10, 20, (a, b) => a + b);   //function body we directly send here using arrow function.
console.log(t1);                  //Arrow function we can use as parameter also.

//at line 135 we can say I am calling mycalci function by passing the arrow (=>) function.

function launchBrowser(browserName, callback) {
    return callback(browserName);      //this return for launchBrowser Function.
}

let flag = launchBrowser('chrome', (browserName) => {
    console.log('Browser Name:', browserName);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            break;

        case 'firefox':
            console.log('launch firefox');
            break;

        case 'Edge':
            console.log('launch Edge');
            break;

        default:
            console.log('Please pass the right browser', browserName);
            break;
    }
});

if (flag) {
    console.log('Enter the url');
}

console.log('-------------------------------------------------------');

let num = [1, 2, 3, 4, 5];
num.forEach(e => console.log(e));   //forEach method will iterate the array one by one.

//forEach method says please give me callback.
//Means (e => console.log(e) this whole body we will give to [forEach(callback)] callback here.
//than [forEach(callback)] this callback method it will come under that to iterate code/Array one by one.
//Means (e => console.log(e)) this 'e' will go inside the array and keep printing it in console.

let num1 = [1, 2, 3, 4, 5];
num1.forEach(e => console.log(e + 5));  //6,7,8,9,10

//forEach: its the normal array function.
//but callback is the '(e => console.log(e + 5));'  this arrow function.
//main purpose of Arrow function is, it is very easy to supply as a function parameter.
//It means here arrow function we use as a function directly.