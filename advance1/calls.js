function userDetail(username){
    this.username=username;

}
function details(username,age,email){
 userDetail.call(this,username);
 this.age=age;
 this .email=email;

}
const tea= new details('prabin',20,'karkiprabin@gmai.com');
console.log(tea)
