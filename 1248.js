/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let returnResult = (left = 0,right = nums.length - 1, sum = 0,rightSum = 0, result = 0) => {
        if (sum >= k) {
            result += 1
            left += 1
            sum = 0
        }
        if (rightSum >= k) {
            result += 1
            right -= 1
            rightSum = 0
        }
        // if ((right - left) < k) return result
        if (left < (nums.length - k)) {
            for (let a = left; a < nums.length; a++) {
                if (nums[a] % 2 !== 0) {
                    sum += 1
                }
                if (sum >= k) {
                    break
                }
            }
        }
        if (right > k) {
            for (let b = right; b >= 0; b--) {
                if (nums[b]% 2 !== 0) {
                    rightSum += 1
                }
                if (rightSum >= k) {
                    break
                }
            }
        }
        if (sum < k && rightSum < k) return result
        return returnResult(left, right, sum, rightSum, result)
    }
    return returnResult()
};
const nums = [1,1,2,1,1], k = 3
console.error(numberOfSubarrays(nums, k))