
console.log(Math.PI);
Math.PI=5;
const ram=console.log(Math.PI)

// Object.defineProperty(Math,'PI',{
//     writable:true
// })
const Descriptor= Object.getOwnPropertyDescriptor(Math,'PI')
console.log(Descriptor);
//using factory object.
let myName={
    greet:function(){
        return 'hello, my name is '+this.name+'.'
    }
}

const myObj=Object.create(myName);
myObj.name='ram'
console.log(myObj.greet())
//here i made name as a universal constant which cannot be changed.

const User={
    name:'prabin',
    email:'prabin@fb.com'
}
Object.defineProperty(User,'name',{
    writable:false,
    enumerable:false
})
const descript=Object.getOwnPropertyDescriptor(User,"name");
console.log(descript);