/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function(text) {
    let textArr = []
    for (let a = 0; a < text.length; a++) {
        textArr.push(text.charCodeAt(a))
    }
    textArr = Array.from(new Set(textArr))
    textArr.sort((a, b) => {
        return a - b
    })
    console.error(textArr)
};
console.error(smallestSubsequence('cdadabcc'))