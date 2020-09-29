import {http} from './easyhttp';

import {ui} from './ui';

// get the post on Dom load
document.addEventListener('DOMContentLoaded', getpost);

// Listen to add post 
document.querySelector('.post-submit').addEventListener('click',
submitPost);

// Listen to the delete post
document.querySelector('#post').addEventListener('click', delelepost);

// Listen to edit
document.querySelector('#post').addEventListener('click', enableEdit);

// Listen to cancel
document.querySelector('.card-form').addEventListener('click', clearCancel);

function getpost(){
    http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

function submitPost(){

    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const id = document.querySelector('#id').value;

    const data= {
        title,
        body
    }
    // validate the input fields
    if(title ==='' || body ===''){
        ui.showAlert('Please Fill the Fields', 'alert alert-danger');
    }
    else{


        // Create the post, since the hidden id field is empty
      if(id ===''){
    
        http.post('http://localhost:3000/posts', data)
        .then(data => {
            ui.showAlert('Post Added', 'alert alert-success');
            ui.clearFlieds();
            getpost();
        })
        .catch(err => console.log(err))
      }
      else{
    
          // Update the post
          http.put(`http://localhost:3000/posts/${id}`, data)
          .then(data => {
              ui.showAlert('Post Updated', 'alert alert-success');
              ui.changeFormState('add');
              getpost();
          })
        }
    }

    
    
}


// delete post 
function delelepost(e){

if(e.target.parentElement.classList.contains('delete')){

    const id = e.target.parentElement.dataset.id;

    if(confirm('Are you sure?')){
        http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
            ui.showAlert('Post Removed', 'alert alert-success');
            getpost();
        })
        .catch(err => console.log(err));
    }
}

    e.preventDefault();
}

// Edit function

function enableEdit(e){

    if(e.target.parentElement.classList.contains('edit')){
        
        const id = e.target.parentElement.dataset.id;
        const title =e.target.parentElement.previousElementSibling.
        previousElementSibling.textContent;
        const body = e.target.parentElement.previousElementSibling.textContent;


        const data = {
            id,
            title,
            body
        }

        // Fill the form with the current post
        ui.fillForm(data);
    }

    e.preventDefault();
}

// Clear the canel button

function clearCancel(e){

    if(e.target.classList.contains('post-cancel')){
        ui.changeFormState('add');
    }

    e.preventDefault();
}