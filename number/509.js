/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N === 0) return 0
    if (N === 1 || N === 2) return 1
    return fib(N - 1) + fib(N - 2)
};
console.error(fib(3))