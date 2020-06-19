/**
 * @param {number[]} A
 * @return {number}
 */
// var maxScoreSightseeingPair = function(A) {
//     let result = 0
//     let calcMax = (left, right) => {
//         console.error(left, right)
//         if (left >= right) return result
//         let item = A[left] + A[right] + left - right
//         if (result < item) result = item
//         if (A[left] < A[right]) return calcMax(left + 1, right)
//         else if (A[left] > A[right]) return calcMax(left, right - 1)
//         let length = Math.floor((right - left - 1) / 2)
//         if (length >= 1) {
//             if (Math.max(A.slice(left + 1, left + length + 1)) > Math.max(A.slice(right - length, right))) return calcMax(left, right - 1)
//             return calcMax(left + 1, right)
//         } 
//         return calcMax(left + 1, right)
//     }
//     return calcMax(0, A.length - 1)
// };

/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let maxNum = 0
    for (let a = 0; a < A.length - 1; a++) {
        for (let b = a + 1; b < A.length; b++){
            let item = A[a] + A[b] + a - b
            if (maxNum < item) maxNum = item
        }
    }
    return maxNum
};
const A = [2,2,2]
console.error(maxScoreSightseeingPair(A))