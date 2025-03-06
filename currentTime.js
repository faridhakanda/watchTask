function currentTime() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    // current time calculation
    let secondAngles = seconds * (360 / 60);
    let minuteAngles = minutes * (360 / 60) + (seconds / 60) * (360 / 60);
    let hourAngles = hours * (360 / 12) + (minutes / 60) * (360 / 12);

    // update current time clock
    document.querySelector(".rotateSecond").style.transform = `rotate(${secondAngles}deg)`;
    document.querySelector(".rotateMinute").style.transform = `rotate(${minuteAngles}deg)`;
    document.querySelector(".rotateHour").style.transform = `rotate(${hourAngles}deg)`;
}
setInterval(currentTime, 1000);