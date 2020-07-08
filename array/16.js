/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let minResult = Number.MAX_SAFE_INTEGER
  for (let a = 0; a < nums.length - 1; a++) {
    for (let b = nums.length - 1; b > 0; b--) {
      for (let c = a + 1; c < b; c++) {
          let item = nums[a] + nums[b] + nums[c]
          console.error(Math.abs(target - item))
          if (Math.abs(target - item) < minResult) minResult = item  
      }
    }
  }
  return minResult === Number.MAX_SAFE_INTEGER ? 0 : minResult
};
const nums = [-1, 2, 1, -4],
  target = 1;
console.error(threeSumClosest(nums, target));
