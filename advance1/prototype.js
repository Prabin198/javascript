const Username='prabin    ';
// console.log(Username.trim().length);
String.prototype.trueLength =function(){
    console.log(`the true length is :${this.trim().length}`)
}
Username.trueLength();
'myboy'.trueLength();
