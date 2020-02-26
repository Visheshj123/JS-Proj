document.getElementById('loan-form').addEventListener('submit', function(e){
  console.log('Calculating...');
  let loanAmount = document.getElementById('amount');
  let interestAmount = document.getElementById('interest');
  let years = document.getElementById('Years');
  let monthlyPayment = document.getElementById('monthly-payment');
  let totalPayment = document.getElementById('total-payment');
  let totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(loanAmount.value);
  const calculatedInterest  = parseFloat(interestAmount.value) / 100 / 12;
  const calculatedPayment = parseFloat(years.value) * 12;

  //compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2); //number of decimals
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);

    //show results by undoing the style for display
    document.getElementById('results').style.display ='block';

  }else{
    console.log('calling error fucntion')
    showError('Please Check your numbers');
    document.getElementById('results').style.display ='none';
  }
  e.preventDefault();
});

function showError(err){
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(err));

  //insert into DOM so user can see newly created div
  const card = document.querySelector('.card');
  const header = document.querySelector('.heading');
  header.insertAdjacentElement('beforebegin', errorDiv);

  //Clear error after 3 seconds
  setTimeout(clearError, 3000); //after 3 seconds call this function
}

function clearError(){
  document.querySelector('.alert').remove();
}
