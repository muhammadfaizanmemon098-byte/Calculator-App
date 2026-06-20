function appendToDisplay(value) {
    let display = document.getElementById('display');
    let lastChar = display.value.slice(-1);
    let operators = ['+', '-', '*', '/', '%'];

    if (display.value === '' && operators.includes(value)) {
        return;
    }

    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }

    if (value === '.') {
        let currentNumber = display.value.split(/[\+\-\*\/%]/).pop();

        if (currentNumber.includes('.')) {
            return;
        }
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display');
    let expression = display.value;

    if (expression === '') {
        return;
    }

    let lastChar = expression.slice(-1);

    if (['+', '-', '*', '/', '%', '.'].includes(lastChar)) {
        return;
    }

    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '%', '.'].includes(key)) {
        event.preventDefault();
        appendToDisplay(key);
    }

    if (key === 'Enter') {
        event.preventDefault();
        calculate();
    }

    if (key === 'Backspace') {
        event.preventDefault();
        backspace();
    }

    if (key === 'Escape') {
        event.preventDefault();
        clearDisplay();
    }
});