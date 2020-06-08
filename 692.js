var topKFrequent = function(words, k) {
    let keys = [],
        values = [];
    words.map((item) => {
        if (!keys.includes(item)) {
            keys.push(item)
            values.push(1)
        } else {
            let index = keys.indexOf(item)
            values[index] = values[index] + 1
        }
    })
    for (let a = 0; a < values.length - 1; a++) {
        for (let b = a + 1; b < values.length; b++) {
            if (values[a] < values[b] || (values[a] === values[b] && (keys[a].charCodeAt(0) > keys[b].charCodeAt(0) || (keys[a].charCodeAt(0) === keys[b].charCodeAt(0) && keys[a].length > keys[b].length)))) {
                let item = values[a]
                values[a] = values[b]
                values[b] = item
                let itemKey = keys[a]
                keys[a] = keys[b]
                keys[b] = itemKey
            }
        }
    }
    return keys.splice(0, k)

};
let worlds = ["aaa","aa","a"], k = 1;
topKFrequent(worlds, k)
