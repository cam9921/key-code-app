const keyCodeDisplay = document.getElementById('keyCodeDisplay');
const keyValueDisplay = document.getElementById('keyValueDisplay')

window.addEventListener('keydown', updateDisplay)


function updateDisplay(e) {
    keyCodeDisplay.innerHTML = e.keyCode;
    keyValueDisplay.innerHTML = e.key;
} 