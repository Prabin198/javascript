// async function WebUrl() {
//     try {
//         const response =await fetch('https://jsonplaceholder.typicode.com/users');
//     const data= await response.json();
//     console.log(data);
//     } 
//     catch (error) {
//         console.log('E:',`${error}`);
//     }
// }
// WebUrl();

// fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
//     const responsed=response.json();
//     return responsed;
// }).then(function(data){
    
//     data.filter(function(e){
//           console.log(e.username)
//     });
// }).catch(function(reject){
//     console.log(`Error:${reject}`)
// })
const pms=new Promise(function(response,reject){
   let error =false;
    if (!error) {
        console.log('Async /Await');
        response({user:"prabin"});
    } else {
        console.log('something went wrong.')
        reject();
    }
})

 async function getfact() {
    

try {
    const promises=await pms;
    console.log(promises)

    const response =await fetch('https://jsonplaceholder.typicode.com/users');
    const data =await response.json();
    data.filter((e)=>{
        console.log(e.username);
    })
} catch (error) {
    console.log('E:',error)
}
}
console.log(getfact());