const display = document.getElementById("display");
let res = false;

function appendToDisplay(input) {
    if (res && /[0-9]/.test(input)) {
        clearDisplay();
        res = false;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
            display.value = eval(display.value);
            res = true;
        
    } catch (error) {
        display.value = "Error";
    }
}