//Garbadge collector will distroy which is having Null and No reference.


let obj = {
    name: 'Amit',
    age: 20
};

obj = null;
//obj = undefined;
//console.log(obj.name);  //Error is coming but dont terminate my whole program.(Follow line 12 rule)
// '?' is used for null handling/undefined handling.
console.log(obj?.name);

console.log('Hello world');



