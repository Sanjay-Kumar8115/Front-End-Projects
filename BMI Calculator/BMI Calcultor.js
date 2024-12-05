function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
    if (weight > 0 && height > 0) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        
        let resultText = `Your BMI is ${bmi.toFixed(2)}. `;
        
       /* This part of the code is determining the BMI category based on the calculated BMI value.
       Here's how it works: */
        if (bmi < 18.5) {
            resultText += "You are underweight.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultText += "You have a normal weight.";
        } else if (bmi >= 25 && bmi < 29.9) {
            resultText += "You are overweight.";
        } else {
            resultText += "You are obese.";
        }
        
        document.getElementById('result').innerText = resultText;
    } else {
        document.getElementById('result').innerText = "Please enter valid weight and height.";
    }
}
