/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0) return 0
  if (timeSeries.length === 1) return duration
  let result = 0,
    index = 0;
    while (index < timeSeries.length - 1) {
        if (timeSeries[index] + duration < timeSeries[index + 1]) {
            result += duration
        } else {
            result += (timeSeries[index + 1] - timeSeries[index])
        }
        index++
    }
  return result + duration
};
const timeSeries = [1, 6],
  duration = 3;
console.error(findPoisonedDuration(timeSeries, duration));
