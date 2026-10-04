let user = {
    name: 'Amit',
    age: 31,
    address: 'Lonand',
    department: 'IT QA',
    salary: '95000',


    //functions also we can define inside the object.
    //Functions=behaviour
    coding() {    //inside the object no need to write function keyword and no function expression also
        console.log('User is doing coding.....');
    },

    company: 'ABC pvt ltd'
};

console.log(user);
console.log(user.name);
user.coding();

//Object is created in heap memory and Object referece (user) is stored in stack memory.
//user ref variable to pointed to heap memory object where name,address,salary,company etc and coding function is available.

console.log('-------------------------------------------');
let loginPage = {
    username: 'Amitk34',
    password: 'Amit@12345',
    role: 'Admin',


    login() {
        //console.log('login into the app' + loginPage.username);
        console.log('login into the app' + this.username);  //this=current object
        this.resetPass();  //inside the object I want to call/access 1 function from another function that time also we used this keyword.
    },

    resetPass() {
        console.log('Reset the password');
    }
}

loginPage.login();