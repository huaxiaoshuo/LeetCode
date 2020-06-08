/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    let result = 0
    function returnResult (code) {
        result += code;
        (code - 1 > 0) && returnResult(code - 1)
    }
    returnResult(n)
    return result
};
console.error(sumNums(3))