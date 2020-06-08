/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let result = 0
    for (let a = 0; a < n; a++) {
        result += (a + 1 + '').split('').filter(item => {return item === '1'}).length
    }
    return result
};
console.error(countDigitOne(12))