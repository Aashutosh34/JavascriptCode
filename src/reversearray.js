let num = [100, 200, 300, 400, 500];
//let count = num.length - 1;   //5-1=4 (total index of this array)
for (let e of num) {
    let count = num.length - num.indexOf(e) - 1;  //instead of line 2() and 6(count--) we can use this one also.
    console.log(num[count]);
    //count--;
}

console.log('-------------------');

let counter = num.length - 1; //4
for (let e in num) {
    e = counter;
    console.log(num[e]);
    counter--;
}


console.log(1 + '1');