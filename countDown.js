// hourCount, minCount, SecCount

let deadLine = new Date("Mar 7, 2025 23:55:50").getTime();
let x = setInterval(function() {
    let nowTime = new Date().getTime();
    let currentTime = deadLine - nowTime;

    //let days = Math.floor(currentTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((currentTime % (1000 * 60)) / 1000);
    document.getElementById("hourCount").innerHTML = "-" + hours;
    document.getElementById("minCount").innerHTML = "-" + minutes;
    document.getElementById("secCount").innerHTML = "-" + seconds;
    if (currentTime < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Expired!";
    }
}, 1000);