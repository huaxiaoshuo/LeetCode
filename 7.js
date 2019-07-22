/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let arr = (x + '').split('').reverse()
    function gitRed(index) {
        if (parseInt(arr[index]) !== 0) return;
        arr.splice(index, 1)
        gitRed(index)
    }
    gitRed(0)
    if (arr[arr.length - 1] === '-') {
        arr.splice(arr.length - 1, 1)
        arr.unshift('-')
    }
    var result = 0
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] !== '-') {
            result = (parseInt(arr[a]) + result) * 10
        }
    }
    if (arr[0] === '-') {
        result = -result
    }
    result = result / 10
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
        result = 0
    }
    return result
};
