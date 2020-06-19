/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length === 1) return 0
    if (nums.length === 2) {
        return nums[0] > nums[1] ? 0 : 1
    }
    for (let a = 1; a < nums.length; a++) {
        if ((a === nums.length -1 && nums[a] > nums[a - 1]) || (nums[a] > nums[a - 1] && nums[a] > nums[a + 1])) {
            return a
        }
    }
    return 0
};
console.error(findPeakElement([1,2, 3]))