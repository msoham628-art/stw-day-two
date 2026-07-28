//Exercize 1
/* Creating a program to score the grades of different marks achieved in JS*/
//const marks = 95 /Grade is above A
//const marks = 75 /Grade is B
//const marks = 40 /Grade is D
//const marks = 39 /Grade is below F
const marks = 150 //Grade is above A


if(marks >= 90) console.log(`Your Grade is above A.`)
    else if(marks >= 75 && marks <= 89) console.log(`Your Grade is B.`)
    else if(marks >= 60 && marks <= 74) console.log(`Your Grade is c.`)
    else if(marks >= 40 && marks <= 59) console.log(`Your Grade is D.`)
    else if(marks <= 40) console.log(`Your Grade below F.`)
    else console.log("Invalid input.")

//Exercize 2
//Creating the program to print the sequence of the numbers A.T.Q.
for(let number = 1;number <= 50;number++)
        if((number%3 === 0) && (number%5 === 0)) console.log("FizzBuzz")
            else if(number%5 === 0) console.log("Buzz")
            else if(number%3 === 0) console.log("Fizz")
        else console.log(number)

//Exercize 3
//Creating the program to print the table of odd numbers between 2 and 10 in JS
console.log("The tables of the odd numbers:\n")
for(let table = 2; table <= 10; table++){ 
    if(table % 2 === 0){  
        continue;
    }
        console.log(`This is table of ${table}`)
    for(let i = 1; i<= 10; i++){ 
        console.log(`${table} * ${i} = ${table * i}`)
    }
    console.log("\n")
}

//Exercize 5
console.log("Truthiness Audit with Array:\n");

// Step 1: Saari values ko array me daal do
let values = [0, "", " ", "0", null, undefined, NaN, {}, [], "false", -1];

// Step 2: Saare naam alag array me
let names = ['0', '""', '" "', '"0"', 'null', 'undefined', 'NaN', '{}', '[]', '"false"', '(-1)'];

// Step 3: Loop chalao aur ek ek karke check karo
for(let i = 0; i < values.length; i++) {

  if(values[i]) { // agar ye value truthy hai
    console.log(`${names[i]} --> truthy`);
  } else { // agar ye value falsy hai
    console.log(`${names[i]} --> falsy`);
  }
}

//Exercize 4
// let guess = null;
// const target = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;
// let min = 1;
// let max = 100;

// console.log(`Target is: ${target}`); 

// while (guess !== target) {
//     guess=Number(prompt("Enter your guess"))
//   attempts++;
  
//   if (guess > target) {
//     alert(`Guess ${guess} is too HIGH`);
//     // max = guess - 1; // new max
//   } else if(guess <target) {
//     alert(`Guess ${guess} is too LOW`);
//     // min = guess + 1; // new min
//   }

// //   guess = Math.floor((min + max) / 2);
// }

// attempts++;
// alert(`Found ${target} in ${attempts} guesses!`)

//Exercize 6
console.log("Print all the prime numbers from 2 to 50.\n")
for(let num = 2;num < 50; num++){
    let prime = true;

for(let i = 2; i < num; i++){
    if(num % i === 0){
      prime = false;
      break;
    }
}

if(prime)
    console.log(num)
}