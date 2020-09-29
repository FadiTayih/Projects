// Book Constructor

function Book(title, author, isbn){

    this.title= title;
    this.author = author;
    this.isbn= isbn;
}


// UI constructor

function UI(){}

//  Add a Book to a List
UI.prototype.addBookToList = function(book){

    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);

}

// Clear the Fields
UI.prototype.clearFields = function(){

    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
}

// Show an Error message
UI.prototype.showError = function(message, className){

    // Create the div
    const div = document.createElement('div');

    // Add a class name to the div
    div.className = `alert ${className}`;

    // Add the text
    div.appendChild(document.createTextNode(message));

    // Get the message
    const container = document.querySelector('.container');
    const form = document.querySelector('#form-group');

    // Inser the alert from the div to the form and then to the container
    container.insertBefore(div, form);

    // Timeout after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000)
}

// Delete the element
UI.prototype.deleteItem = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}





// Event Listeners
document.getElementById('form-group').addEventListener('submit', function(e){
    // get the form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;


    // Initialize the book object
    const book = new Book(title,author,isbn);


    // Initialize a UI object
    const ui = new UI();

   


    // Validate the input

    if(title === '' || author === '' || isbn === ''){
       ui.showError('Please fill all the form', 'error');
    }
    else{

        // Add the book to the list
        ui.addBookToList(book);

      

         // Clear the field
        ui.clearFields();

        // Show success message
        ui.showError('Success', 'success');
    }
    e.preventDefault();
});


// Event Listener to delete

document.getElementById('book-list').addEventListener('click',function(e){

    
    // Initialize a UI object
    const ui = new UI();

    ui.deleteItem(e.target);

    // Show sucess message
    ui.showError('Book Removed', 'success');

   
    e.preventDefault();
});