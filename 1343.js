/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
// var numOfSubarrays = function(arr, k, threshold) {
//     let result = 0,
//     getSum = arr => arr.reduce((a, b) => a + b);
//     for (let a = 0; a <= arr.length - k; a++) {
//         if (getSum(arr.slice(a, a + k)) / k >= threshold) result += 1
//     }
//     return result
// };
var numOfSubarrays = function (arr, k, threshold) {
  let result = 0,
    sum = 0;
  for (let a = 0; a < arr.length; a++) {
    if (a < k - 1) {
      sum += arr[a];
    } else {
      sum += arr[a];
      if (a >= k) sum -= arr[a - k];
      if (sum / k >= threshold) result += 1;
    }
  }
  return result;
};
const arr = [4,4,4,4], k = 4, threshold = 1;
console.error(numOfSubarrays(arr, k, threshold));
