document.addEventListener('DOMContentLoaded', () => {
  const amount = document.getElementById('amount');
  const fromCurrency = document.getElementById('fromCurrency');
  const toCurrency = document.getElementById('toCurrency');
  const convertButton = document.getElementById('convert');
  const result = document.getElementById('result');

  const apiURL = 'https://api.exchangerate-api.com/v4/latest/USD';

  fetch(apiURL)
      .then(response => response.json())
      .then(data => {
          const currencies = Object.keys(data.rates);
          currencies.forEach(currency => {
              const optionFrom = document.createElement('option');
              optionFrom.value = currency;
              optionFrom.textContent = currency;
              fromCurrency.appendChild(optionFrom);

              const optionTo = document.createElement('option');
              optionTo.value = currency;
              optionTo.textContent = currency;
              toCurrency.appendChild(optionTo);
          });
      });

  convertButton.addEventListener('click', () => {
      const fromValue = fromCurrency.value;
      const toValue = toCurrency.value;
      const amountValue = amount.value;

      if (fromValue && toValue && amountValue) {
          fetch(`${apiURL}`)
              .then(response => response.json())
              .then(data => {
                  const rate = data.rates[toValue] / data.rates[fromValue];
                  const convertedAmount = (amountValue * rate).toFixed(2);
                  result.textContent = `${ amountValue} ${fromValue} = ${convertedAmount} ${toValue}`;
              });
      } else {
          result.textContent = 'Please fill in all fields.';
      }
  });
});