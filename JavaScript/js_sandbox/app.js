
const PageState = function(){

    let currentState = new homestate(this);

    this.init = function(){
        this.change(new homestate);
    }

    this.change = function(state){
        currentState = state;
    }

};

const homestate = function(page){

    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
    `;
};


const aboutstate = function(page){

    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = '<p>This is the about page</p>'
};

const contactstate = function(page){

    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = '<p>This is the contact page</p>'
};

// initialize the pages
const page = new PageState();

// initialize the home page
page.init();


// UI vars

const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');




// Home state

home.addEventListener('click', (e) =>{
    page.change(new homestate);

    e.preventDefault();
})

// about state

about.addEventListener('click', (e) =>{
    page.change(new aboutstate);

    e.preventDefault();
})

// contact state

contact.addEventListener('click', (e) =>{
    page.change(new contactstate);

    e.preventDefault();
})