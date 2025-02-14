let currentInput = "";

function appendValue(value) {
    if (value === '.' && currentInput.includes('.')) return; 
    currentInput += value;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (e) {
        currentInput = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById("result").innerText = currentInput || "0";
}
