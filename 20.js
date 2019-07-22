/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let allLeft = []
    let result = true
    let returnLeft = function (index) {
        if (index === s.length) {
            if (allLeft.length !== 0) result = false;
            return
        }
        let item = s[index]
        if (item === '(' || item === '[' || item === '{') {
            allLeft.push(item)
            returnLeft(index + 1)
        } else if (item === ')' && allLeft[allLeft.length - 1] === '(') {
            allLeft.pop()
            returnLeft(index + 1)
        } else if (item === ']' && allLeft[allLeft.length - 1] === '[') {
            allLeft.pop()
            returnLeft(index + 1)
        } else if (item === '}' && allLeft[allLeft.length - 1] === '{') {
            allLeft.pop()
            returnLeft(index + 1)
        } else {
            console.log(index)
            result = false
        }
    }
    returnLeft(0)
    return result
};
