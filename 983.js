/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  let day = 0,
    week = 0,
    weekStart = 0,
    mouth = 0,
    mouthStart = 0;
  for (let a = 0; a < days.length; a++) {
    const element = days[a];
    const nextElement = days[a + 1] || 0
    day += 1;
    if (!weekStart) weekStart = element;
    if (!mouthStart)  mouthStart = element;
    if ((day * costs[0]) >= costs[1] && element - weekStart < 7 && nextElement > 7) {
      week += 1;
      day = 0;
      weekStart = 0
    }
    if ((day * costs[0] + week * costs[1]) >= costs[2] && element - mouthStart < 30 && nextElement > 30) {
      mouth += 1;
      week = 0;
      day = 0;
      mouthStart = 0
      weekStart = 0
    }
  }
  return day * costs[0] + week * costs[1] + mouth * costs[2]
};
const days = [1,4,6,9,10,11,12,13,14,15,16,17,18,20,21,22,23,27,28],
  costs = [3,13,45];
console.error(mincostTickets(days, costs));
