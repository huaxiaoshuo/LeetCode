/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    worker = worker.sort((a, b) => a - b)
    let left = 0, right = difficulty.length === 1 ? 0 : 1, index = 0, result = 0
    while (right < difficulty.length && index < worker.length) {
        if (difficulty[left] <= worker[index] && difficulty[right] > worker[index]) {
            console.error(left, right)
        }
    }
    console.error(result)
};
const difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
console.error(maxProfitAssignment(difficulty, profit, worker))