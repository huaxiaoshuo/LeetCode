/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    let count = []
    let index = 1
    while (index <= k) {
        count.push(shorter * index + longer * (k - index))
        index++
    }
    index = 1
    while (index <= k) {
        count.push(longer * index + shorter * (k - index))
        index++
    }
    return Array.from(new Set(count.sort((a, b) => a - b)))
};
const shorter = 1,
longer = 2,
k = 3;
console.error(divingBoard(shorter, longer, k))