function calculateEMI() {
    // Getting input values
    const principal = document.getElementById('principal').value;
    const annualRate = document.getElementById('rate').value;
    const tenure = document.getElementById('tenure').value;

    // Calculating the monthly interest rate
    const monthlyRate = annualRate / 12 / 100;

    // Calculating the number of monthly installments
    const n = tenure * 12;

    // EMI formula
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);

    // Displaying the result
    document.getElementById('result').innerHTML = `Your EMI is: ₹${emi.toFixed(2)}`;
}
