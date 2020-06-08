/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let length = n + 1,
    result = ''
    for (let a = 0; a < length; a++) {
        let str = a + ''
        if (n + 1 > str.length) {
            n -= str.length
        }  else {
            result = str[n]
            break;
        }
    }
    return result
};
console.error(findNthDigit(123456789))