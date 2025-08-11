let date = new Date();
//console.log(date); // Current date and time

//console.log(date.getFullYear()); // Current year

//console.log(date.getMonth()); // Current month (0-11, where 0 is January)

//console.log(date.getDate()); // Current day of the month (1-31)

console.log(date.toDateString());// Converts the date to a human-readable string
console.log(date.toTimeString());// Converts the time to a human-readable string

console.log(date.toISOString()); // Converts the date to ISO format
console.log(date.toLocaleDateString()); // Converts the date to a locale-specific format
console.log(date.toLocaleTimeString()); // Converts the time to a locale-specific format


let myBirthday = new Date("2003-12-28");
console.log(myBirthday.toLocaleDateString()); // Converts the date to a locale-specific format

// Date objects in JavaScript represent a single moment in time
// They can be created using the Date constructor or by parsing date strings
// The Date object provides methods for getting and setting various components of a date

