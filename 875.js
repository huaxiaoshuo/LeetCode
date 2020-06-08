/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    let sum = piles.reduce((a, b) => { return a + b})
    let returnResult = (code) => {
        let cache = 0
        for (let a = 0; a < piles.length; a++) {
           if (cache > H) break
           cache += Math.ceil(piles[a] / code)
        }
        if (cache <= H) return code;
         return returnResult(code + 1) 
    }
    return returnResult(Math.ceil(sum / H))
};
const piles = [30,11,23,4,20], H = 5
console.error(minEatingSpeed(piles, H))