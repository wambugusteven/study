let currentExpression = "0";

const appendNumber = (number) => {
    currentExpression += number;
    document.getElementById("results").value = currentExpression;
}

const appendOperator = (operator) => {
    currentExpression += ` ${'operator'} `;
    document.getElementById("results").value = currentExpression;
}

const logic = () => {

}

const clearResults = () => {
  currentExpression = '';
  document.getElementById('results').value = currentExpression;
} 