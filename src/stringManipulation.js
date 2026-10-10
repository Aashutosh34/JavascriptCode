let str='Hellol';
console.log(str.length);   

//mouserover on length--> We can see its property-->No need to mention () like length();
//If its method then only need to give ().

console.log(str.indexOf('H'));   
console.log(str.indexOf('p'));   //If its not available;it will show '-1'.
//console.log(str.indexOf('l', str.indexOf('l') + 5));

console.log(str.lastIndexOf('l')); 
console.log(str.includes('ell'));   //true=Boolean

console.log(str.startsWith('he'));     //false becz its starts with 'He' not 'he'
console.log(str.endsWith('lol')); 


//Slice:

console.log(str.slice(1,4));    
//slice:extract portion of string, here it will give '1st' postion and exclude '4th' position.
//means character of index '1' will give and index of '4-1' will return.
//In the javascript with the slice, negative index is also possible.
console.log(str.slice(-3));   //here it will not only '-3' position char it will return -1 to -3 characters.
//Hellol
//012345                postive: from left to right
//-6-5-4-3-2-1          negative: from right to left
console.log(str.slice(-1));
console.log(str.slice(-4,-1));  //-1 is excluded.
console.log(str.slice(-6,-4));
console.log(str.slice(-4,4));

console.log('================================================')

//Substring :- same like slice but negative indexing is not allowed.
console.log(str.substring(1,4));

console.log('================================================')

let st ='playwright';
console.log(st.charAt(0));
console.log(st.charAt(-1));    //Negative is not allowed.

console.log("A".charCodeAt());
console.log("abc".charCodeAt(2));     //abc=a=97  b=98  c=99(2 index position here)
//A-Z  = 65-90    //these are ASCII value.
//a-z  = 97-122
//0-9  = 48-57
 

//Trim
console.log('    Amit     '.trim());    //Remove after and before space.

//trimStart
console.log('    Amit     '.trimStart());    //trim only before space.

//trimEnd           
console.log('    Amit     '.trimEnd());  //trim after space only.


//*****Replace******

console.log("Hi Amit".replace("Amit","Nikhil"));    //Here replace 'Amit' with 'Nikhil'

//*****ReplaceAll******
let DOB="06-05-1995"; //06/05/1995
console.log(DOB.replaceAll("-","/"));   //Replace - to /


//******concat*******
console.log("Hello".concat(" ","Selenium"," ","Automation"));   //Hello Selenium Automation


//*******Padding********
console.log("7".padStart(3,0));    //007....7 will be shifted to 3rd position and 00 added at 1st and 2nd position.
console.log("7".padEnd(3,0));     //700....7 will be shifted to 3rd position and 00 added at 1st and 2nd position.


//*******Split*********
let lang='Java_Selenium_Playwright_Typescript';
let lg=console.log(lang.split('_'));     //[ 'Java', 'Selenium', 'Playwright', 'Typescript' ]
console.log(lg[1]);
