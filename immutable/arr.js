var arr1=[1,2,3,4];
var arr2=arr1;
arr2.pop();
console.log(arr2);
console.log(arr1);


var state=[1,2,3];
state.pop();
console.log(state);//react js mah state hunxa tesmah chai mathi ko error audaina copy array mah change garda parent mah change hudaina.

var arr=[...arr1];//using spread operator ...
arr.pop();
console.log(arr);
console.log(state);