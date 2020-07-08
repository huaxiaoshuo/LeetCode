/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    let result = 0
    for (let a = 1; a < A.length - 1; a++) {
        let left = a - 1, right = a + 1;
        let leftNum = rightNum = A[a];
        while (left >= 0 && A[left] < leftNum) {
            leftNum = A[left]
            left--
        }
        while (right < A.length && A[right] < rightNum) {
            rightNum = A[right]
            right++
        }
        if (left !== a - 1 && right !== a + 1) result = Math.max(result, right - left - 1) 
    }
    return result
};
const a = [2,1,4,7,3,2,5]
console.error(longestMountain(a))