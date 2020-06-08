var board = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
    ]
var solve = function(board) {
    // board = board.map( (items, indexs) => {
    //     if (indexs > 0 && indexs < board.length - 1) {
    //         return items.map((item, index) => {
    //           if(index > 0 && index < items.length - 1) return "X"
    //           else return item 
    //         })
    //     } else {
    //         return items
    //     }
    // })
    let x = [], y = []
    for (let a = 0; a < board.length; a++) {
        let item = board[a]
        
        for (let b = 0; b < item.length; b++) {
            if (a === 0 || a === board.length - 1) {
                x.push
            }
        }

    }
    return board
};
solve(board)
console.error(board)