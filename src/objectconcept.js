//object = non premitive data type. Dont have fix memory size.
//Reference type: Every object is represented by the references.
//Like we all are object, Body is object and every object having property like eye,nose,hands etc.
//body=object   object name=Amit.
//In object we stored the value in key and value pair.
//Why objects are better than value:When we declared array then if we are asking to give value we need to use index value.
//but for object there is key and for every key there is value.

let user = {
    name: 'Amit',
    age: 31,
    isActive: true,      //here object = whole body and user = object name
    address: {
        houseNo: 102,
        houseName: 'Kundalkar House',
        zip: 415521
    },
    name: 'Aashutosh'
};

//There are two types of memory  Head and stack.
//object is created in Heap memory and this object refer by user(Object name).
//object is refer by user reference variable (user=object name) which is stored in stack memory.

console.log(user);
console.log(user.name);
console.log(user.tel);    //undefined
console.log(user['age']);   //2nd method. ''only allowed not "".
console.log(user.address.houseName);
console.log(user.address['zip']);  //key is always predfined.

user.email = 'amit.k@gmail.com';  //added new property in same object. In Java its not possible
console.log(user);

//delete value
delete user.age;
console.log(user);  //updated name as per the latest value.

//add new value of existing key.
user.name = 'Kundalkar';
console.log(user);

