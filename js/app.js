document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("button");

    button.addEventListener("click", function (e) {
        e.preventDefault();
        var sWeight = document.getElementById("weight").value;
        var sHeight = document.getElementById("height").value;
        var weight = parseInt(sWeight);
        var height = parseInt(sHeight);
        var BMI = weight / ((height * height) / 10000);

        var bodyType = "";

        if (BMI > 30) {
            bodyType = "obese";
        } else if (BMI > 25) {
            bodyType = "overweight";
        } else if (BMI > 20) {
            bodyType = 'healthy';
        } else if (BMI < 20) {
            bodyType = 'underweight';
        }
        var BMIRounded = Math.round(BMI * 100) / 100;

        var text = "Your BMI is equal to " + BMIRounded + " and it means you are " + bodyType;

        if (isNaN(BMI)) {
            document.querySelector(".result").classList.remove("hidden");
            document.querySelector(".result--text").innerText = "Error! Submitted values are not accepted. Please check if you put numbers in inputs above.";
            document.querySelector(".result--text").scrollIntoView();
        } else {
            document.querySelector(".result").classList.remove("hidden");
            document.querySelector(".result--text").innerText = text;
            document.querySelector(".result--text").scrollIntoView();
        }

    });

});