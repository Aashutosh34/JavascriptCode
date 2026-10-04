let num = [
    [1, 2, 3],
    [100, 200, 300],
    [1000, 2000, 3000]
];

//3*3 matrix or 2 Dimension array or [row][column]
//in 2D aaray each and every row having same numbers of column.
// console.log(num[0][0]);
// console.log(num[2][2]);


//How we can iterate this array.
//1.Normal loop
for (let i = 0; i <= num.length - 1; i++) {        //first for loop representing row.
    for (let j = 0; j <= num[i].length - 1; j++) { //2nd for loop represents column.
        console.log(num[i][j]);     //num[0]=go to 0th row and count length of colum also.
        //in nested for loop always inner loop will be run fully.
        //Every time inner loop will be starts from the '0'.(Most imp)
    }
}

for (let i = 0; i <= num.length - 1; i++) {        //first for loop representing row.
    for (let j = 0; j <= num[i].length - 1; j++) { //2nd for loop represents column.
        process.stdout.write(`${num[i][j]} `);   //inner for loop.
        //process.stdout.write keeps the numbers of one row on the same line
    }
    //process.stdout.write('\n');      //new line.
    console.log();  //This will generate new line.

}



//Jagged Array: columns length are not equal in each set of array.
//use of jagged array for some users we want to provide all data but for another user we dont have all the data to provide.

let marks = [
    [34, 44, 55],
    [61],
    [71, 81, 91, 101],
    [111, 121]
];
console.log(marks);
for (let i = 0; i <= marks.length - 1; i++) {
    for (let j = 0; j <= marks[i].length - 1; j++) {
        process.stdout.write(`${marks[i][j]} `);
    }
    console.log();
}








