//********callback hell : pyramid of doom***********

//When we have multiple asynchronous operations/task. and they depend on each other.
//The moment when we right the code with callback hell --> we are writting with nested callack.
//In short its a kind of nested callback.


//Example: Coffee machine.

//1.Start the machine ----5 seconds it will take
//2.Grind beans----3 seconds
//3.boil water----4 seconds
//4.Brew coffee----3 sceonds
//5.Pour into the cup----2 seconds

//We cannot Grind the beans without start the machine.
//These steps are depends on each other.
//One task is completed then only we can go to the next task.
//at first step machine is started within 2 seconds then remaining 3 sec will be ignore and go to next step.

//Now suppose I want to create one function to start the machine and I want to provide 5 second wait.
//In java we are using Thread.sleep(5000);
//But in javascript we have to use setTimeout(); function. inbuild function in node js.


setTimeout(()=>{        //callback function and its a inbuild function in javascript.
                        //name of function is nothing and callback function can be created with arrow function and arrow function has no name.
   console.log('Hello');                     
},3000);     //after 3000 seconds (m secodns) this setTimeout will be executed by node JS and hello will be printed. 

//for setTimeout() there is two parameter if we mouseover. so here ()=>{.....} is first parameter.
//3000 after ',' is 2nd parameter.
//after 3 seconds it will print 'Hello'.


setTimeout((name,age)=>{        
   console.log('Hello',name,age);                     
},3000,'Amit',31);      //So after 2nd parameter (3000) we can supply another parameter(3rd para),here we supply name='Amit'.


setTimeout(()=>{
   console.log('My name is Amit');
},4000);



function startTheCoffeeMachine(callback){   //instead of callback we can use any name.
setTimeout(()=>{
console.log('Machine started');
callback();  
},5000);  //entire body [(()=>{ })] will be call after 5 seconds here.
};

//Line-50(callback()):After 5 second 'Machine started' will print and later it will call next function.
//after machin started want to execute grindBeans() want to run.



function grindTheBeans(callback){   //instead of callback we can use any name.
setTimeout(()=>{
console.log('Grinding the coffee beans');
callback();
},3000);
};


function boilWater(callback){   //instead of callback we can use any name.
setTimeout(()=>{
console.log('Boiling Water');
callback();
},4000);
};

function brewCoffee(callback){   //instead of callback we can use any name.
setTimeout(()=>{
console.log('Brewing the coffee');
callback();
},3000);
};

function pouredCoffee(callback){   //instead of callback we can use any name.
setTimeout(()=>{
console.log('pouring coffee in cup');
callback();
},2000);
};

function stopMachine(callback){   //instead of callback we can use any name.
setTimeout(()=>{
console.log('Machine has been stopped');
callback();
},4000);
};

//here we created seprate funtion.
//callback:- It means we are passing a function as a argument in another function.
//Here we use callback for, to call other functions. like we make a dependency here.
//Here all the functions are dependent on each other.
//That's the reason we call this Nested callback.

//Now calling the functions:

startTheCoffeeMachine(()=>{    //Sequence is decided by user, How it will run.
   grindTheBeans(()=>{        //Based on this we can find which function will be running inside which function.
      boilWater(()=>{
         brewCoffee(()=>{
            pouredCoffee(()=>{
               console.log('coffee is ready');
            })
         })
      })
   })
})


// startTheCoffeeMachine(()=>{
//    stopMachine(()=>{
//       console.log('Machine is off now...')
//    })
// });

//This is very difficult to understand,read.
//If we pass argument tomorrow than it will be more difficult.
//********Thats the reason javasxcript introduce 'Promises'.
//********async and await concept also we will use here.


//*********************2nd way:*************************

// async function makeCoffee(){

//    await grindTheBeans();
//    await boilWater();
//    await brewCoffee();
// }

//Advantage:
//Easy to understand,easy to read, easy to debug, supporting wait asynchronous concept.
//Means once the username is enter then only I want to enter the password and so on....
//eg. await enterUsername, await enterPassword, await click

