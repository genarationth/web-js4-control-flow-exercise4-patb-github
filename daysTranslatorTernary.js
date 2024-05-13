const dayNumber = parseInt(process.argv[2]);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

isNaN(dayNumber) ? console.log("Input must be a number")
: (dayNumber < 0 || dayNumber > 6) ? console.log("Invalid day number")
: console.log(days[dayNumber]);
