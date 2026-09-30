let expression = 0;
let category;
let a = 7;
let b = 5;
let age;

/*
let a = parseInt(prompt("Enter a:"), 10);
let b = parseInt(prompt("Enter b:"), 10);
let age = parseInt(prompt("Enter your age:"), 10);


expression = a + b;

console.log(expression);

*/
const diff = () => {
if (a >= b) {
   return  a - b;
} else {
    return a + b;
}
}

switch(true) {
case age < 12: 
 category = "underage";
 break;
 case age < 19:
 category = "teen";
 break;
 case age < 35:
 category = "Youth";
 break;
 case age < 50:
    category = "Adult";
    break;
case age > 50:
  category = "Elderly";
break;
default: "Enter age";
}




const ageCheker = (age) => {
    if (age >= 18) {
        return "You are an adult, where is your ID!";
    } else {
        return "Stay safe kid!";
    }
};

console.log("results:", " ", diff()) ;
console.log(ageCheker(age));