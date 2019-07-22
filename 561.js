/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let result = 0
    nums = nums.sort(function (a, b) {
        return a - b
    })
    let returns = function (index) {
        if (index >= nums.length) return
        result += nums[index]
        returns(index + 2)
    }
    returns(0)
    return result
};
