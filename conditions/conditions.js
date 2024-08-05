//there are condition lilke <,>,<=,>=,==,===,!=,!==
//===when data type are same then only it is applied...
 // eg:
// if(2=="2"){
//     console.log("executed")output we got is executed here.
// // }
// if(2 ==="2"){
//     console.log("executed")//we did not got anyoutput here .
// }
const username="sumati";
if(String(username) =="suman"){
    console.log("executed")
}else{
    console.log(`the user is:${username}`)//they can access data of global scope 
}
const isLoggedin=true;
if(Number(isLoggedin)==1){
          const power="domain expansion";
          console.log(`The power is:${power}`)
}else{
    const power="bankai"
    console.log(`the power is:${power}`)
}
// console.log(`the power is,${power}`) it cannot be executed because we cannot access const,let variable scope which is in block scope from global scope. if there was var power="bankai" we can access in such case