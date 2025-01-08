let books = [];
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    
    /*//For bookName, authorName, and bookDescription, the goal is to check if these fields are not empty (i.e., truthy).
        An empty string ("") is considered falsy in JavaScript, so the if condition naturally handles these cases.
        Using if (pagesNumber) would incorrectly exclude valid inputs like 0 because 0 is falsy in JavaScript.
        isNaN(pagesNumber) ensures the input is a valid number while still allowing valid numeric inputs like 0.
        */

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    ///The map() function iterates through the books array, creating a new array of HTML elements or strings based on the book information present in each array element.
    const booksDiv = books.map((book, index) => 
        `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="deletebook(${index})">Delete</button>`
    );
 
    document.getElementById('books').innerHTML = booksDiv.join('');
    ///The join('') method is employed to concatenate all the HTML elements generated for each book into a single string. This string representation of HTML elements allows the content to be inserted as a single block of HTML.
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function deletebook(index){
    books.splice(index,1);
    showbooks()
}