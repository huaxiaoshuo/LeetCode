/**
 * @param {string[]} strs
 * @return {string}
 */
// let longestCommonPrefix = function (strs) {
//     console.log(strs)
//     let result = ''
//     function returnCommon(index) {
//         if (strs.length === 0 || strs[0].length === 0) return;
//         if (strs.length === 1) {
//             result = strs[0]
//             return
//         }
//         let isFor = true
//         for (let a = 0; a < strs.length - 1; a++) {
//             let item = strs[a]
//             if (item === '') {
//                 isFor = false;
//                 break
//             }
//             let nextItem = a < strs.length - 1 ? strs[a + 1] : 0
//             if (item.length === index ||
//                 nextItem.length === index ||
//                 item[index] !== nextItem[index]) {
//                 isFor = false
//                 break
//             }
//         }
//         if (isFor) {
//             returnCommon(index + 1)
//         } else {
//             if (index) {
//                 result = strs[0].split('').splice(0, index).join('')
//             }

//         }
//     }
//     returnCommon(0)
//     return result
// }

let longestCommonPrefix = function (strs) {
    class GetPrefix {
        constructor (strs) {
            this.strs = strs
            this.code = ''
        }
        findPrefix (index = 0) {
            if (this.strs[0] && this.strs[0][index]) {
                this.code += this.strs[0][index] 
                if (this.isPrefix()) {
                    this.findPrefix(index + 1)
                } else {
                    this.code = this.code.substr(0, this.code.length - 1)
                }
            }
            return this.code
        }
        isPrefix () {
            let copyStrs = this.strs.filter(item => item.indexOf(this.code) === 0)
            return copyStrs.length === this.strs.length
        }

    }
    console.error(new GetPrefix(strs).findPrefix())
    return new GetPrefix(strs).findPrefix()
}
longestCommonPrefix(["flower","flow","flight"])