export let name = 'Tom';

export function add(a, b) {
    return a + b;

}

// console.log(name);
// console.log(add(2,2));

//here calling variable name and function from the same file.


//But,Waht if we call those things(variable and fucntion) from different class???
//Export and Import we need to use for this.



export function test() {
    console.log('Test 001');
}


// export{name,add,test};  ***we can export like this also; if we have manu function,variable***


export default function print() {
    console.log('Print ABC');
}
//In javascript we can use only one default function.

// export default function print1(){  
//   console.log('Print ABC');        //duplicate default function is not allowed.
// }


export let user = {
    name: 'Amit'
}


export let addTwoNum = (a, b) => a + b;