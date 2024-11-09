const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

window.addEventListener("load", () => celsius.focus());

celsius.addEventListener("input", () => {
    fahrenheit.value = (parseFloat(celsius.value * 9) / 5 + 32).toFixed(2);
    kelvin.value = (parseFloat(celsius.value) + 273.15).toFixed(2);

    if (!celsius.value) {
        fahrenheit.value = "";
        kelvin.value = "";
    }
});

fahrenheit.addEventListener("input", () => {
    celsius.value = (parseFloat(5/9*(fahrenheit.value - 32))).toFixed(2);
    kelvin.value = (parseFloat(5/9*(fahrenheit.value - 32)) + 273.15).toFixed(2);

    if (!fahrenheit.value) {
        celsius.value = "";t
        kelvin.value = "";
    }
});

kelvin.addEventListener("input", () => {
    celsius.value = (parseFloat(kelvin.value)-273.15).toFixed(2);
    fahrenheit.value = (parseFloat(9/5*(kelvin.value - 273.15)+32)).toFixed(2);

    if (!kelvin.value) {
        fahrenheit.value = "";
        celsius.value = "";
    }
});
