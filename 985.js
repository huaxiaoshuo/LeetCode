/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let copyArr = A.filter(item => item % 2 === 0)
    let sum = copyArr.length ? copyArr.reduce((a, b) => a + b) : 0,
    result = []
    queries.map(item => {
        if ((item[0] + A[item[1]]) % 2 === 0) {
            if (A[item[1]] % 2 === 0) {
                sum += item[0]
            } else {
                sum = sum + item[0] + A[item[1]]
            }
        } else {
            if (A[item[1]] % 2 === 0) {
                sum -= [A[item[1]]]
            }
        }
        result.push(sum)
        A[item[1]] += item[0] 
    }) 
    return result
};
const A = [1], queries = [[4,0]]
console.error(sumEvenAfterQueries(A, queries))