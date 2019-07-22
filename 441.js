/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let sqrt = Math.floor(Math.sqrt(n * 2))
    if (n >= sqrt * (sqrt + 1) / 2) {
        return sqrt
    } else {
        return sqrt - 1
    }
};
