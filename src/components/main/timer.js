let interval;
let currentInterval = 0;
let dailyTimer = [0, 1];

const numberOfDay = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    console.log('Day of year: ' + day);
    return day;
};

const startTimer = (toggle) => {

    dailyTimer[0] = Number.parseInt(numberOfDay());
    console.log('today is ', dailyTimer[0]);

    if (!toggle) {
        console.log('start timer');
        interval = setInterval(() => {
            dailyTimer[1] = currentInterval++;
        }, 1000);
    } else {
        console.log('stop timer');
        clearInterval(interval);
        console.log('stop timer', dailyTimer);
    }
};

export {startTimer};
