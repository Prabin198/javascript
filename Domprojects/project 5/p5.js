//genereate random color
const button=document.querySelector('#one')
const butt=document.querySelector('#two')
const randomColor=function()
{
    const hex='0123456789ABCDEF';
    let color='#'
    for (let i = 0; i < 6; i++) {
        color +=hex[Math.floor(Math.random()*16)];
        
    }
    return color;
}
console.log(randomColor())
const main=document.querySelector('.main')
document.querySelector('.start').addEventListener('click',function(){
   const stop =setInterval(function(){
      main.style.backgroundColor=`${randomColor()}`
      button.style.backgroundColor=`${randomColor()}`
      butt.style.backgroundColor=`${randomColor()}`
   },100)

    document.querySelector('.stop').addEventListener('click',function(){
        clearInterval(stop)
        // stop=null;
    })
})