/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let digits = 1, spac = 9;
    if (n < 10) return n
    while (n > spac * digits) {
        n -= spac * digits
        spac *= 10
        digits += 1
    }
    console.error(n - 1, digits, spac)
    let index = spac / 9
    while (index <= digits) {
        
    }
  };
console.error(findNthDigit(121));
