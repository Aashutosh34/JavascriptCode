//Promise: Like we do the promise with someone; then promise either will be fullfill Or promise will be rejected.
//There are 2 possibilities of any promises that is it can be resolved Or Rejected.

//Promise in Javascript is used to handle Asynchronous operations/Task
//Asynchronous operation= Things that take time. Or those task which are taking some time.
// Example 
// 1.API response 
// 2.after login button to get home page etc etc.
// 3.DB Query
// 4.AJAX: Asynchromous javascript executions. Element will come to page may be after 5,10,15 seconds.


//Instead of callback js introduce 'Promises' to handle async oeprations in a more clear way.

//******Promise********
//I order the food: Promise is created
//Prepare the food: Pending/In progress (Pormise is pending)
//Food Delivered : fullfillment.
//Cancel the order: Rejected/Error.
//When we get error: This will be handled by promises.


//****3 States of Promises*****
//Pending,Resolved,Rejected


//******how to create promise??

let myPromise=new Promise((resolve,reject)=>{  //Promise its a kind of Object.  //Instead of resolve and reject we can write anything.
    let success=false;            //1st variable (resolve) is always representing resolve/Promise has been done, means food is delivered or Not.
    if(success)  {               //2nd variable(reject) is represent,you did not get response Or Error.
      resolve('Task completed');  //resolve and reject are the function at line 29. they are callback function.
    }                            //We are calling arrow function =>{   } by passing the resolve and reject.
    else{
        reject('Task is failed');
    }
});

myPromise.then((result)=>{      //If promise is resolved means it will stored in 'then' and if its rejected it will store in 'catch'.
       console.log(result);         //'Task completed' which we write above it will given to then.
                                //then store it into variable e.x variable is here 'result'. we can write any variable name
}) 
.catch((error)=>{      
    console.log(error);
})   
                    
console.log('-------------------------------------------------')

//Example: Real async operation: With the proper weight.
//So,For that need to use setTimeout.
//Ex. Here we will give setTimeout=3000 miliseconds=3 sec.

let dataPromise=new Promise((resolve,reject)=>{
setTimeout(()=>{
reject('Data is not recived from server');
},3000);

})

dataPromise
.then((recived)=>{
    console.log(recived);
})
.catch((error)=>{
    console.log(error);
})



//Example : Real async operation with the proper data Or user data: setTimeout
function fetchUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let user={
                Name:'Amit',
                ID:210,
                Role:'QA'
            };
            resolve(user);
        },5000);               //after 5 seconds will give the user object.
    }) 
};

fetchUser()
.then((user)=>{        //This promise will be fullfill so used then here
//console.log(user.Name);      //Amit
console.log(user)              //{ Name: 'Amit', ID: 210, Role: 'QA' }
})
.finally(()=>{                //Finally means,doesn't matter the promise is fullfill or rejected. 
console.log('Disconnect with DB')  //whatever we wriiten inside the finally will always be executed.
});                



console.log('===================================================================');
//Promise chaning:

let p1=new Promise((resolve,reject)=>{
resolve(5);

});

p1.then((n)=>n*2) //5*2=10
.then((n)=>n*3)//10*3=30
.then((result)=>console.log(result));//30


