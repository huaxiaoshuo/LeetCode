/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let a = 0;
    for (let b = 0; b < nums.length; b++) {

    }
    for (let b = 1; b < nums.length; b++) {
        if (nums[a] !== nums[b]) {
            a++
            nums[a] = nums[b]
        }
    }
    return a + 1
};
