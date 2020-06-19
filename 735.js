/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// var asteroidCollision = function(asteroids) {
//     let disPoseArr = JSON.stringify(asteroids)
//     disPoseArr = JSON.parse(disPoseArr)
//     let returnFUN = function (disPoseArr, a = 0) {
//         let length = disPoseArr.length - 1;
//         if (a > length) return disPoseArr
//         while (a <= length) {
//             if (disPoseArr[a] === 0) {

//             }
//             if (disPoseArr[a] > 0 && disPoseArr[a + 1] < 0) {
//                 if (Math.abs(disPoseArr[a]) === Math.abs(disPoseArr[a + 1])) {
//                     disPoseArr.splice(a, 2)
//                 } else if (Math.abs(disPoseArr[a]) < Math.abs(disPoseArr[a + 1])) {
//                     disPoseArr.splice(a, 1)
//                 } else {
//                     disPoseArr.splice(a + 1, 1)
//                 }
//                 return returnFUN(disPoseArr, a ? a - 1 : 0)
//             } else {
//                 a += 1
//             }
//         }
//         return disPoseArr
//     }
//     return returnFUN(disPoseArr)
// };
var asteroidCollision = function (asteroids) {
    if (asteroids.length <= 1) return asteroids
    let calcArray = (asteroids) => {
        let a = 0, length = asteroids.length - 1;
        while (a < length) {
            if (asteroids[a] >= 0 && asteroids[a + 1] <= 0) {
                if (asteroids[a] > Math.abs(asteroids[a + 1])) asteroids.splice(a + 1, 1);
                else if (asteroids[a] < Math.abs(asteroids[a + 1])) asteroids.splice(a, 1);
                else if (asteroids[a] == Math.abs(asteroids[a + 1])) asteroids.splice(a, 2);
                return calcArray(asteroids)
            }
            a++
        }
        return asteroids
    }
    return calcArray(asteroids)
}
const asteroids = [-2, -1, 1, 2]
console.error(asteroidCollision(asteroids))