let browser = "safari";

switch (browser) {    //we are giving here 'key' and here key = 'browser' at line no 3. decision will be taken that do i have a case where browser=chrome.

    case 'chrome':    //it will check now do I have case(chrome) available? 
        console.log('Launch chrome');
        break;  //break means it will break entire switch, not only respective case.
    case 'firefox':
        console.log('Launch firefox');
        break;
    case 'Edge':
        console.log('Launch Edge');
        break;
    case 'safari':    //It will check at 3rd line do I have safari? and directly jump line 14,launch and break.
        console.log('Launch Safari'); //after break will jump on line 23.
        break;

    default:
        console.log('Invalid browser');
        break;
}

console.log('Enter URL');

console.log('----------------------------------------');

let browser1 = "opera";     //User can supply capital 'Chrome' aslo, Its our mistake that we are maintaining small 'chrome'.

switch (browser1) {    //We are giving here 'key' and here key = 'browser' at line no 3. decision will be taken that do i have a case where browser=chrome.

    case 'chrome':    //it will check now do I have case(chrome) available? 
        console.log('Launch chrome');
        break;  //break means it will break entire switch, not only respective case.
    case 'firefox':
        console.log('Launch firefox');
        break;
    case 'Edge':
        console.log('Launch Edge');
    //break;
    case 'safari':    //It will check at 3rd line do I have safari? and directly jump line 14,launch and break.
        console.log('Launch Safari'); //after break will jump on line 23.
    // break;

    default:
        console.log('Invalid browser');   //1st write all the cases then later add default condition.
        break;

    case 'opera':
        console.log('Launch Opera');
        break;
}

console.log('Enter URL');


console.log('----------------------------------------');

let browser2 = "CHROME";     //User can supply capital 'Chrome' aslo, Its our mistake that we are maintaining small 'chrome'.
//........................//To overcome this supply below logic provided in switch();

switch (browser2.trim().toLocaleLowerCase()) {

    case 'chrome':
        console.log('Launch chrome');
        break;
    case 'firefox':
        console.log('Launch firefox');
        break;
    case 'Edge':
        console.log('Launch Edge');
    //break;
    case 'safari':
        console.log('Launch Safari');
    // break;

    default:
        console.log('Invalid browser');   //1st write all the cases then later add default condition.
        break;

    case 'opera':
        console.log('Launch Opera');
        break;
}

console.log('Enter URL');


console.log('----------------------------------------');
let marks = 90;
//1-100 marks, as per that grade will be assign.
switch (marks) {
    case 1:
        console.log('marks=1');
        break;

    case 2:
        console.log('marks=2');
        break;

    case 3:
        console.log('marks=3');
        break;

    default:
        console.log('marks=1');
        break;                      //for range of marks the if...else condition we need to use like if (marks>=90);
    // Numbers we generally avoid to work with switch case.
}


console.log('----------------------------------------');
let isElement = true;
switch (isElement) {
    case true:
        console.group('Ele is active');
        break;
    case false:
        console.group('Ele is not active');      // we can use if...else as well, no need to use switch uneccessary.
        break;
}




//switch cases we can uses for cross browser,months logic,Multi user permission(RBAC),Multiple ENV(Stage,QA etc), API(Get,Put,Post,Delete)
//if we do not put break, after right condition also it will execute next case and put break from next case.
//Uneccessary firefox Or next browser will be also launch.
//If browser1='Edge' and Edge case doesn't have break it will launch 1st Edge and later Safari also.
//After default also we can write the cases.