/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0
    let resultIndex = function (index, nums) {
        if (index === nums.length) return;
        if (nums.indexOf(nums[index]) !== nums.lastIndexOf(nums[index])) {
            resultIndex(index + 1, nums)
        } else {
            result = nums[index]
        }
    }
    resultIndex(0, nums)
    return result
};
