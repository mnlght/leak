function createCountdown(start) {
    let count = start;

    return function() {
        return count--;
    };
}

let countdownFrom10 = createCountdown(10);