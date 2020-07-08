/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    if (X >= customers.length) return customers.reduce((a, b) => a + b)
    let result = 0, angryResult = 0, temAngry = 0;
    for (let a = 0; a < customers.length; a++) {
        if (grumpy[a] === 1) {
            temAngry += customers[a]
        } else {
            result+= customers[a]
        }
        if (a + 1 === X) {
            angryResult = Math.max(temAngry, angryResult)
        } else if (a >= X) {
            if (grumpy[a - X] === 1) temAngry -= customers[a - X]
            angryResult = Math.max(temAngry, angryResult)
        }
    }
    return result + angryResult
};
const customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
console.error(maxSatisfied(customers, grumpy, X))