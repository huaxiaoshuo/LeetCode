/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var isPossibleDivide = function(nums, k) {
//     let returnResult = (theNumber, item) => {
//         let lastItem = item + k - 1
//         if (nums.indexOf(item) > -1) {
//             nums.splice(nums.indexOf(item), 1)
//             theNumber += 1
//             if (theNumber === k && nums.length === 0) return true
//             else if (theNumber >= k) return returnResult(0, Math.min(...nums))
//             return returnResult(theNumber, item + 1)
//         } else {
//             return false
//         }
//     }
//     return returnResult(0, Math.min(...nums))
// };
var isPossibleDivide = function(nums, k) {
    let returnResult = (theNumber, item) => {
        let index = nums.indexOf(item)
        if (index > -1) {
            nums.splice(index, 1)
            theNumber += 1
            if (theNumber === k && nums.length === 0) return true
            else if (theNumber >= k) return returnResult(0, Math.min(...nums))
            return returnResult(theNumber, item + 1)
        } else {
            return false
        }
    }
    return returnResult(0, Math.min(...nums))
};
const nums = [1,2,3,4], k = 3
console.error(isPossibleDivide(nums, k))