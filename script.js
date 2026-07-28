
//turnary operator
const condition = false;

const result = condition ? "condition is true" : "condition is false"

console.log(result);

//turnary application
const age = 20;
console.log(`You are ${age>=18 ? "an adult" : "a minor"}`);

const fruits=['Mango','Banana','Apple'];
for(const fruit of fruits){
    if(fruit.toLowerCase() != 'banana')
    console.log(`I like ${fruit}.`);
    console.log(`outside if statement`);
}


const arr=[{name:'John',age: 25},{name:'Jane',age: 30},{name:'Jim',age: 20}];
let totalage=0;
let output='';

for(const temp of arr){
    totalage += temp.age;
    if(temp.age<25)continue;
    output += `${temp.name} is ${temp.age} years old.\n`;
}
console.log(`Total age: ${totalage}`);
console.log(output);
