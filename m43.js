/**
 * @param {number} n
 * @return {number}
 */
// var countDigitOne = function(n) {
//     let result = 0
//     for (let a = 0; a < n; a++) {
//         result += (a + 1 + '').split('').filter(item => {return item === '1'}).length
//     }
//     return result
// };
var countDigitOne = function(n) {
    let result = 1,
    prit = 9,
    code = 1
    if (n < 9) return 1 
    while (prit * 10 + 9 < n) {
        prit = prit * 10 + 9
        code += 1
        result = (code + 1) 
    }
    console.error(prit)
    return result
};
console.error(countDigitOne(100))