/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
    let n = digits.length;

    // Start from the last digit and move to the left
    for (let i = n - 1; i >= 0; i--) {
        digits[i] += 1; // Increment the current digit
        if (digits[i] < 10) {
            // If no carry, return the result
            return digits;
        }
        // If there is a carry, set the current digit to 0
        digits[i] = 0;
    }

    // If the loop ends and there is still a carry, prepend 1
    digits.unshift(1);

    return digits;
}
