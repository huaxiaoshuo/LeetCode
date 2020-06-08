/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sums = 0,
    length = nums.length;
    let calcSums = function(index) {
        if (index >= length) return;
        let sum = 0
        for(let a = index; a <= length - 1; a++) {
            sum += nums[a]
            if (sum === k)sums += 1;
            // if (a >= length - 1) return calcSums(a + 1) 
        }
        return calcSums(index + 1)
    }
    calcSums(0)
    return sums
};
console.error(subarraySum([28,54,7,-70,22,65,-6]
    ,100))