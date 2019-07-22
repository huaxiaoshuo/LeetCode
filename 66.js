/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let fors = function (index) {
        if (index < 0 ) return;
        if (digits[index] === 9) {
            digits[index] = 0
            if (index === 0) {
                digits.unshift(1)
            } else {
                fors(index - 1)
            }
        } else {
            digits[index] = parseInt(digits[index]) + 1
        }
    }
    fors(digits.length - 1)
    return digits
};
