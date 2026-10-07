let user={
    name:'Pratik',
    age:31,
    city:'Mumbai'
};

function printUserData(userobj){
console.log(userobj);              //Type of user object
}

printUserData(user);     //Calling function by object reference.

//so here we can see, we are calling function by passing object reference at line no 7.
//obejct = body  & Referece = user.

console.log('-----------------------------------------------------')

let emp={
    name:'Amit',
    age:31,
    city:'Pune',
    dept:'IT QA'
};

function printUserData(empobj){
empobj.age=34;          //Manupulating/changing data using empObj, latest age will be taken.
console.log(empobj);    //object 1 created:emp.
}

printUserData(emp);    
