/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
  let left = 0,
    right = 0,
    index = 0,
    result = words.length;
  while (index < words.length) {
    if (words[index] === word1) {
      left = index;
    } else if (words[index] === word2) {
      right = index;
    }
    if (left && right) {
      result = Math.min(result, Math.abs(left - right));
    }
    index++;
  }
  return result;
};
const words = [
    "I",
    "am",
    "a",
    "student",
    "from",
    "a",
    "university",
    "in",
    "a",
    "city",
  ],
  word1 = "a",
  word2 = "student";
console.error(findClosest(words, word1, word2));
