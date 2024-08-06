// const Myarr=[2,3,4,5,6,7,8];
// Myarr.forEach(function(item){
// if(item%2==0){
//     console.log(item)
// }
// else if(item%3==1){
//     console.log(item);
// }
// else{
//     return item*item;
// }
// })

const MyName=[1,2,3,4,5,,6,7];
const myNAME=MyName.filter((item)=>{
  
    if(item>4){
       return item;
    }
});
console.log(myNAME);

const func=[1,2,3,4,5,6,7,8];
const myFunc=[];
func.forEach((num)=>{
    if (num>6) {
        myFunc.push(num);
    }
})
console.log(myFunc);
func.pop();
console.log(func)




const userbook=[
    {title:"one",genre:"frictional",published:1990,edition:2004},
    {title:"two",genre:"non-frictional",published:1999,edition:2012},
    {title:"three",genre:"fantasy",published:1980,edition:2000},
    {title:"four",genre:"martial arts",published:1993,edition:2004},
    {title:"five",genre:"non-frictional",published:1996,edition:2008},
    {title:"six",genre:"frictional",published:1980,edition:2009}
];
const book=userbook.filter((bks)=>{
    // if (bks.genre==="frictional") {
    //   return bks;
    // }
   if(bks.published>=1990)
   {
    return bks;
   }

})

console.log(book);