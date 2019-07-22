/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    n = n.toString(2).split('')
    n = n.filter((item) => {
        return parseInt(item) === 1
    })
    return n.length
};
