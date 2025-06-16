let currentExpression = "0";


const appendNumber = (number) => {
    currentExpression += number;
    document.getElementById("results").value = currentExpression;
}

const appendOperator = (operator) => {
    currentExpression += ` ${'operator'} `;
    document.getElementById("results").value = currentExpression;
}

const deleteInput = () => {
  
  document.getElementById("results").value = currentExpression;
}

const logic = (calculations) => {
   if (number === 0) {
    return '0';
   } else {
    
   }
    document.getElementById('results').value = currentExpression;
}

const clearResults = () => {
  currentExpression = '';
  document.getElementById('results').value = currentExpression;
} 