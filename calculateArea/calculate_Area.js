let length;
let width;

//parseFloat built-in JavaScript function that takes a string and tries to convert it into a floating-point number
//.value retrieves the string entered into the input field associated with that element
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    
    let area = length*width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}