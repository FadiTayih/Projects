
class UI{

    constructor(){
        this.post = document.querySelector('#post');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.ForState = 'add';
    }

    showPosts(posts){

       let output ='';
       
       posts.forEach((post) =>{

        output +=`
        <div class="card mb-3">
        <div class="card-body">
        <h4 class="card-title">${post.title}</h4>
        <p class="card-text">${post.body}</p>
        <a href="#" class="edit card-link" data-id="${post.id}">
        <i class="fa fa-pencil"></i>
        </a>

        <a href="#" class="delete card-link" data-id="${post.id}">
        <i class="fa fa-remove"></i>
        </a>
        </div>
        </div>
        `;
       });

       this.post.innerHTML = output;
    }

    showAlert(message, className){
        this.clearFlieds();

        // create the div
        const div = document.createElement('div');
        // Add the class name to the div
        div.className= className;
        // Add the text to the div
        div.appendChild(document.createTextNode(message));
        // get the parent
        const container = document.querySelector('.postContainer');
        // get the post
        const post = document.querySelector('#post');
        // insert the alert message
        container.insertBefore(div, post);

        // timeout
        setTimeout(() =>{
            this.ClearAlert();
        }, 3000);

    }

    ClearAlert(){

        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearFlieds(){
        this.titleInput.value = '';
        this.bodyInput.value ='';
    }

    fillForm(data){
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;

        // Call the Change State method
        this.changeFormState('edit');
    }

    // Clear the id input
    clearId(){
        this.idInput.value = '';
    }

    changeFormState(type){

        if(type === 'edit'){

            this.postSubmit.textContent= 'Update Post';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';

            // Create button
            const button = document.createElement('button');
            button.className ='post-cancel btn btn-light btn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));

            // Get the parent
            const card = document.querySelector('.card-form');
            // Get the element to insert before
            const elementbefore = document.querySelector('.form-end');
            // Insert the button 
            card.insertBefore(button, elementbefore);
        }
        else{
            this.postSubmit.textContent= 'Post it';
            this.postSubmit.className = 'post-submit btn btn- btn-primary block';

            // Remove the cancel button if it exist

            if(document.querySelector('.post-cancel')){
                document.querySelector('.post-cancel').remove();
            }

            // Clear the Id from the hidden fields
            this.clearId();
            // remove the text from the input fields
            this.clearFlieds();

        }
    }
}

export const ui = new UI();