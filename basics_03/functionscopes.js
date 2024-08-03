function add(){
    const username="prabin";
    function box(){
        const email="hero@gmail.com";
        console.log(username);//it can access variable of global scope of it.
    }
    //console.log(email);//here we cannot define variable of block scope outside of it.
    box()
}
add()

const username1="luffy";
if(username1=="luffy")
{
    const user="zoro";
    if(user=="zoro"){
        const hero="shanks"
        console.log(username1);//we can say it as closure.



    }
   // console.log(hero);//same case

}
//console.log(user)//same case

