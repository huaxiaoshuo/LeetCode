/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
    let code = A > B ? 'a' : 'b',
    result = '',
    length = A + B
    for (let a = 1; a <= length; a++) {
        if ((code == 'a' && A > 0) || (code == 'b' && B > 0)) {
            result += code
            if (code == 'a') A -= 1; 
            if (code == 'b') B -= 1;
            if ((A / B > 1)) 
            if (A !== 0 && B !== 0 && a % 2 === 0) code = code === 'a' ? 'b' : 'a'
        } else {
            code = code === 'a' ? 'b' : 'a'
            result += code
        }
    }
    
    return result
};
let A = 2, B = 5
strWithout3a3b(A, B)
