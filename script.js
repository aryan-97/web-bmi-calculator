function calculateBmi(weightInKg, heightInMeter) {
    console.log(`calculateBmi(${weightInKg}, ${heightInMeter});`);
    let bmi = weightInKg / (heightInMeter * heightInMeter);
    console.log(`returned ${bmi.toFixed(1)}`);
    return bmi.toFixed(1);
}

function convertHeight(height, heightUnit) {
    let heightInMeter = 0;
    if (heightUnit === "m") {
        heightInMeter = height;
        console.log(`height converted from m to m.`);
    } else if (heightUnit === "cm") {
        heightInMeter = height / 100.0;
        console.log(`height converted form cm to m`);
    } else if (heightUnit === "ft") {
        heightInMeter = height / 3.28;
        console.log(`height converted form ft to m`);
    } else if (heightUnit === "in") {
        heightInMeter = height / 39.37;
        console.log(`height converted form in to m`);
    } else {
        alert("Wrong height unit");
    }
    console.log(`converted height: ${heightInMeter}`);
    return heightInMeter;
}

function convertWeight(weight, weightUnit) {
    let weightInKg = 0;
    if (weightUnit == "kg") {
        console.log(`weight converted from kg to kg.`);
        weightInKg = weight;
    } else if (weightUnit == "gm") {
        console.log(`weight converted from gm to kg.`);
        weightInKg = weight / 1000.0;
    } else if (weightUnit == "lb") {
        console.log(`weight converted from lb to kg.`);
        weightInKg = weight /  2.205;
    } else {
        alert("Wrong weight unit")
    }
    console.log(`converted weight: ${weightInKg}`);
    return weightInKg;
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
    console.log(`Input weight: ${weight}`);
    console.log(`Input height: ${height}`);

    if(height == 0) {
        console.log(`height was zero.`);
        alert("Height cannot be zero.");
        return;
    }

    if(weight == 0) {
        console.log(`weight was zero.`);
        alert("Weight cannot be zero.");
        return;
    }

    let heightUnit = document.getElementById("heightDropdown").innerText;
    let weightUnit = document.getElementById("weightDropdown").innerText;
    console.log(`height unit: ${heightUnit}`);
    console.log(`weight unit: ${weightUnit}`);

    let heightInMeter = convertHeight(height, heightUnit.toString().valueOf());
    let weightInKg = convertWeight(weight, weightUnit.toString().valueOf());
    console.log(`height in m: ${heightInMeter}`);
    console.log(`weight in kg: ${weightInKg}`);

    let bmi = calculateBmi(weightInKg, heightInMeter);
    console.log(`bmi: ${bmi}`);

    let weightGroup = getGroup(bmi);
    console.log(`weight group: ${weightGroup}`);

    let result = `${bmi} (${weightGroup})`;
    console.log(`result: ${result}`);
    document.getElementById("resultText").innerText = result;
}