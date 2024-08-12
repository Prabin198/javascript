const form=document.querySelector("form");
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#Weight').value);
    const result=document.querySelector('#results');

if (height === ''|| height < 0 || isNaN(height) ||height==0) {
    result.innerHTML=`Please provide valid height : ${height}`
}
else if (weight === ''|| weight < 0 || isNaN(weight) ||weight==0) {
    result.innerHTML=`Please provide valid width : ${weight}`
}else{
   const bmi= (weight / ((height*height)/10000)).toFixed(2);
   //display in result
   result.innerHTML=`The bmi is : ${bmi}`
}
})
