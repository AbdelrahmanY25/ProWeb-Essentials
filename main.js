let daysSection = document.getElementById("days");
let hoursSection = document.getElementById("hours");
let minutesSection = document.getElementById("minutes");
let secondsSection = document.getElementById("seconds");

let stats = document.querySelector("#stats");
let nums = document.querySelectorAll("#stats .box .number");
let started = false;

let skills = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".our-skills .skill .the-progress span")

function countNumbers(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.innerHTML++;
        if (el.innerHTML === goal) {
            clearInterval(count);
        }; 
    }, 2000 / goal);
}

window.onscroll = () => {
    if (window.scrollY >= skills.offsetTop - 100) {
        progressSpans.forEach((s) => {
            s.style.width = s.dataset.width;    
        });
    };

    if (window.scrollY >= stats.offsetTop - 100) {
        if (!started) {
            nums.forEach((el) => countNumbers(el));
        };
        started = true;
    };
};

let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime()

    // Diff Between End Of Year And Now
    let dateDiff = countDownDate - dateNow;

    // Get Time Unites
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60) / (1000 * 60)));
    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);


    daysSection.innerHTML = days < 100 && days > 10 ? `0${days}` : days < 10 ? `00${days}` : days;
    hoursSection.innerHTML = hours < 10 ? `0${hours}` : hours;
    minutesSection.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsSection.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) clearInterval(counter);
}, 1000);



