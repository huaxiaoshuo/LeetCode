/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    let length = nums.length
    let returnNum = function (index) {
        if (index === k) return;
        nums.unshift(nums[nums.length - 1])
        nums.length = length
        returnNum(index + 1)
    }
    returnNum(0)
    return nums
};
