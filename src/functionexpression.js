//Function expression: It means this function value can be assign to variable also.


let cart = function addToCart(productName) {
    console.log('add to cart', productName);
    return 100;  //here the cart means only the function expression just bcz sometimes function names are big.
};

//function variable name=cart
//actual function name= addToCart
//whenever the cart function calling below that time return value is given to that cart().

//call the functiuon
let n1 = cart('macbook pro');
console.log(n1);
console.log(cart.name);    //it will not return as cart(function variable); It will return actual function name.
//addToCart();

//when to use this??
//when we have lengthy method names that time we need to give short name as function variable name.


let myOrder = function newPurchasedProdcutByme(productName) {
    console.log('Add to cart', productName);
    return true;
};

let item1 = myOrder('macbook pro+'); //return true is giving it to myOrder() then myOrder give store into 'item1.
console.log(item1);                  //and item1 is going to print in console that time it will show true.