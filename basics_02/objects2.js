const todoApp=new Object();// this is singleton

todoApp.name="prabin karki";
todoApp.email="karkiprabin198@gmail.com";
console.log(todoApp.name);


const todo={
    name:{
        namewithcaste:{
            firstname:"prabin",
            lastname:"karki"
        }
    }
}//this is objects literals
console.log(todo.name.namewithcaste.firstname.toUpperCase());//when object are inside object .

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
//const obj3={obj1,obj2}//using this will give object with curly brackets inside it.
// const obj3=Object.assign({},obj1,obj2); gives object properly
// console.log(obj3)

// const obj3={...obj1,...obj2};//spread features
// console.log(obj3);


console.log(Object.keys(obj1));

console.log(Object.values(obj1));
console.log(Object.entries(obj1,obj2));//entries givees the arrays of first index in single and similarly of other too
console.log(todo.hasOwnProperty("name"))//gives the answer in true or false
