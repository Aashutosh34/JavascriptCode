//*****1.Map: Transform each and every element of array.
//Map function will return new array. It will not change existing array.


let  number=[1,2,3,4,5];
let num=number.map(e=>e*2);   //this argument will behaive like a callback function.
//This arrow function will be work like callback function.
console.log(num);
console.log(number);

let sqr=number.map(e=>e*e);  //e=>: means 'e' will go to each and every element and then will do e*e.
console.log(sqr);


let empNames=['Amit','Nikhil','Sagar'];                   //1st way
let namesUpper=empNames.map(n=>n.toUpperCase());
console.log(namesUpper);

let empNames1=['AMIT','NIKHIL','SAGAR'];                  //2nd way
let lower=n=>n.toLowerCase();
let namesLower=empNames1.map(lower);
console.log(namesLower);

//better to use 1st way.
//map function is always taking a callback function.


//*****2.Filter: Filter the data from the given array using given condition.

let number1=[10,15,20,25,30,35,40];
let greThan30=number1.filter(n=>n>30);
console.log(greThan30);

let evenNo=number1.filter(n=>n%2===0);
console.log(evenNo);

let names=['Om','Jay','Amit','Nikhil','Sagar','Pradip','Kaivalya'];
let lenGreatThan3=names.filter(n=>n.length>3);    //argument of the filter function is callback function.
console.log(lenGreatThan3);

let ProdData=['apple macBook','apple iPh','Samsung Galaxy','Air Pods','Cannon'];
let findProd=ProdData.filter(n=>n.startsWith('apple')).filter(n=>n.includes('iPh')).map(n=>n.replace('iPh','iPhone'));
console.log(findProd);



//*****3.Reduce: Combine everything into the one value.
//It will return a single value.

let numData=[10,20,30,40,50];
let total=numData.reduce((sum,n)=>sum+n,0);     //'n' will go to each and every element of arrray.
console.log(total);
//0= initial value of sum.
//after 1st iteration sum value will become sum=sum+n....Sum(0)=0+10,Sum(10)=10+20,Sum(30)=30+30 ...so on
//It will work like ..sum+n=> 0+10, 10+20,30+30,60+40,100+50 in this series.


let empAddress=['102','Kundalkar House','Satara','India'];
let actAddress=empAddress.reduce((address,word)=>address+word+' ',''); //No need to mention initial value for this so we put blank as ''.
console.log(actAddress);

//Here initial value of address=''. (nothing)
//word= it will take each and every value from array.
//In reduce(), the first parameter (sum) is the accumulator, and its value keeps changing after every iteration based on the result returned by the callback function.

//Chain all the method
//number array:Even number give--->>Squre them----->>>Sum of the all numbers.


let myNumbers=[1,2,3,4,5,6,7,8,9];

//Even Number
let finalValue=myNumbers.filter(e=>e%2===0).map(e=>e*e).reduce((sum,n)=>sum+n,0);
console.log(finalValue);
