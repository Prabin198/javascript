const numbers=[2,3,4,5,6,7,8,9];
const num=numbers.map(function(numb){
    if(numb>1){
        return numb+10;
    }
})
console.log(num);
const Mynum=[1,2,3,4,5,6,7,8];
const Arr=Mynum.map((num)=>num*2).map((num)=>num-4).filter((num)=>num>=10);
console.log(Arr)