/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0
    let codes = {
        CM: 900,
        M: 1000,
        CD: 400,
        D: 500,
        XC: 90,
        C: 100,
        XL: 40,
        L: 50,
        IX: 9,
        X: 10,
        IV: 4,
        V: 5,
        I: 1,
    }
    function returnNum(strs) {
        if (strs === '') {
            return false
        }
        for (let a in codes) {
            if (strs.indexOf(a) === 0) {
                result += codes[a]
                let arr = strs.split('')
                if (a.length === 1) {
                    arr.splice(0, 1)
                    strs = arr.join('')
                } else {
                    arr.splice(0, 2)
                    strs = arr.join('')
                }
                returnNum(strs)
                break
            }
        }
    }
    returnNum(s)
    return result
};
