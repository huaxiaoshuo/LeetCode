/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let sum = 0
    let target = JSON.parse(JSON.stringify(heights))
    target = target.sort((a, b) => {return a - b})
    for (let a = 0; a < heights.length; a++) {
        if (target[a] !== heights[a]) {
            sum += 1
        }
    } 
    return sum
};
console.error(heightChecker([1,1,4,2,1,3]))