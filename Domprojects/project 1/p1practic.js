const white=document.getElementById("white");
const blue=document.getElementById("blue");
const red=document.getElementById("red");
const body=document.getElementById("Body")
const black=document.getElementById("black");
white.addEventListener('click',()=>{
      console.log("button click")
        body.classList.add("Bluee")
})
red.addEventListener('click',()=>{
    console.log("button click")
      body.classList.add("Blues")
})
blue.addEventListener('click',()=>{
    console.log("button click")
      body.classList.add("redd")
})
black.addEventListener('click',()=>{
    console.log("button click")
      body.classList.add("blackk")
})