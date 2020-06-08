/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = [],
    leftProduct = 1,
    rightProduct = 1,
    redures = (arr = []) => {
      if (!arr.length) return 1;
      return arr.reduce((a, b) => {
        return a * b;
      });
    };
  for (let a = 0; a < nums.length; a++) {
    leftProduct = leftProduct * (nums[a - 1] === undefined ? 1 : nums[a - 1]);
    rightProduct = redures(nums.slice(a + 1, nums.length));
    result.push(leftProduct * rightProduct);
  }
  return result;
};
console.error(productExceptSelf([0, 0]));
