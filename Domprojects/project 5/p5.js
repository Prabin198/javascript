// //genereate random color
// const button=document.querySelector('#one')
// const butt=document.querySelector('#two')
// const randomColor=function()
// {
//     const hex='0123456789ABCDEF';
//     let color='#'
//     for (let i = 0; i < 6; i++) {
//         color +=hex[Math.floor(Math.random()*16)];
        
//     }
//     return color;
// }
// console.log(randomColor())
// const main=document.querySelector('.main')
// document.querySelector('.start').addEventListener('click',function(){
//    const stop =setInterval(function(){
//       main.style.backgroundColor=`${randomColor()}`
//       button.style.backgroundColor=`${randomColor()}`
//       butt.style.backgroundColor=`${randomColor()}`
//    },100)

//     document.querySelector('.stop').addEventListener('click',function(){
//         clearInterval(stop)
//         // stop=null;
//     })
// })
const randColor=function(){
    const hex ='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
const start=document.querySelector('.start');
const stop =document.querySelector('.stop');
const main=document.querySelector('.main')
 let intId
 const func=function(){
    if(!intId)
     intId=setInterval(colorChange,100);
 }
 function colorChange(){
        main.style.backgroundColor=`${randColor()}`
 }
start.addEventListener('click',func);
const jsn=function(){
    clearInterval(intId);
    intId=null;
}
stop.addEventListener('click',jsn);