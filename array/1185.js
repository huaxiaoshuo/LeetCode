/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[new Date(year, month - 1, day).getDay()]
};
const day = 15, month = 8, year = 1993
console.error(dayOfTheWeek(day, month, year))