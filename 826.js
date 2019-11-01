
let difficulty = [2,10, 2, 4,14,6,8,10, 12], profit = [10, 70, 20 ,20, 100, 30,40,50, 60], worker = [4,5,6,7];
var maxProfitAssignment = function(difficulty, profit, worker) {
    for (let a = 0; a < difficulty.length - 1; a++) {
       for (let b = a + 1; b < difficulty.length; b++) {
           let item = difficulty[a], nextItem = difficulty[b]
           if (item > nextItem) {
               let copyItem = difficulty[b],copyItem2 = profit[b];
               difficulty[b] = difficulty[a]
               profit[b] = profit[a]
               difficulty[a] = copyItem
               profit[a] = copyItem2
           }
       }

    }

    let earnings = {};
    for (let a = difficulty.length - 1; a >= 0; a--) {
        if ((earnings[difficulty[a]] && earnings[difficulty[a]] < profit.slice(0, a + 1)) || earnings[difficulty[a]] == undefined) {
            earnings[difficulty[a]] = Math.max.apply(null, profit.slice(0, a + 1))
        }
    }
    let copydifficulty = JSON.parse(JSON.stringify(Array.from(new Set(difficulty)))),diffMax = Math.max(...copydifficulty), length = Math.max(...[...copydifficulty,...worker])
    for (let a = length; a > 0; a--) {
        if (earnings[a]) {
            copydifficulty.splice(copydifficulty.indexOf(a), 1)
            diffMax = Math.max(...copydifficulty)
        } else {
            earnings[a] = earnings[diffMax] || 0
        }
    }
    let result = 0;
    // returnResult = function (item) {
    //     if (item <= 0) return 0
    //     if (earnings[item]) return earnings[item]
    //     return returnResult(item - 1)
    // }
    worker.map(item => {
        result += earnings[item]
    })
    console.error(result)
    return result
};
maxProfitAssignment(difficulty, profit, worker)
