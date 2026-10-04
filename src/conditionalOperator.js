
let x = 10;
if (x >= 10) {
    console.log('Hi');
}
else {
    console.log('Exit');
}


let eleExist = true;
if (eleExist) {
    console.log('Click on the element');
}
else {
    console.log('Throw error');
}

let eleExist1 = false;
if (eleExist1) {
    console.log('Click on the element');
}
else {
    console.log('Throw error');     //becaz condition is false, else block executed.
}


console.log("-----------------------------");


let marks = 96;
if (marks >= 90) {
    console.log("Grade A");   //will print grade A as well becz 97>=90 as well.
    if (marks >= 95) {
        console.log("Grade A++")
        if (marks === 100) {
            console.log("Eligible for scholarship"); //Nested if= if into if condition
        }
        else {
            console.log("Not eligible for scholarship");
        }
    }
}
else {
    if (marks <= 80) {
        console.log("Grade B");
    }
    else {
        console.log("Grade B++");
    }
}


console.log("-----------------------------");

console.log("Paralle if if if else");
let browser = "chrome";
if (browser === "chrome") {
    console.log("launch chrome");
}
if (browser === "firefox") {
    console.log("launch firefox");  //These are not nested, these are parallel if conditions.
}
else {
    console.log("Pleae pass right browser:" + browser);   //This else condition pair with immidiate previous if condition i.e line no.61 if condition.
}


console.log("Paralle if if if else");
let browserName = 'chrome';
if (browserName === "chrome") {
    console.log("launch chrome");
}
else if (browserName === "firefox") {  //We cannot use break statement in If--else condition without any loop.
    console.log("launch firefox");
}
else if (browserName === "Edge") {
    console.log("launch Edge");
}
else {
    console.log("Pleae pass right browser,Invalid browser");
}

//performance issue will be face if we want to check multiple condition.
//To overcome this better to use switch case.