/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
    A = A.sort((a, b) => {return a - b})
    let result = []
    for (let a = 0; a < B.length; a++) {
        let arr = A.filter(item => item > B[a])
        let index = 0
        if (arr.length) {
            result.push(arr[0])
            index = A.indexOf(arr[0])
        } else {
            result.push(A[0])
        }
        A.splice(index, 1)
    }
    return result
};
const A = [12,24,8,32], B = [13,25,32,11]
console.error(advantageCount(A, B))