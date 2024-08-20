// const user1 ={
//     username:'Hari',
//     Age:20,
//     Contact:9804954277,
//     getUserDetails:function(){
//             console.log(`Welcome ${this.username}`);
//     }
// };
// const user2={
//     username:'Shyam',
//     Age:21,

// }
// console.log(user1.getUserDetails())

function User(username,age){
    this.username=username;
    this.age=age;
    return this;
}
const userOne=new User('prabin',19);
 const userTwo= new User('ram',10);//yesle override garyo tesai le new use garne new means it is used to create  instance of object by calling constructor method 
console.log(userOne)