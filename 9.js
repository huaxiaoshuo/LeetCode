/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = (x + '').split('').reverse().join('')
    if (str == x) return true
    return false
};
