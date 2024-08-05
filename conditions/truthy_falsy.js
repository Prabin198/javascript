const username=[];
if(username){
    console.log("got username")
}
else{
    console.log("there is no username");
}
//falsy values :-false,0,-0,BigInt 0n,null,undefined,!,Nan,""
//truthy values:-"0","false"," ",[],{},function(){},
const user={}
if(Object.keys(user).length===0){
    console.log("object is empty")
}
// Nullish Coalescing opereator ??:-works on null and undefined
let val1;
// val1=10 ?? 5;
// console.log(val1)//output is 10 
val1=null ?? 5;
console.log(val1)//output is 5 
//terniary operator\
const cost=100;
cost>=99 ? console.log("it is 100"):console.log('it is less');//condition?true:false