/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums = nums.sort((a, b) => { return b - a})
    return nums[k - 1]
};
const nums = [3,2,1,5,6,4], k = 2
console.error(findKthLargest(nums, k))