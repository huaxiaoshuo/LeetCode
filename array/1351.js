/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let result = 0
    grid.map(item => {
        result += item.filter(i => i < 0).length
    })
    return result
};
console.error(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))