const dropdowns=document.querySelectorAll(".dropdown select");
const url= "https://latest.currency-api.pages.dev/v1/currencies";
const fromCurr=document.querySelector('.from select');
const toCurr=document.querySelector('.to select');
const msg=document.querySelector('.msg');
const btn=document.querySelector('.btn');
for (let select of dropdowns) {
     for(currCode in countryList){
        let newOption=document.createElement('option');
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name ==="From" && currCode ==='USD'){
            newOption.selected="selected"
        }else if(select.name ==="To" && currCode ==='NPR'){
            newOption.selected="selected"
        }
        select.appendChild(newOption)
     }
     select.addEventListener('change',(e)=>{
            updateFlag(e.target)
     })
}
const updateRate=async ()=>{
 let amount=document.querySelector(".amount input");
 if(amount.value ==="" || amount.value < 1){
    amount.value=1;
 }
 const URL=`${url}/${fromCurr.value.toLowerCase()}.json`;
 let response=await fetch(URL);
 let data =await response.json();
 let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
 let finalRate=rate*amount.value;
 msg.innerText=`${amount.value} ${fromCurr.value} = ${finalRate} ${toCurr.value}`
}
const updateFlag=(element)=>{
      let currCode=element.value;
      let countryName=countryList[currCode];
      let newSrc=`https://flagsapi.com/${countryName}/flat/64.png`;
      let img=element.parentElement.querySelector('img');
      img.src=newSrc;
      console.log(currCode);
};
console.log(fromCurr.value)

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    updateRate();
});
window.addEventListener('load',()=>{
    updateRate();
})
