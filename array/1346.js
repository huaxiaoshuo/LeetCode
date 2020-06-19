/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (let a = 0; a < arr.length; a++) {
        if (arr.includes(arr[a] * 2) && arr.lastIndexOf(arr[a] * 2) !== a) {
            console.error(arr[a], arr.lastIndexOf[arr[a] * 2], a)
            return true
        }
    }
    return false

};
console.error(checkIfExist([-2,0,10,-19,4,6,-8]))