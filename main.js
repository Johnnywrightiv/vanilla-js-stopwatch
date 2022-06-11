// runs script on window load
window.onload = function () {
    
    // define variables, get elements from HTML
    var minutes = 00;
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');
    var appendMinutes = document.getElementById('minutes');
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var interval; 

    // Start Button function expression
    buttonStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    // Stop Button function expression
    buttonStop.onclick = function () {
        clearInterval(interval);
    }

    // Reset Button function expression
    buttonReset.onclick = function () {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }
    
    // Start Timer function declaration -- LHS engine only, runs prior to RHS evaluation
    function startTimer () {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log('seconds');
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds >= 60) {
            console.log('minutes')
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0
        }
    }
}