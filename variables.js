const accountId ="7190";
var accountName ="Prabin Karki";
let accountEmail ="karkiprabin113@gmail.com";
// accountCity="kathmandu";


/*prefer not to use var because of it's issue in block scope and functional scope */
accuntId="11";
accountEmail="luffy.google.com";//here var and let can be modified but const cannot be modified once it is defined
accountName="Rorona Zoro";
let accountCity;//since there is no variable in city so it is undefined
console.table([accountId,accountName,accountEmail,accountCity]);