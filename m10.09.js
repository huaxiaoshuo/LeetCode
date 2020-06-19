/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
//     let deel = arr => [].concat(...arr.map(item => Array.isArray(item) ? deel(item) : item))
//     return deel(matrix).includes(target)
// };
var searchMatrix = function(matrix, target) {
    for (let a = 0; a < matrix.length; a++) {
        if (matrix[a].includes(target)) return true
    }
    return false
};
console.error(searchMatrix([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], 5))