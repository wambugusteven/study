/*
const weightNo = document.getElementById("weightNo");
const heightNo = document.getElementById("heightNo");
const bmi = document.getElementById("bmi-results");
const category = document.getElementById("category");
const weightA = document.getElementById("weight");
const heightA = document.getElementById("height")
;

function calIBM() {
    let BMI;
    let height = heightA.value;
    let weight = weightA.value;
    let heightInM = height / 100;
return BMI = weight / (heightInM * heightInM);
}


function display() { 
  switch(true) {
   case BMI < 18.5:
    category.innerText = "Underweight";
    break;
    case BMI < 25:
        category.innerText = "Healthy";
        break;
    case BMI < 30:
        category.innerText = "OverWeight";
    break;
    default:
        category.innerText = "Obese";
}
  weightNo.innerText = "Weight: " + weight.value;
  heightNo.innerText = "height.value";
  bmi.innerText = calBMI();
}

*/

let bmi;
let heightW;
let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

const calIbm = () => {
   heightW = height / 100;
   
   return bmi = weight / (heightW * heightW);
}

switch(true) {
    case bmi < 18: {
        document.getElementById("category").innerText = "Underweight";
    }
    break;
    case bmi < 25: {
        document.getElementById("category").innerText = "Healthy";
    }
    break;
    case bmi < 35: {
        document.getElementById("category").innerText = "OverWeight";
    }
    break;
    defau
}

const display =  () => {
    document.getElementById("weightNo").innerHTML = weight.value;
    document.getElementById("heightNo").innerHTML = "There";
    document.getElementById("bmi-results").innerHTML = calIbm();

}
