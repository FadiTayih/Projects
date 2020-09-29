
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn= isbn;
    }
}

class UI{


    addBookToList(book){

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

    clearFields(){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';

    }

    showError(message, className){
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

    deleteItem(target){

        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
};

// STore to localstorage
class Store{

    static addBook(book){

        const books = Store.getBook();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books))

    }

    static removeBook(isbn){

        
        const books = Store.getBook();
       
        books.forEach(function (book, index){

            if(book.isbn === isbn){
                books.splice(index, 1 )
            }

            
        localStorage.setItem('books', JSON.stringify(books))
        });

    }

    static displayBook(){
        const books = Store.getBook();

        books.forEach(function (book){

            const ui = new UI;

            ui.addBookToList(book);
        })
       

        

    }

    // Get the book from the localstorage
    static getBook(){
        let books;
        if(localStorage.getItem('books') === null){
            books= [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }
}

// Dom reload Listner
document.addEventListener('DOMContentLoaded', Store.displayBook);


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

        ui.addBookToList(book);

          // Add the book to the localstorage
          Store.addBook(book);
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

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

    // Show sucess message
    ui.showError('Book Removed', 'success');

   
    e.preventDefault();
});