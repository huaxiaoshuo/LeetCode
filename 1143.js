let text1 = "pmjghexybyrgzczy", text2 = "hafcdqbgncrcbihkd";
// var longestCommonSubsequence = function (text1, text2) {
//     let target = text2.length > text1.length ? text1.split('') : text2.split(''),
//         target1 = text2.length <= text1.length ? text1.split("") : text2.split(""),
//         prevIndex = 0,
//         targetIndex = 0;
//     target.map((item) => {
//         let lastIndex = null
//         if (target1.indexOf(item, prevIndex) > -1) {
//             lastIndex = prevIndex
//             targetIndex += 1
//             prevIndex = target1.indexOf(item, lastIndex)
//             console.error(target1, prevIndex, lastIndex)
//             target1.splice(target1.indexOf(item, lastIndex), 1)
//
//         }
//     })
//     console.error(targetIndex)
// };

var longestCommonSubsequence = function (text1, text2) {
    let result = [...new Set(text1)].filter(item => {
        return text2.includes(item)
    })
    console.log(result)
    let length = result.length, lengths = [];
    let returnResult = function (length) {
        if (!length) {
            console.error(lengths)
            return lengths.length ? Math.max(...lengths) : 0
        }
        let indexA = 0, indexB = 0;
        let index = 0
        for (let a = result.length - length; a < result.length; a++) {
            if (text1.indexOf(result[a], indexA) >= indexA && text2.indexOf(result[a], indexB) >= indexB) {
                indexA = text1.indexOf(result[a])
                indexB = text2.indexOf(result[a])
                index += 1
            } else {
                lengths.push(index)
                break;
            }
        }
        if (index) {
            lengths.push(index)
        }
        return returnResult(length - 1)

    }
    return returnResult(length)
};
console.log(longestCommonSubsequence(text1, text2))
