/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    let result = new Array(n).fill(0)
    bookings.map((item) => {
        let index = item[0]
        while(index <= item[1]) {
            result[index - 1] += item[2]
            index++
        }
    })
    return result
};
const bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
console.error(corpFlightBookings(bookings, n))