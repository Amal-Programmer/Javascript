function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
        let result1 = multiply(num1, num2);
        let result2 = add(num1, num2);
        let result3 = divise(num1, num2);
        // Display the result
        displayResult(result1, result2, result3);

        } else {
            document.getElementById('result').textContent= 'Please enter valid numbers';
        }
}
function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Multiply the numbers
    return a * b;
}
function add(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Add the numbers
    return a + b;
}
function divise(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Division numbers
    return a / b;
}
function displayResult(result1, result2, result3) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<strong>The result is</strong>: <br> 
    Multiplication: ${result1}<br> 
    Addition: ${result2}<br> 
    Division: ${result3}`
}
        