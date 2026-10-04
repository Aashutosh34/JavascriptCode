let user = {          //user references =user,user1,user2
    name: 'Amit',
    age: 31,
    isActive: true,
};
console.log(user);


//for in loop
for (let key in user) {     //key=variable name
    console.log(user[key]);  //for array variable name will indicate to index number but for object variab0le name will indicate key of the object. 
    //Type of key in for in loop is always string.
}

for (let key in user) {     //key=variable name
    console.log(key, ':', user[key]);  //user.key will shoe undefined error.
}

console.log('----------------------------------------------');

let user1 = {
    name: 'Amit',
    age: 31,
    isActive: true,      //object = whole body and user = object name
    address: {
        houseNo: 102,
        houseName: 'Kundalkar House',
        zip: 415521
    },
    surname: 'kundalkar',
    name: 'Aashutosh',
    devices: ['iPhone', 'laptop', 'monitor']
};

for (let key in user1) {     //key=variable name
    console.log(key, ':', user1[key]);  //user.key will shoe undefined error.
}

//********To iterate the object we need to use for in loop.********

console.log(user1.devices.length);