// const myArr =[1,2,3,4,"prabin",true,false];
// console.log(myArr.includes("prabin"));
// const newArr =myArr[4];
// console.log(newArr.toUpperCase());
// myArr.pop();
// console.log(myArr);
// myArr.push('hello');
// console.log(myArr);

const newArr=[1,2,3,4,5,6];
const newA=newArr.slice(1,3);
console.log(newA);//using slice only change the array when it is defined differently in new object.it does not affect the original array if new oject is not defined
console.log(typeof newA);
// newArr.splice(1,4);
// console.log(newArr);//splice changed the original array .
// newArr.unshift(7);//7 is added in first index of array.
newArr.shift();//using this shifted first index out of array.
console.log(newArr)
