/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    const isNegative = x < 0; // Check if the number is negative
    x = Math.abs(x);         // Work with the absolute value

    let reversed = 0;
    while (x > 0) {
        const digit = x % 10;      // Get the last digit
        reversed = reversed * 10 + digit; // Append the digit to reversed
        x = Math.floor(x / 10);    // Remove the last digit
    }

    if (isNegative) reversed = -reversed; // Add the negative sign if necessary

    // Check for 32-bit integer overflow
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }

    return reversed;
};
