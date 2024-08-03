// //handling array
// function addPrice(...num){//using ... rest which is also spread while adding object and array.
//          return num;
// }
// console.log(addPrice(200,300,400,1000))//it will automatically give string in array 
// function addArray(var1,var2,...num){
//     return num;//here it will return [5,6,7,9] because parameter var1 and var2 took 2 and 4.
// }
// console.log(addArray(2,4,5,6,7,9))
function addArray(num1,num2){
    return num1.concat(num2);
}
console.log(addArray([1,2,3,4],[5,6,7,8]))
function add(...num){
    return num[3];
}
console.log(add(1,2,3,4,5,6))