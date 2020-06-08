/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return nums.sort((a, b) => {
        return a - b
    })
};
const nums = [5,2,3,1]
console.error(sortArray(nums))