import print, {name as username,add,test} from './utils.js';
import {getRandomNumber} from './stringUtil.js';


console.log(username);   //here we can give another name also like this.
console.log(add(10,40));
test();

print();
console.log(getRandomNumber());


//in package.json we mentioned type: module.
//Module represents the latest javascript functions.
//****Export and Import is also using the concept of destructuring (object destructuring)
//default function is not participating in distructuring.
//I default function should be mention before { } with ,


export function rest(){
console.log('Rest function.....');     //we can do import
}