const marvel_heroes=["thor","ironman","captainAmerica"];
const dc_heroes =["superman","batman","aquaman"];
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);//we got array inside array
//console.log(marvel_heroes[3][1]);//output will be batman
// const all =marvel_heroes.concat(dc_heroes);//change both array into single array
// console.log(all);
console.log(Array.of(...marvel_heroes,...dc_heroes))//using this also join both array
const spreadout=[...marvel_heroes,...dc_heroes];
console.log(spreadout);//using this is very effective to join more array
const newdata = [1,2,[3,4],[5,[6,7]]];
console.log(newdata.flat(Infinity));//it remove all the braces inside the main array
console.log(Array.isArray(0));//it check whether the given element is in defined array or not.
console.log(Array.from("prabin"))//it will give output in array
console.log(Array.of("prabin"))