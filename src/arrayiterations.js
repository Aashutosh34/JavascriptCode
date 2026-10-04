let num = [10, 20, 30, 40];  //len=4, index range= 0-3
//to print all the values of array:
for (let i = 0; i <= num.length - 1; i++) {   ////len-1= 4-1=3 (index range)
    console.log(num[i]);
}

console.log('-----------------------------');

//for..of loop:
let num1 = [10, 20, 30, 40];
for (let e of num1) {           //e will point to num1 and take value/values from it.
    console.log(e)              //of method iterate values.
}
//drawback is always will go in forward direction. in above for loop program we can print the value of array from middle as well.

console.log('-----------------------------');

//for..in loop:   in means index
for (let k in num1) {
    console.log(k);      //in means index of the array. means here 'k' will represent index of the array. 
    //index=0,1,2,3
}

console.log('-----------------------------');
let empData = ['Amit', 31, 189, 'Associate software Tester', 'Lonand'];
for (let e of empData) {
    console.log(e);
    if (e === 'Associate software Tester') {
        console.log('35% hike');
        break;
    }
}

console.log('----------------------------------------------');


for (let i = empData.length - 1; i >= 0; i--) {
    console.log(empData[i]);
}

console.log('----------------------------------------------');

for (let i of empData.reverse()) {
    console.log(empData[i]);
}