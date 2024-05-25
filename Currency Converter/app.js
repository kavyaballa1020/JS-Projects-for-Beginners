function convertCurrency() {
    const amountInput = document.getElementById("amountInput").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (amountInput === "" || isNaN(amountInput) || amountInput <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
          const exchangeRate = data.rates[toCurrency];
          const result = amountInput * exchangeRate;
          document.getElementById("result").value = result.toFixed(2);
      })
      .catch(err => {
          console.error("Error fetching exchange rate:", err);
      });
  }