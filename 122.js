/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    for (let a = 0; a < prices.length - 1; a++) {
        if (prices[a] < prices[a + 1]) {
            result += (prices[a + 1] - prices[a])
        }
    }
    return result < 0 ? 0 : result
};
