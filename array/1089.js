/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let index = 0;
  while (index < arr.length) {
    if (arr[index] === 0) {
      arr = [...arr.slice(0, index + 1), ...arr.slice(index, arr.length)];
      index += 2;
    } else {
      index++;
    }
  }
};
const arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);


/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    var len = arr.length
    var start = 0
    var index = arr.indexOf(0, start)
    while(index !== -1) {
        arr.splice(index, 0, 0)
        arr.length = len
            start = index + 2
            index = arr.indexOf(0, start)
    }
    return null
};