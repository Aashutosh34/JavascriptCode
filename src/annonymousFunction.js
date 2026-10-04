//Annonymous--> callback-->Asynch,Promises,Await     like this we need to learn, bcz dependent like this.


//Annonymous Function: The Function has no name.
let world = function () {      //showing error so need to put in variable(Expression Name).
    console.log('Hello world');
    return 100;
};                 //after function keyword nothing is there so we call that annonymous function.

world();   //here it will called by Expression Name
console.log('------------------------------------');
console.log(world());    //after this it will print 100 as well.

console.log('------------------------------------');
let f1 = world();
console.log(f1);

console.log('------------------------------------');

let initDriver = function (browserName) {                  //annonymous function
    console.log(`Browser name is:${browserName}`);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('Launch chrome');
            return true;
        //break;      //return and break cannot use togehter.
        case 'firefox':
            console.log('Launch FF');
            return true;

        case 'edge':
            console.log('Launch edge');
            return true;

        default:
            console.log('Please pass the right browser', browserName);
            return false;
        //  break;
    }
};

//How to call this function??
//will call this function using initialize the driver.

let isInit = initDriver('chrome');   //if this chrome will find above then this below loop will be run.
if (isInit) {
    console.log('Enter the URL:google.com');
}