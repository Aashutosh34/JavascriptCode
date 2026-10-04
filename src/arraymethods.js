let num = [10, 20, 30, 40];
console.log(num.length);
console.log(num);
num.push(50);     //after last index/at the end it will add new 50.
console.log(num);
num.unshift(5);  //this 5 will be added at the '0th' index or at begining.
console.log(num);
num.pop();      //remove last number or index element
console.log(num);
num.pop();
console.log(num);
let i = num.pop();
console.log(i);

num.shift();
console.log(num);   // shift method remove first value 


//splice:- It is use to remove the elements from anywhere.
let fruites = ['apple', 'banana', 'orange', 'mango'];
console.log(fruites);
fruites.splice(0, 1, 'melon');  //0=starts from     1=delete count/how many items want to delete from 0th index.
console.log(fruites);           //melon= so here it means delete apple and add melon.

let fruit = ['apple', 'banana', 'orange', 'mango'];
console.log(fruit);
fruit.splice(0, 2, 'melon', 'cherry');  //0=starts from     2=delete count/how many items want to delete from 0th index.
console.log(fruit);
//fruit.splice(0, 1, 1000);
//fruit.splice(0, fruit.length - 1);//0=starts from   fruit.length-1= delete upto length-1
console.log(fruit);
fruit.splice(fruit.length, 0, 'chiku');
console.log(fruit);

console.log('--------------------------------------');
let marks = [40, 50, 60, 70, 80, 40, 60, 70];
console.log(marks.indexOf(50));  //this method gives index of mention value like 50 is placed at 1 index value.
console.log(marks.indexOf(20));  //-1   bcz 20 is not available in array.

console.log(marks.indexOf(40, 1));// 1= it will start to check the values from index value 1.
//here it will check now index of 40 at 5th position.

let myFruitesBuc = ['apple', 'mango', 'grapes', 'orange', 'apple'];
console.log(myFruitesBuc.indexOf('apple', 1));   //here 1 indicates that counting will starts from index 1.
console.log(myFruitesBuc.indexOf('apple', myFruitesBuc.indexOf('apple') + 1)); //2nd method
console.log(myFruitesBuc.indexOf('apple', 3));
