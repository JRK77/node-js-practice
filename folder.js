let week = [
    "Could not be Better",
    "Looking good!",
    "Look for a lift-me-up",
    "Push away any negativity and embrace positive thinking!",
];

const weeklyForecast = () => {
    let randomForecast = Math.floor(Math.random() * week.length - 1);

    return `The beginning of the week: ${week[randomForecast]}
    The middle of the week: ${week[randomForecast]}
    The end of the week: ${week[randomForecast]}`;
};

console.log(weeklyForecast);