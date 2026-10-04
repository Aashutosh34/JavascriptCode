function search() {
    console.log('Hello search 1');
}

function search(productName) {
    console.log('Hello search 2', productName);
}

//Function overloading: same function name with diff parameter.

search();   //latest function from top will be called.
//after added same function name with diff parameter also, Javascript is not allowing. means function overloading not allowed.
//becz function overloading is compile time polymorphysm and in javascript there is no such compiler here.

search('macbook');  //macbook passed as parameter.

function search(productName, price) {
    console.log('Hello search 2', productName, price);
}

search();
search('macbook', 50000, 16);   //ignored extra parameter.


