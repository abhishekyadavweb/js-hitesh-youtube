const Year = 2005
if ((Year % 4 === 0)  && !(Year % 100 === 0)) {
    console.log("Year is leap year");
} else if ((Year % 100 === 0) && (Year % 400 === 0)) {
    console.log("Year is leap year");
} else console.log("Year is not a leap year");
