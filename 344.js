/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if (nums.length < 3) return false 
    let result = false
   for (let a = 1; a < nums.length - 1; a++) {
        if (nums[a - 1] <= nums[a] && nums[a] <= nums[a + 1]) {
            result = true
            break
        }
   }
   return result
};
console.error(increasingTriplet([1,2, 3,4,5]))