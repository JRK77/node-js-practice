let week = [
    "Could not be Better",
    "Looking good!",
    "Look for a lift-me-up",
    "Push away any negativity and embrace positive thinking!",
];

const weeklyForecast = () => {
    return `The beginning of the week: ${week[Math.floor(Math.random() * (week.length - 1))]}
    The middle of the week: ${week[Math.floor(Math.random() * (week.length - 1))]}
    The end of the week: ${week[Math.floor(Math.random() * (week.length - 1))]}`;
};

console.log(weeklyForecast());