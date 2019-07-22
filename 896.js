/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let B = C = JSON.stringify(A);
    B = JSON.parse(B).sort((a, b) => {
        return a - b
    })
    C = JSON.parse(C).sort((a, b) => {
        return b - a
    })
    return A.join('') === B.join('') || A.join('') === C.join('')
};
