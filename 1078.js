var text = "alice is a good girl she is a good student", first = "a", second = "good"


var findOcurrences = function(text, first, second) {
    text = text.split(" ")
    let result = []
    for (let a = 0; a < text.length - 2; a++) {
        let item = text[a],nextText = text[a + 1]
        if (item === first && second === nextText) {
            result.push(text[a + 2])
        }
    }
    return result
};
findOcurrences(text, first, second)
