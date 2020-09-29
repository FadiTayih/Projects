// Access the Dom

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);



function validateName(){

    const name = document.getElementById('name');
    const req = /^[a-zA-Z]{2,10}$/;

    if(!req.test(name.value)){
     
        name.classList.add('is-invalid');
    }
    else{
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
    }
}

function validateZip(){

    const zip = document.getElementById('zipcode');
    const req = /^[0-9]{5}(-[0-9]{4})?$/;

    if(!req.test(zip.value)){
     
        zip.classList.add('is-invalid');
    }
    else{
        zip.classList.remove('is-invalid');
        zip.classList.add('is-valid');
    }
}


function validateEmail(){

    const email = document.getElementById('email');
    const req = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!req.test(email.value)){
     
        email.classList.add('is-invalid');
    }
    else{
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
}


function validatePhone(){

    const phone = document.getElementById('phone');
    const req = /^\(?\d{3}\)?[._ ]?\d{3}[._ ]?\d{4}$/;

    if(!req.test(phone.value)){
     
        phone.classList.add('is-invalid');
    }
    else{
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
    }
}
