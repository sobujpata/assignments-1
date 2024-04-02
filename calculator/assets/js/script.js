function calculate() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var resultElement = document.getElementById('result');

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
    resultElement.innerHTML = '<div class="alert alert-danger" role="alert">Please enter valid numbers.</div>';
    return;
    }

    // Perform calculation based on the selected operation
    var result;
    switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
        resultElement.innerHTML = '<div class="alert alert-danger" role="alert">Cannot divide by zero.</div>';
        return;
        }
        result = num1 / num2;
        break;
    default:
        resultElement.innerHTML = '<div class="alert alert-danger" role="alert">Invalid operation.</div>';
        return;
    }

    // Display result
    resultElement.innerHTML = '<div class="alert alert-success" role="alert">Result: ' + result + '</div>';
}