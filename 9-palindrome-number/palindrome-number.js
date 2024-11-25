/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    // Negative numbers and numbers ending with 0 (but not 0 itself) are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf = 0;
    // Reverse half of the number
    while (x > reversedHalf) {
        // Add the last digit of x to reversedHalf
        reversedHalf = reversedHalf * 10 + x % 10;
        // Remove the last digit from x
        x = Math.floor(x / 10);
    }

    // Check if the original number equals the reversed half
    // or if the original number equals reversedHalf // 10 (for odd-length numbers)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
