//var args: rest parameter:it is denoted by 3 dots ...

function selectCountryFromDropdown(...countryName) {    //now it will become array and allow multiple parameter also.
    console.log('Country Name:' + countryName);
    console.log(countryName.length);

    for (let e of countryName) {
        console.log(e);
    }

}

selectCountryFromDropdown('India', 'Japan', 'China', 'Sri Lanka'); //here passing 4 arguments but having only 1 parameter above 'countryName'.
selectCountryFromDropdown('India', 'China');
//so for that need to use ... it will allow to use multiple parameter.
//console.log(countryName.length);


//Fill function/ fill values

function fillvalues(...details) {
    console.log('Employee details:', details);
    console.log(details.length);

    for (let e of details) {
        console.log(e);
    }
};

fillvalues('Amit', 210, 'Lonand', 31, 'Associate Software Tester');
//details will take all these values becz of ...


