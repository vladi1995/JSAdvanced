function attachEventsListeners() {
    let buttonElement = document.getElementById('convert');
    let conversionObj = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254,
    };

    const convert = function(e) {
        let inputValue = e.target.parentNode.querySelector('input[type="text"]').value;
        let valueToConvert = e.target.parentNode.querySelector('select');
        let checkedOption = valueToConvert.options[valueToConvert.selectedIndex].value;
        
        let secondDivElement = e.target.parentNode.parentNode.querySelector('div:last-of-type');
        let outputInput = secondDivElement.querySelector('input[type="text"]');
        let valueToConvertOutput = secondDivElement.querySelector('select');
        let checkedOptionOutput = valueToConvertOutput.options[valueToConvertOutput.selectedIndex].value;

        //Convert to m
        let convertedToMeter = Number(inputValue)*conversionObj[checkedOption];
        //Convert to desire output
        let convertedToDesiredOutput = convertedToMeter / conversionObj[checkedOptionOutput];
        outputInput.value = convertedToDesiredOutput;
    }

    buttonElement.addEventListener('click', convert);
}