/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function(matrix, k) {
//     let length = matrix[0].length,
//     index = 0
//     if (k < length) return matrix[0][k - 1]
//     while (k > length) {
//         k -= length
//         index += 1
//     }
//     return matrix[index][k - 1]
// };

var kthSmallest = function(matrix, k) {
    const flatArray = (arr) =>  [].concat(...arr.map((item) =>  Array.isArray(item) ? flatArray(item) : item))
    matrix = flatArray(matrix)
    matrix = matrix.sort((a, b) => a - b)
    return matrix[k - 1]
};
const matrix = [[1,2],[1,3]],
 k = 2;

 console.error(kthSmallest(matrix, k))