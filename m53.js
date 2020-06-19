/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for (let a = 0; a < nums.length; a++) {
        if (a !== nums[a]) {
            return a
        }
    }
    return nums[nums.length - 1] + 1
};
console.error(missingNumber([0,1,2,3,4,5,6,7,9]))