//== : Loose equality : compares the value only
//===:Strict equality:compares both value and type

console.log(10==10); 
console.log('10'==10); 
console.log('10'===10);  //false: type is diff
console.log(10===10);

//We will prefer strict equality ===.

let bill='1000';
console.log(bill==1000);
console.log(bill===1000);

console.log(true==1);
console.log(1==true);
console.log(true===1);  //false


console.log(false==0);

console.log('Amit'=='amit');
console.log('Amit'==='amit');
