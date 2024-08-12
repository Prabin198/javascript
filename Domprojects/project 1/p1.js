const main=document.querySelector("main");
const button=document.querySelectorAll('#button');

button.forEach((element) => {
  console.log(button)
  element.addEventListener('mouseover',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.className ==='white'||'blue'||'red'||'green'){
      main.style.backgroundColor=e.target.className
    }
  } )
});