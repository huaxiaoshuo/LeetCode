/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = null
    nums.map(item => {
        if (maxSum === null) maxSum = item
        // else if (maxSum)
        
    })
    return maxSum
};
console.error(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))