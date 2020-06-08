/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result
    for (let a = 0; a < nums.length; a++) {
        if (nums.indexOf(nums[a]) === nums.lastIndexOf(nums[a])) {
            result = nums[a]
            break
        }
    }
    return result
};
console.error(singleNumber([9,1,7,9,7,9,7]))