/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = []
    let returnSUB = (index) => {
        if (index === (right + 1)) return;
        let arr = JSON.stringify(index + '')
        arr = JSON.parse(arr).split('')
        let ISTRUE = true
        for (let a = 0; a < arr.length; a++) {
            if (index % parseInt(arr[a]) !== 0 || parseInt(arr[a]) === 0) {
                ISTRUE = false
                break
            }
        }
        if (ISTRUE) {
            result.push(index)
        }
        returnSUB(index + 1)
    }
    returnSUB(left)
    return result
};
