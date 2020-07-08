/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  if (!nums.length) return 0;
  let left = 0,
    right = 0,
    sum = 0,
    result = nums.length + 1;
  while (right < nums.length || sum > s) {
    if (sum < s && right < nums.length) {
      sum += nums[right];
      right += 1
    } 
    while (sum >= s) {
      console.error(left, right)
      result = Math.min(result, right - left);
      sum -= nums[left];
      left += 1;
    }
  }
  return result === nums.length + 1 ? 0 : result;
};
const s = 7,
  nums = [2, 3, 1, 2, 4, 3];

console.error(minSubArrayLen(s, nums));
