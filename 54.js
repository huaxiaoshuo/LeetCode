var spiralOrder = function(matrix) {
    if(!matrix.length) return []
    let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1;
    let result = []
    while (true) {
        for (let a = left; a <= right; a++) result.push(matrix[top][a]); // 从左到右
        top++; // 上+1
        if (left > right) break;
        for (let a = top; a <= bottom; a++) result.push(matrix[a][right]); // 从上到下
        right-- // right - 1
        if (top > bottom) break;
        for (let a = right; a >= left; a--) result.push(matrix[bottom][a]) // 从右到左
        bottom--;
        if (right < left) break;
        for (let a = bottom; a >= top; a--) result.push(matrix[a][left])// 从下到上
        left++;
        if (bottom < top) break
    }
    return result
};
spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])