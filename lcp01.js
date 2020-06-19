/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    return guess.filter ((item, index) => { return item === answer[index] }).length
};
const guess = [2,2,3], answer = [3,2,1]
console.error(game(guess, answer))