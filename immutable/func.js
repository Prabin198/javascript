// function ram(){
//     var data='hello';
//     sita(data);
// }
// function sita(e){
//     this.data=e;
//     console.log(this.data)
   
// }
// const ramayan= ram();
// console.log(typeof ramayan);
// //yesma directly data arko function mah pass garera output diyeako xah .


function ram(){
    var data='son';
    sita();
    console.log(this.data);//this use garda value daughter auxa but data matra use garda son auxa this is closure property
}
function sita(){
    this.data='daughter'
    return 
}
ram();

