// The time should be shown in the given format of hh:mm:ss.
// All the single-digit numbers should be prefixed with a zero.
// If the current time is such that it includes 5 seconds, 
// then the value should be shown as 05.
// The updated time is displayed after each second until 3 seconds.
// This means that the output must display the currentTime, time after
// adding 1 second to the current time and time after adding 2 seconds to the current time.

/**
 * Function to start the timer and to print the value of 
 * the current time in the format hh:mm:ss
 */
const startTimer = () => {
    const now = new Date();
    const h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    m = prefixWithZero(m);
    s = prefixWithZero(s);
    console.log(h + ":" + m + ":" + s);
}

/**
 * Function to print 0 in front of the numbers 
 * which are of single digit (0 - 9)
 * @param {*} i minutes or seconds
 */
const prefixWithZero = (i) => {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

for (let i=0; i<3; i++) {
	setTimeout(startTimer, i*1000);
}