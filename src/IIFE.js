//IIFE: Immidiate invoke Function Expression
//If function has no name these kind of function called: Annonymous funtion
(function () {
    console.log("hello world");
    console.log(10 + 20);


    //read test data from the csv/excel file
    //DB connection code
    //start the server

})();  //*****************If we want to call use simply ();******************

//After this we are gng to write test cases.
//Test case 1
//Test case 2


let test01 = (function () {

    console.log('Hello Amit');
})();

//test01();   //We cannot call like this. there is no function name for IIFE. No need: let test01 here.

console.log('---------------------------------------------');


(function (browserName) {

    console.log('Hello Amit');
    console.log(browserName);

})('chrome');    //if program is calling from here; value also should be provided from here only.

console.log('---------------------------------------------');

(function () {

    console.log('Hello Amit');
})();
//Multiple IIFE function we can have in same file without any issue.