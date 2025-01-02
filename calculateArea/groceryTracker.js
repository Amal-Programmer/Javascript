let grocery1;
let grocery2;
let grocery3;

//parseFloat built-in JavaScript function that takes a string and tries to convert it into a floating-point number
//.value retrieves the string entered into the input field associated with that element
function TotalAmount() {
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);
    
    let total = grocery1+grocery2+grocery3;
    document.getElementById('result').innerText = `The total amount is :$ ${total}`;
}