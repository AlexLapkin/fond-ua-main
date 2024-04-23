// import './css/styles.css';

const paymentForm = document.querySelector('.payment-form');

// Function-listener payment form
async function onSubmit(event) {
  let amount = document.getElementsByName('amount')[0].value;

  fetch('/makePayment', {
    method: 'POST',
    body: JSON.stringify({ amount: amount }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}

paymentForm.addEventListener('submit', onSubmit);
