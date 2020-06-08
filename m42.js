// var maxSubArray = function(nums) {  //超出时间限制
//     let calcMax = (copyNum) => {return copyNum.reduce((a, b) => {return a + b})},
//     length = nums.length,
//     maxNumber = Number.MIN_SAFE_INTEGER;
//     let calcNum = function (len) {
//         if (len < 1) return;
//         for (let a = 0; a <= length - 1; a++) {
//             let max = calcMax(nums.slice(a, a + len))
//             if (maxNumber < max) maxNumber = max 
//             if (len + a > length - 1) break
//         }
//         return calcNum(len - 1)
//     }
//     calcNum(length)
//     return maxNumber
    
// };
let maxSubArray = function (nums) {
    let result = nums[0],
    maxSum = nums[0];
    for (let a = 1; a <= nums.length - 1; a++) {
        maxSum = Math.max(maxSum + nums[a], nums[a])
        result = Math.max(result, maxSum)
    }
    return result
}
console.error(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
