/**
 * @param {string[]} board
 * @return {string}
 */
var tictactoe = function (board) {
  let deel = (arr) =>
    [].concat(...arr.map((item) => (Array.isArray(item) ? deel(item) : item)));
  board = board.map((item) => {
    return item.split("");
  });
  board = deel(board);
  for (let a = 0; a < board.length; a++) {

  }
};
const board = 
["OX ","OX ","O  "];
console.error(tictactoe(board));
