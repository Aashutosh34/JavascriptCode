//Destructuring:- It Means clean way to extract the values from Array Or Objects, and simply assign them
//to variables in single line.


//1.Array destructuring.
let [a,b,c]=[10,20,30];
console.log(a,b,c);

let arr=[50,60,70];
let [x,y,z]=arr;
console.log(x,y,z);

let [p, ,r]=arr;     //here we skip the value
console.log(p,r);   

let ar=[10,40];
let [a1,b1=50]=ar;
console.log(a1);
console.log(b1);    //40 will be replace to 50.

let rest=[1,2,3,4,5,6];
let [t1,t2,...pop]=rest;  //whenever ...(3 dots) available before the variable name;it will behaive like array.
console.log(t1);
console.log(t2);
console.log(pop);



//2.Object Destructuring.

let user={
    name:'Amit',
    age:31
}

let{name,age}=user;
console.log(name,age);

console.log('----------------------------------------------------------------------------');

let customer={
    name:'Peter',
    age:56,
    city:'Goa',
    zip:1045
};

function placeOrder({name,city}){  
console.log(name,city);
};

placeOrder(customer);   //Here we are calling the function by passing the object. that we call call by object/referance.
//when we passing this to function placeOrder it will take 'name' and 'city' only not all values.


function launchBrowser({browserName,headless,URL}){  //These things need from object.
console.log(browserName,headless,URL);    //using this we are writting logic here.
}                                         //same key we need to use as per the object.

let page={
    title:'Login',
    browserName:'chrome',
    URL:'https://naveenautomationlabs.com',
    headless:false,
    footer:[1,2,3]
};

launchBrowser(page);