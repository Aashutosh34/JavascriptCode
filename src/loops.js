//1.While
//checking condition until the condition will not match.

let i = 0;   //if put i=0  and oepration is i=i+2 then even numbers.
while (i <= 5) {
    console.log(i);
    // i++;
    i = i + 1;  //instead of i++, we can use this also
    //i = i + 2;  //odd number
}



let p = 1;
while (true) {
    console.log('Welcome to Amit project');
    break;      //we can use break with switch and loop. It will break entire loop.
    //when we are using loop, intetion should be always come out the loop otherwise it will give infinite loop. 
}


let j = 1;
while (j <= 50) {
    console.log(j);
    if (j % 5 == 0) {
        console.log('hello');
        break;       // here it will break entire loop, within while loop here we can write break. 
        //But only in if loop we cannot write break.
    }
    j++;
}
console.log(j);




//For loop

for (let r = 1; r <= 10; r++) {
    console.log(r);

}

//print 10-1
for (let k = 10; k >= 1; k--) {
    console.log(k);
}

let l = 1
for (; l <= 10; l++) {
    console.log('Hello Amit')
}

let m = 1;       //initialization
for (; m <= 10;) {   //condition
    console.log('count upto 10')   //like this we can convert while loop to for loop.
    m++;   //Increment
}

for (; ;) {      //by default it will take true condition
    console.log("Hi Amit");
    break;      //without break it will be infinite loop
}




//Do While loop
//Even if condition is false;statment will be runs at least once.

let n = 1;
do {
    console.log(n);
    n++;
}
while (n <= 10);   //In do while loop body {} will not be included for while, Its already included for do.


let q = 1;
do {
    q++
    console.log(q);
}
while (q <= 10);


//NOTE: While loop
//Use while loop when num for iteration is not fix.
//like wait for the element on the page: 2 sec ,3,4,5,6,7,8 sec  no idea after how much time it will visible.
//wait for page loading: No idea how much time it will take to load.
//calender handling
//web pagination:on which page element is available page 1 or 2 or 3 or 4 or 5 so on...


//NOTE: for loop
//When number of iteration are fixed.
//dropdown,dates in months.
//Arrays: fixed.


//NOTE: do while
//put check operation/statement before condition.
//Like check image/logo is present on page, But same time page is not fully load to check condition with other web element.
//no need to check for that element/condition just break it.

