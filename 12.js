/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = ''
    let codes = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    returnRoman(num)
    function returnRoman(n = 0) {
        if (n === 0) {
            return false
        }
        for (let a in codes) {
            if (n >= codes[a]) {
                result += a
                returnRoman(n - codes[a])
                break
            }
        }
    }
    return result
};
