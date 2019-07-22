/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let str = JSON.stringify(S)
    str = JSON.parse(str).split('')
    let returnReverse = function (index, lastIndex) {
        if (lastIndex - index <= 0) return
        if (!((str[index].charCodeAt() >= 65 && str[index].charCodeAt() <= 90) ||
            (str[index].charCodeAt() >= 97 && str[index].charCodeAt() <= 122))) {
            returnReverse(index + 1, lastIndex)
        } else if (!((str[lastIndex].charCodeAt() >= 65 && str[lastIndex].charCodeAt() <= 90) ||
            (str[lastIndex].charCodeAt() >= 97 && str[lastIndex].charCodeAt() <= 122))) {
            returnReverse(index, lastIndex - 1)
        } else {
            let item = str[index]
            str[index] = str[lastIndex]
            str[lastIndex] = item
            item = null
            returnReverse(index + 1, lastIndex - 1)
        }
    }
    returnReverse(0, str.length - 1)
    return str.join('')
};
