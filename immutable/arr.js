var arr1=[1,2,3,4];
var arr2=arr1;
arr2.pop();
console.log(arr2);
console.log(arr1);


 var state=[1,2,3];
// state.pop();
// console.log(state);//react js mah state hunxa tesmah chai mathi ko error audaina copy array mah change garda parent mah change hudaina.

var arr=[...arr1];//using spread operator ...
arr.pop();
console.log(arr);
console.log(state);



var obj={name:'prabin',age:12};
var copy=obj;
console.log(copy);//react js mah direct copy hudaina so using spread operator 
var duplicate={...obj};
duplicate.name='prabina';
console.log(duplicate)//yesari copy mah change garinxa and parent mah change hudaina 
obj=duplicate;//yesari parent mah change hunxa in react js
console.log(obj);
