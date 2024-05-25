document.querySelector("#btn").addEventListener("click", () => {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for weight and height.");
        return;
    }

    let bmi = weight / Math.pow(height / 100, 2);
    document.getElementById("bmi").innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;

    let bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = "UNDERWEIGHT";
    } else if (bmi < 24.9) {
        bmiCategory = "NORMAL";
    } else {
        bmiCategory = "OVERWEIGHT";
    }
    document.getElementById("bmi1").innerHTML = `${bmiCategory}`;
});