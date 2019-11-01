let time = [30, 20, 150, 100, 40]
var numPairsDivisibleBy60 = function(time) {
    let result = 0
    for (let a = 0; a < time.length - 1; a++) {
        for (let b = a + 1; b < time.length; b++) {
            let item = time[a], nextTime = time[b]
            if ((item + nextTime) % 60 === 0) {
                result += 1
            }
        }
    }
    return result
};
numPairsDivisibleBy60(time)
