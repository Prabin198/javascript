// const array=["js","python","ruby","cpp"];
// array.forEach(function(items){
//     console.log(String(items))
// })
const arrays=["js","python","ruby","cpp"];
arrays.forEach((item)=>{
 console.log(item)
})

function myfunc(item){
    console.log(item);
}
arrays.forEach(myfunc);
const array=["js","python","ruby","cpp"];
array.forEach(function(item,index,arr){//for item index and arr
    console.log(item,index,arr)
});

const myArr=[{
   name:"sanjiv",
    age:20 
},
{
    name:"sanjivni",
    age:20 
},{
    name:"sanju",
    age:20 
}
]
myArr.forEach(function(item){
    console.log(item.age)
})