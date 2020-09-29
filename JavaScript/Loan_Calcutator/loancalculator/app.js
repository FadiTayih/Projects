
// Listing to the form submit event

document.getElementById('loan-form').addEventListener('submit', function(e){

    // Hide the result
    document.getElementById('results').style.display = 'none';

    // Show Resutl
    document.getElementById('loading').style.display = 'block';
    
    // Call the calculate method after 2s
    setTimeout(calculate, 2000);

    e.preventDefault();
});

function calculate(){

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthly_value = document.getElementById('monthly-payment');
    const total_payment = document.getElementById('total-payment');
    const total_interest = document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12 ;
    const calculatedPayment = parseFloat(years.value) * 12;

    // find the monthly payment
    const x = Math.pow(calculatedInterest + 1, calculatedPayment);
    const monthly = (principle * x * calculatedInterest) / (x-1);

    if(isFinite(monthly)){

        monthly_value.value = monthly.toFixed(2);
        total_payment.value = (monthly * calculatedPayment).toFixed(2);
        total_interest.value = ((monthly * calculatedPayment) - principle).toFixed(2);

        // Show the results
        document.getElementById('results').style.display = 'block';

        // Hide the Loading img
        document.getElementById('loading').style.display = 'none';


    }
    else{

        showError('Please check your numbers')
    }

  
  
 
}


function showError(error){

    
    // Hide the results
    document.getElementById('results').style.display = 'none';

    // Hide the Loading img
    document.getElementById('loading').style.display = 'none';

    // create a div
    const div = document.createElement('div');

    // Add class name
    div.className = 'alert alert-danger';

    // get the Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    div.appendChild(document.createTextNode(error));

    // Insert the error above the heading

    card.insertBefore(div, heading);

    // Clear the error after 3 seconds
    setTimeout(errortime, 3000);
}

function errortime(){
    document.querySelector('.alert').remove();
}

