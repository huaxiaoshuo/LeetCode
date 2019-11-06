var frequencySort = function(s) {
    let keys = [],
        values = [];
    s.split('').map((item) => {
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
            if (values[a] < values[b]) {
                let item = values[a]
                values[a] = values[b]
                values[b] = item
                let itemKey = keys[a]
                keys[a] = keys[b]
                keys[b] = itemKey
            }
        }
    }
    let result = []
    keys.map((item, index) => {
       result.push(...new Array(values[index]).fill(item))
    })
   return result.join('')
};

frequencySort('Aadddddcccbb')
