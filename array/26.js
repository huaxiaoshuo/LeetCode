/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 0,
    right = left + 1;
  if (nums <= 1) return nums.length;
  while (left < nums.length) {
    if (nums[left] === nums[right]) {
      nums.splice(right, 1);
    } else {
      left++;
      right = left + 1;
    }
  }
  return nums.length;
};
const nums = [1, 1, 2];
console.error(removeDuplicates(nums));
