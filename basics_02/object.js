// const name ="prabin";
// const age =19;
// console.log(`my name is ${name}.i am ${age} years old.`) just recall ``-->it is template literals


//singelton :only one instance :constructor will make singleton

//object literals:it doesnot makes singleton
const mysymbol=Symbol("key");

const myObj={
    name:"Prabin Karki",
    Age:20,
    Education:"Bachelor.CSIT",
    "nickname":"idk",
    isLoggedin:true,
    [mysymbol]:79010313//symbol always should be written inside[]then only it is count as symbol datatype.
}
// console.log(myObj.name,myObj[mysymbol],myObj["nickname"]);//here using object name.key doesnot give if key is in "--" so using object["--"]
// console.log(`Hello everyone,this is ${myObj.name}.I am ${myObj.Age}years old.I am currently studying in ${myObj.Education}`)
// // myObj.Email="prabinkarki.com";
// // console.log(myObj.Email);//here it overwrites email
// Object.freeze(myObj);
// myObj.name="nitesh giri";//using freeze disallow to overwrite .
// console.log(myObj.name)
// console.table(myObj);
myObj.greeting=function(){
    console.log("hello everyone");
}
console.log(myObj.greeting())
myObj.greetingtwo=function(){
    console.log(`hello,my symbol is, ${this.mysymbol}`);
}
console.log(myObj.greetingtwo())