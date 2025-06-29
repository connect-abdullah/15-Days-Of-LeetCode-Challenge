/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = String(x);
    let reversed = str.split("").reverse().join("");
    return str === reversed
};