/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = s.split('')
    let STRINGARR = arr.filter(function (item) {
        return (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) || (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) || (item.charCodeAt() >= 48 && item.charCodeAt() <= 57)

    })
    if (STRINGARR.join('').toUpperCase() === STRINGARR.reverse().join('').toUpperCase()) return true;
    return false
};
