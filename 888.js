/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let result = []
    let AllA = A.reduce((a, b) => {
        return a + b
    })
    let AllB = B.reduce((a, b) => {
        return a + b
    })
    for (let a = 0; a < A.length; a++) {
        for (let b = 0; b < B.length; b++) {
            if (AllA - A[a] + B[b] === AllB - B[b] + A[a]) {
                result = [A[a], B[b]]
                break
            }
        }
        if (result.length) break
    }
    return result
};
