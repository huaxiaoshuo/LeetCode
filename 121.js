/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    let items = prices
    for (let a = 0; a < items.length - 1; a++) {
        let max = Math.max.apply(null, items.slice(a + 1, items.length ))
        if (result < max - items[a]) {
            result = max - items[a]
        }
    }
    if (result < 0) result = 0;
    return result
};
