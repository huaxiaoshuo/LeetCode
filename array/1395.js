/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  let result = 0,
    length = rating.length;
  for (let a = 0; a < length - 2; a++) {
    for (let b = a + 1; b < length - 1; b++) {
      for (let c = b + 1; c < length; c++) {
          if ((rating[a] < rating[b] && rating[b] < rating[c]) || (rating[a] > rating[b] && rating[b] > rating[c])) {
            result += 1
          }
      }
    }
  }
  return result
};
let rating = [1,2,3,4];
console.error(numTeams(rating));
