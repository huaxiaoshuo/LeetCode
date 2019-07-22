/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
    let result = true
    let JSONHand = JSON.stringify(hand)
    if (hand.length % W !== 0) return false
    for (let a = 0; a < JSON.parse(JSONHand).length / W; a++) {
        if (!result) break
        let minNum = Math.min.apply(null, hand)
        for (let b = 0; b < W; b++) {
            if (hand.indexOf(minNum) > -1) {
                hand.splice(hand.indexOf(minNum), 1)
                minNum += 1
            } else {
                result = false
                break
            }
        }
    }
    return result
};
