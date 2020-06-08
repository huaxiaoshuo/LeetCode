/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let result = 0
    for (let a = 0; a < A.length; a++) {
        if (A.indexOf(A[a]) !== A.lastIndexOf(A[a])) {
            result = A[a]
            break
        }
    }
    return result
};
console.error(repeatedNTimes([2,1,2,5,3,2]))