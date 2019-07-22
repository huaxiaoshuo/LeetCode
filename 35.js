/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result = 0
    if (nums.indexOf(target) > - 1) {
        result = nums.indexOf(target)
    } else if (nums[0] > target) {
        result = 0
    } else if (nums[nums.length - 1] < target) {
        result = nums.length
    } else {
        for (let a = 0; a < nums.length - 1; a++) {
            if (target > nums[a] && target < nums[a + 1]) {
                result = a + 1
            }
        }
    }
    return result
};
