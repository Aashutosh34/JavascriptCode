function login() {
    console.log('login to app');
    search();
}

function search() {
    console.log('Perform search');
    addToCart();
}

function addToCart() {
    console.log('add to cart');
    //login();   //Back to back calling will be happen. infinity.
}

login();

//all this function will stored into heap memory.
//but during execution it will go into stack memory.
//at the run time after last function execution has been done javascript will start to delete the memory.
//so no need of garbadge collector here.
//in stack memory LIFO=last in first out rule is following. means which function come last it will delete first.



function billing() {
    console.log('Billing function');
    let x = 10;
    let y = x + 10;
    console.log(y);
    billing();     //it means function is calling itself, its called recursive.
}


//factorial number: recursive. (fact of 3=3*2*1=6)
