var countSegments = function(s) {
    let words = s.split(" ")
    words = words.filter(item => {
        return item !== ' ' && item !== ''
    })
    return words.length
};
const result = countSegments(", , , ,        a, eaefa")
console.error(result)
