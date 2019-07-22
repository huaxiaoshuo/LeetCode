/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let result = true
    n = n.toString(2)
    let returnN = function (index) {
        if (index === n.length - 1) return;
        if (n[index] !== n[index + 1]) {
            returnN(index + 1)
        } else {
            result = false
        }
    }
    returnN(0)
    return result
};
