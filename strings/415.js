/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    num1 = num1.split('').reverse().join('')
    num2 = num2.split('').reverse().join('')
    let remain = 0, result = []
    for (let a = 0, length = Math.max(num1.length, num2.length); a < length; a++) {
        let n1 = num1[a] || 0, n2 = num2[a] || 0;
        let sum = +n1 + +n2 + remain
        if (remain) remain = 0
        if (sum >= 10) {
            result.push(sum % 10)
            remain = Math.floor(sum / 10)
        } else {
            result.push(sum)
        }
    }
    if (remain) result.push(remain)
    return result.reverse().join('') 
};
console.error(addStrings("408", "5"))