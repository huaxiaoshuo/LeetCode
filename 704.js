/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let length = nums.length - 1,l = 0;
    while (l <= length) {
        let m = Math.floor((length + l ) / 2)
        if (nums[m] === target) return m
        if (nums[m] < target) {
            l = m + 1
        } else {
            length = m - 1
        }
    }
    return -1
};
