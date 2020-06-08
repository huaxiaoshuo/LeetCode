/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for (let a = 0; a < nums.length - 1; a++) {
        for (let b = a + 1; b < nums.length; b++) {
            if (nums[a] > nums[b]) {
                let code = nums[a]
                nums[a] = nums[b]
                nums[b] = code
            }
        }
      
    }
    return nums
};
const nums = [2,0,2,1,1,0]
console.error(sortColors(nums))