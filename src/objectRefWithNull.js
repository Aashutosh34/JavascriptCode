
//When I created object where it will go in memory???
//Every programming language having some memory Or RAM.     not ROM, ROM means hard disk memory
//javascript also take some space in RAM.
//Memory is devided into 2 types Heap and Stack.
//Object store/value stored in heap memory.
//Object refere by refrence variable, which is stored in stack.
let i = 10  //stored in stack memory
let p = 20  //Stack memory.
let user1 = [1, 2, 3];
console.log(typeof user1);   //object
//so [1,2,3] stored in heap memory and 'user1' stored in stack memory.

let user = {          //user references =user,user1,user2
    name: 'Amit',
    age: 31,
    isActive: true,
    city: 'Lonand'
};

console.log(user.name);
//user = null;  //user pointed at object as well at the same time user will point out to null as well.
console.log(typeof user);
//console.log(user.name);   //means null.name: It will show error.


let emp = {          //user references =user,user1,user2
    name: 'Nikhil',
    age: 32,
    isActive: true,
    city: 'Satara'
};

user = emp;
console.log(user);


//Garbadge collector
//garbadge collector only design for heap memory.
//It will come into heap memory and distroy those object which are having null and No references.
//Null references means user=Null.
//No references means user=user1; so at that time user will point out to user1 it means user will take value/object of user1. It means old user1 object are like null.
//