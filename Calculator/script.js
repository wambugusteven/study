let currentExpression = "0";


const appendNumber = (number) => {

  if (currentExpression === "0") {
    currentExpression = number;
  } else {
    currentExpression += number;
  }
    document.getElementById("results").value = currentExpression;
}

const appendOperator = (operator) => {
    currentExpression += ` ${operator} `;
    document.getElementById("results").value = currentExpression;
}

const deleteInput = () => {
 
  if (currentExpression === "" || currentExpression.length === 1) {
    currentExpression="0"
  } else {
    currentExpression = currentExpression.substring(0, currentExpression.length-1)
  
  }
  document.getElementById("results").value = currentExpression
}

 equal.addEventListener("click", () => {
  currentExpression = eval(currentExpression.replace('÷', '/').replace('×', '*'));
  document.getElementById('results').value = currentExpression;

 })
  

const clearResults = () => {
  currentExpression = '';
  document.getElementById('results').value = currentExpression;
} 