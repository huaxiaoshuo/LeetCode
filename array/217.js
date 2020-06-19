/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return nums.length == Array.from(new Set(nums)).length ? false : true
    // let index = 0
    // while (index < nums.length) {
    //     if (index !== nums.lastIndexOf(nums[index])) return true
    //     index++
    // }
    // return false
};
console.error(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))