let a=5;
const b=3;
var c=9;//these are global scope.something in global scope are accessed by block scope but we cannot access block scope outside the block.
a=1;
if(true){
   let a=4;
  let  b=6;
   var c=0;//inside the {} we say it as block scope .using var changes its value if variable names are same;
}
console.log('THE VALUE IS:',c);
console.log('THE VALUE IS:',a);//we got output a=5 because using let does not change value unless variable like a=2 .it will overwrite in such case only.
console.log('THE VALUE IS:',b);//const doesnot change .