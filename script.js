function calculateBmi(weightInKg, heightInMeter) {
    let bmi = weightInKg / (heightInMeter * heightInMeter);
    return bmi.toFixed(1);
}

function convertHeight(height, heightMetric) {
    let heightInMeter;
    if (heightMetric == "cm") {
        heightInMeter = height / 100.0;
    }
    return heightInMeter;
}

function getGroup(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function calculate(){
    let height = document.getElementById("heightInputField").value;
    let weight = document.getElementById("weightInputField").value;

    if(height == 0) {
        alert("Height cannot be zero.");
        return;
    }

    if(weight == 0) {
        alert("Weight cannot be zero.");
        return;
    }
    
    let bmi = calculateBmi(weight, height/100.0);
    let weightGroup = getGroup(bmi);

    let result = bmi + " (" + weightGroup + ")";
    document.getElementById("resultText").innerText = result;
}