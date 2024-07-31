// function passObj(anyobject){
//       console.log(`my name is ${anyobject.name}.I am ${anyobject.age} years old.`)
// }
// passObj({
//     name:"prabin",
//     age:20
// })

function obj(anyobject){
     return console.log( `hey,my name is${anyobject.name},my age${anyobject.age}`);
     
}
const user={
    name:"prabin",
    age:20,
    gender:"male"
}
obj(user);

function array(newarr){
     return newarr[2];
}
console.log(array([200,300,400]));//ans is 400