const myarr ="CHAI"
for (const greet of myarr) {
    console.log(greet);//for of loop here it doesnot need any increment and decrement operator .
    
}
const myobj=[1,2,3,4]
for (const object of myobj) {
     console.log(object)
}
const map =new Map();
map.set("IN","india")
map.set("NP","nepal")
map.set("EN","england")
map.set("Aus","australia")

console.log(map);
for (const [key , value] of map) {
    console.log(key,":",value)
}
const obj=new Object({
    name:"prabin",
    age:20
})
const obj1=new Object({
    name:"prabin",
    age:20
})
const obj2={...obj,...obj1}

    console.log(obj2);

