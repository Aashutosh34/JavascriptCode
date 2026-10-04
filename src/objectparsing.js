//In api automation we converting the object into JSON.
//wherever we get JSON, it will converting back to object.


//JS object -------> JSON       = Serialization  (marshelling)
//JSON      -------> JS Object  = Deserialization (Unmarshelling)

//POST call
//we are passing JSON body with URL
//for JSON body we need to convert that object to JSON. JSON=Java script object notation and JSON is string.
//API response we are getting in JSON only so we need to convert again it into JS object.


let user = {          //user references =user,user1,user2
    name: 'Amit',
    age: 31,
    isActive: true,
    city: 'Lonand'
};

let Jsonuser = JSON.stringify(user, null, 2);  //(user,null,2) is use to manage structure of json body from horizontal view to vertical view.
console.log(Jsonuser);
console.log(typeof Jsonuser);   //string


//JSON to JS Object: De-serialization
let userObject = JSON.parse(Jsonuser);
console.log(userObject);
console.log(typeof userObject);  //object

console.log(user.name === userObject.name);
console.log('----------------------------------------');


let customer = {
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

//Object to JSON coversion
let custJson = JSON.stringify(customer, null, 2);
console.log(custJson);     //JSON= type string


//Call an API:given to the server
//Server says I given JSON format to you please take it and convert it into object again.


console.log('----------------------------------------');

//JSON to object conversion
let custObject = JSON.parse(custJson);
console.log(custObject);

console.log(customer.name.length === custObject.name.length);