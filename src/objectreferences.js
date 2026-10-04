let user = {          //user references =user,user1,user2
    name: 'Amit',
    age: 31,
    isActive: true,
};
console.log(user);

let user1 = {
    name: 'Nikhil',
    age: 32,
    isActive: true,
};
console.log(user1);

let user2 = {
    name: 'Sagar',
    age: 28,
    isActive: true,
};
console.log(user2);

console.log('------------------------------------');
user = user1;     //user will take reference from user 1. so it means user and user 1 will be the same value.
console.log(user);
console.log(user1);
console.log(user2);

console.log('------------------------------------');
user1 = user2;
console.log(user);
console.log(user1);
console.log(user2);

console.log('------------------------------------');
user2 = user;
console.log(user);
console.log(user1);
console.log(user2);


//garbadge collector is the entity available in JS and it will come inside heap memory to collect garbadge.
//so now for here 'user' does not have any reference so garbage collector will distroy this.
//In this example user is lost.
