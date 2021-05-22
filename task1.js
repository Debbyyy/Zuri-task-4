function convertFahrToCelsius(fahrenheit) {
    var checkType = typeof(fahrenheit)
    
    if (!Number.isInteger(fahrenheit)) {
        return console.log(`${fahrenheit} is not a number but ${checkType}`);
    }

    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var rounded = fToCel.toFixed(4);
    var message = fTemp + '\xB0F is ' + rounded + '\xB0C';
    console.log(message);
}
convertFahrToCelsius(45);