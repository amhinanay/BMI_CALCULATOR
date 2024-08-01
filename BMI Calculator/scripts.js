document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);

    const githubLink = document.querySelector("#github-link");
    githubLink.addEventListener("click", openGitHub);
});

function calculateBMI() {
    const unitSystem = document.querySelector("#unit-system").value;
    const heightInput = document.querySelector("#height");
    const weightInput = document.querySelector("#weight");
    const result = document.querySelector("#result");

    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    if (unitSystem === "us") {
        height = height * 2.54;
        weight = weight * 0.453592;
    }

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please enter a valid height.";
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please enter a valid weight.";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
        result.innerHTML = `You are underweight: <span>${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
        result.innerHTML = `You have a normal weight: <span>${bmi}</span>`;
    } else {
        result.innerHTML = `You are overweight: <span>${bmi}</span>`;
    }
}

function openGitHub(event) {
    event.preventDefault();
    window.open(event.target.href, '_blank');
}
