'use strict';

let minutesTotal = 0;
let minutesCompleted = 0;
let timeLeft = 0;
let dailyAmountNeeded = 0;
const studySpeed = 2;
const daysLeft = 3;

// total
const sectionsDuration = document.querySelectorAll('[data-purpose="section-duration"] > span:first-child');
sectionsDuration.forEach(section => {
    const sectionDuration = section.textContent.split('|')[1].trim();
    if (sectionDuration.indexOf(' ') !== -1) {
        const [sectionHours, sectionMinutes] = sectionDuration.split(' ');
        minutesTotal += parseInt(sectionHours) * 60 + parseInt(sectionMinutes);
    } else {
        minutesTotal += parseInt(sectionDuration);
    }
});

// completed
const lectures = document.querySelectorAll('.item-link.ud-custom-focus-visible');
lectures.forEach(lecture => {
    const lectureCompleted = lecture.querySelector('.ud-sr-only.ud-real-toggle-input').checked;
    if (lectureCompleted) {
        const lectureTimestamp = lecture.querySelector('.ud-text-xs.curriculum-item-link--metadata--XK804 span');
        if (lectureTimestamp) {
            minutesCompleted += parseInt(lectureTimestamp.textContent);
        }
    }
});

// how much time to spend on education each day
timeLeft = Math.ceil((minutesTotal - minutesCompleted) / studySpeed);
dailyAmountNeeded = Math.ceil(timeLeft / daysLeft);
if (dailyAmountNeeded > 60) {
    dailyAmountNeeded = Math.floor(dailyAmountNeeded / 60) + 'h ' + dailyAmountNeeded % 60;
}
dailyAmountNeeded += 'm';
if (timeLeft > 60) {
    timeLeft = Math.floor(timeLeft / 60) + 'h ' + timeLeft % 60;
}
timeLeft += 'm';

if (minutesTotal > 60) {
    minutesTotal = Math.floor(minutesTotal / 60) + 'h ' + minutesTotal % 60;
}
minutesTotal += 'm';

if (minutesCompleted > 60) {
    minutesCompleted = Math.floor(minutesCompleted / 60) + 'h ' + minutesCompleted % 60;
}
minutesCompleted += 'm';

console.log('total: ' + minutesTotal);
console.log('completed: ' + minutesCompleted);
console.log('left: ' + timeLeft);
console.log('spend each day: ' + dailyAmountNeeded);