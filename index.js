const milisec = 1,
    second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour;

const heading = document.querySelector("h1");

const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const msElement = document.querySelector(".miliseconds");

const timerFunction = () => {
    setInterval(() => {
        const timer = new Date("07/17/2023 14:35:00"); // give it in miliseconds

        const today = new Date().getTime();

        const difference = timer - today;

        const leftDay = Math.floor(difference / day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftMinute = Math.floor((difference % hour) / minute);
        const leftSeconds = Math.floor((difference % minute) / second);
        const leftMiliSeconds = Math.floor((difference % second) / milisec);

        daysElement.innerText = leftDay;
        hoursElement.innerText = leftHour;
        minutesElement.innerText = leftMinute;
        secondsElement.innerText = leftSeconds;
        msElement.innerText = leftMiliSeconds;

        // console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSeconds}`)

        // console.log(timer);
        // console.log(Math.floor(difference / day));
        // console.log(Math.floor((difference % day) / hour));
        // console.log(Math.floor((difference % hour) / minute));
        // console.log(Math.floor((difference % minute) / second));
    }, 1);
};

timerFunction();
