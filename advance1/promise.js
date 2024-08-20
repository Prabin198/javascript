const PromiseOne= new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log('Async task 1');
    resolve();
  },1000)
})
PromiseOne.then(function(){
    console.log('Promise consumed.')
}) 

//++++++++
new Promise(function(resolve,reject){
 setTimeout(()=>{
    console.log('Async task 2');
    resolve();
 },1000)
}).then(function(){
   console.log( `done.`)
}) 
//+++++++++++++

const ramu =function(resolve,reject){
    setTimeout(() => {
        console.log('hello !!');
       resolve();
    }, 1000);
}
const promiseThree = new Promise(ramu)


promiseThree.then(function(){
    console.log('done.')
})

