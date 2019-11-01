/**
 * @param {string} L
 * @param {string} R
 * @return {number}
 */
console.log(Math.sqrt(9944094036))
var superpalindromesInRange = function (L, R) {
    let l = parseInt(L),
        r = parseInt(R),
        result = 0,
        start = Math.floor(Math.sqrt(l))
        isH = function(x) {
            if ( x < 0 || (x !== 0 && x % 10 === 0)) {
                return false
            } else if ( 0 <= x && x < 10) {
                return true
            }
            let y = x
            let num = 0
            // 121
            while(x !== 0) {
                num = x % 10 + num * 10
                x = Math.floor(x / 10)
            }
            return y === num
        };

    console.time('耗时')
    for (let a = start; a <= r; a++) {
        if (isH(a)) {
            let product = a * a
            if (isH(product)) {
                if (product < l) {
                    continue
                } else if (product >= l && product <= r) {
                    result +=1
                } else {
                    break;
                }
            }
        }
    }
    console.timeEnd('耗时')
    return result
};

let re = superpalindromesInRange("9944094036",
"431375128285413")
console.log(re)
// 5.296
