/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let created = {
        result : [],
        init: function () {
            this.creates()
            return this.result[rowIndex]
        },
        creates: function () {
            for (let a = 1; a <= 34; a++) {
                let arr = Array.from({length: a},function (item, index) {
                    return index === 0 ? 1 : 0
                })
                arr[arr.length - 1] = 1;
                for (let a = 1; a < arr.length - 1; a++) {
                    arr[a] = this.result[this.result.length - 1][a - 1] + this.result[this.result.length - 1][a]
                }
                this.result.push(arr)
            }
        }
    }
    return created.init()
};
