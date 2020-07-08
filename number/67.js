/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('').reverse().join('')
    b = b.split('').reverse().join('')
    let returnResult = (index, carry, result) => {
        let itemA = a[index] || 0,
        itemB = b[index] || 0
        result += (+itemA + +itemB + +carry) % 2
        carry = (+itemA + +itemB + +carry) >= 2 ? 1 : 0 
        if (index >= a.length && index >= b.length && carry === 0) {
            target = result.split('').reverse().join('').replace(/\b(0+)/gi,"")
            return target || '0'
        } else {
            return returnResult(index + 1, carry, result)
        }
    }
    return returnResult(0, 0, '')
};
const a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
console.error(addBinary(a, b))