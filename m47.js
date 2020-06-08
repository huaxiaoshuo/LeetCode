/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let position = [0, 0], // 坐标
    result = grid[position[0]][position[1]];
    positionBorder = [grid[0].length - 1, grid.length - 1];
    let calcResult = (posi) => {
        if (posi[0] >= positionBorder[0] && posi[1] >= positionBorder[1])return;
        let rightNum = grid[posi[0]] && grid[posi[0]][posi[1] + 1] || 0,
        bottomNum = grid[posi[0] + 1] && grid[posi[0] + 1][posi[1]] || 0;
        if ((rightNum > bottomNum) || (rightNum == bottomNum && posi[1] < positionBorder[1])) {
            result += rightNum
            return calcResult([posi[0], posi[1] + 1])
        } else if (rightNum < bottomNum || (rightNum == bottomNum && posi[0] < positionBorder[0])) {
            result += bottomNum
            return calcResult([posi[0] + 1, posi[1]])
        }
        
    }
    calcResult(position)
    
    return result
};
console.error(maxValue([[
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]))