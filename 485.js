/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let resultArr = [], num= 0;
    for (let a = 0; a < nums.length; a++) {
        if (nums[a] === 0) {
            resultArr.push(num)
            num = 0
        } else {
            num += 1
        }
        if (a === nums.length - 1) resultArr.push(num)
    }
    resultArr.sort((a, b) => {
        return a - b
    })
    return resultArr[resultArr.length - 1]
};
