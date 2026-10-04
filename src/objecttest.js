let user = {          //user references =user,user1,user2
    name: 'Amit',
    age: 31,
    isActive: true,
    city: 'Satara'
};
console.log(user);

let user1 = {          //user references =user,user1,user2
    name: 'Nikhil',
    age: 32,
    isActive: true,
    country: 'India'
};
console.log(user1);

user = user1
console.log(user);
console.log(user1);

console.log(typeof user);
let user2 = {

};
console.log(user2);
user2 = user;
console.log(user);
console.log(user1);
console.log(user2);

let user3 = {};          //user references =user,user1,user2
user = user3;
console.log(user);
