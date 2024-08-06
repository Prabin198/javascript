const myArr=[1,2,3,4,5,6];
const accumulator=myArr.reduce(function(acc,currentval){
    console.log(`accumulator:${acc}and currentval:${currentval}`)
    return acc+currentval;
},0)
console.log(`The total is:${accumulator}`);//initially accumulator mah 0 hunxa when adding current value accumulator increase inthis way we get output.used in billing while shopping.
const myArrs=[100,200,300];
const accumulators=myArrs.reduce((acc,currentval)=>acc+currentval,0);//faster code
console.log(`The total is:${accumulators}`);



//example
const ShoppingCart=[
    {
        name:"artificial intelligence",
        price:800
    },
    {
        name:"computer network",
        price:640
    },
    {
        name:"operating system",
        price:500
    },
    {
        name:"DBMS",
        price:600
    },
    {
        name:"theroy of computing",
        price:99
    }

    
]
const total=ShoppingCart.reduce((acc,val)=>{
        return acc+val.price;
},0)
console.log(`The total is:${total}`)