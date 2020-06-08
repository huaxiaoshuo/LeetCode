/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0,
    min = prices[0];
    for (let index = 1; index < prices.length; index++) {
        min = Math.min(min, prices[index])
        result = Math.max(result, prices[index] - min)
    }
};
maxProfit([7,1,5,3,6,4])