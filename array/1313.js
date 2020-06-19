/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let index = 0, target = []
    while (index < nums.length - 1) {
        target = [...target, ...new Array(nums[index]).fill(nums[index + 1])]
        index += 2
    }
    return target
};
const nums = [1,1,2,3]
console.error(decompressRLElist(nums))