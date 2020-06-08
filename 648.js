var replaceWords = function(dict, sentence) {
    let words = sentence.split(" ")
    dict.map(item => {
      words = words.map(word => {
           return word.indexOf(item) === -1 ? item : word
        })
    })
    return words.join(" ")
};
const result = replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")
console.error(result)
