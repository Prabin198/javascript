class User{
    constructor(username){
      this.username=username;
    }
    static createId(username){//THIS IS INSTANCE OF CLASS USER !!
        const id=parseInt(Math.random()*100+1);
        const go =console.log(`the id for user ${username} is ${id}`);
        return go;
    }
    
}
const userDetail = new User('prabin');
// userDetail.createId();
User.createId(userDetail.username);
console.log(userDetail)