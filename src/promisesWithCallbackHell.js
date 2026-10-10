function startMachine(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Machine started');
            resolve();
        },5000);
    })
};

function grindCoffeeBeans(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Grinding Coffee Beans');
            resolve();
        },3000);
    })
};

function boilWater(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Boiling water');
            resolve();
        },2000);
    })
};

function brewCoffee(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Brewing the coffee');
            resolve();
        },3000);
    })
};

function pourCoffee(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Pour coffee into cup');
            resolve();
        },2000);
    })
};

startMachine()
.then(()=>grindCoffeeBeans())
.then(()=>boilWater())
.then(()=>brewCoffee())
.then(()=>pourCoffee())
.then(()=>console.log('your cofee is ready'))
.finally(()=>console.log('Machine stopped.'))


//All async task are getting executed in sequence.
//This is the measure functionality of promises and callback together, that all async task we really want to arrange in sequence and make sure they are executing in sequence with their own time.



