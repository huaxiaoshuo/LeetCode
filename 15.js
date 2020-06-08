/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => {return b - a})
    let returnResult = (left, right, sum, length, tem = [], result) => {
        console.error(left,right, sum, length, tem, result)
        if (length === 3) {
            if (sum === 0) result.push(tem)
            return returnResult(left, right, 0, 0, [], result)
        }
        if (left > right) return result
        if (sum < 0) {
            tem.push(nums[left])
            return returnResult(left + 1, right, sum + nums[left], length + 1, tem, result)
        } else {
            tem.push(nums[right])
            return returnResult(left, right - 1, sum + nums[right], length + 1,tem , result)
        }
        
    }
    return returnResult(0, nums.length - 1, 0, 0, [], [])
};
console.error(threeSum([-1, 0, 1, 2, -1, -4]))