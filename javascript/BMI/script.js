
const weight = document.getElementById("WeightNo");
const height = document.getElementById("HeightNo");
const bmi = document.getElementById("bmi-results");
const category = document.getElementById("category");
const Aweight = document.getElementById("Aweight")
;

function calIBM(height, weight) {
    let heigh = height * height;
    let BMI = (weight)/(heigh);
}

switch(true) {
   case BMI < 18.5:
    category.innerHTML = "Underweight";
    break;
    case BMI < 25:
        category.innerHTML = "Healthy";
        break;
    case BMI < 30:
        category.innerHTML = "OverWeight";
    break;
    default:
        category.innerHTML = "Obese";
}

function display() {
  category.innerHTML = "category";
  weight.innerHTML = "50";
  height.innerHTML = "40";
  bmi.innerText = calBMI();
}


