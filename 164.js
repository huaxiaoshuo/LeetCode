/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length <= 1) return 0
    nums.sort((a, b) => {
        return a - b
    })
    console.log(nums)
    let result = []
    for (let a = 0; a < nums.length - 1; a++) {
        result.push(nums[a + 1] - nums[a])
    }
    result.sort((a, b) => {
        return b - a
    })
    return result[0]
};
