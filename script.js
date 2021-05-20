// let celsius = prompt("20")
// let fahrenheit = (celsius * 1.8) + 32
// console.log("celsius")

function convertFahrToCelsius(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var rounded = fToCel.toFixed(4);
    var message = fTemp + '\xB0F is ' + rounded + '\xB0C';
    console.log(message);

    if (convertFahrToCelsius = NaN) {
        return "this is not a valid number";
        // takeClass();
    }
    else {
        return (message);
    }
}
convertFahrToCelsius(45);