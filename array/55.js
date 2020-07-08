/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let result = []
    let jumpResult = (index) => {
        console.error(nums[index], nums.slice(index + 1, index + 1 + nums[index]))
    }
    jumpResult(0)
};
const nums = [2,3,1,1,4]
console.error(canJump(nums))