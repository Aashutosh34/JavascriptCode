function login(username, password, role = 'Admin', status = 'Active') {    //here admin is default value for role like if we dont supply role; the role will be Admin by default
    console.log(username, password, role, status);
}

// login('Amit34', 'Amit@1234');    //without role default will be taken=Admin
// login('Amit34', 'Amit@1234', 'NormalUser');  //here we provided the role as 'NormalUser'

login('Amit34', 'Amit@1234', 'inActive');   //here problem is 3rd parameter is about role but we pass status as inActive.
//So this is the problem. So to overcome this we need to provide null if dont want to provide anything.
login('Amit34', 'Amit@1234', null, 'inActive');   //role=null as per the parameter.

