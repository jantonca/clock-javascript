import './style.css'

// Define a constant for the degrees per second for clock rotations
const DEGREES_PER_SECOND = 6;

// Get references to clock elements and containers
const clockAnalogue = document.querySelector("#clock-container-analogue");
const hourHand = document.querySelector('#hour-rotation');
const minuteHand = document.querySelector('#minute-rotation');
const secondHand = document.querySelector('#second-rotation');
const clockDigital = document.querySelector("#clock-container-digital");
const digitalSeparator = ":";

// Function to get the current time components [hour, minute, second]
function getCurrentTime() {
    const currentTime = new Date();
    return [
        currentTime.getHours(),
        currentTime.getMinutes(),
        currentTime.getSeconds()
    ];
}

// Rotate the clock hands based on given rotations
function rotateClockHands(rotations) {
    if (hourHand) {
        hourHand.style.transform = `rotate(${rotations.hour}deg)`;
    }
    if (minuteHand) {
        minuteHand.style.transform = `rotate(${rotations.minute}deg)`;
    }
    if (secondHand) {
        secondHand.style.transform = `rotate(${rotations.second}deg)`;
    }
}

// Update the digital clock's displayed time
function updateDigitalClock() {
    const digitalCurrentTime = getCurrentTime();
    const formattedTime = digitalCurrentTime
        .map(value => value.toString().padStart(2, '0'))
        .join(digitalSeparator);

    if (clockDigital) {
        clockDigital.textContent = formattedTime;
    }
}

// Update both the analog and digital clocks
function updateClocks() {
    const [currentHour, currentMinute, currentSecond] = getCurrentTime();

    const rotations = {
        hour: (currentHour % 12) * 30 + (currentMinute / 2),
        minute: currentMinute * DEGREES_PER_SECOND,
        second: currentSecond * DEGREES_PER_SECOND
    };

    // Update analog clock if present
    if (clockAnalogue) {
        rotateClockHands(rotations);
    }
    
    // Update digital clock
    updateDigitalClock();
}

// Set up an interval to update clocks every 1000ms (1 second)
setInterval(updateClocks, 1000);