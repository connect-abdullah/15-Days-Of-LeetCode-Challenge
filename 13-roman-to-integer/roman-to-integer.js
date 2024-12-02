/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    // Map of Roman numeral values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        // Get the value of the current Roman numeral
        const current = romanMap[s[i]];
        // Get the value of the next Roman numeral (if it exists)
        const next = romanMap[s[i + 1]];

        if (next && current < next) {
            // Subtract current value if it's smaller than the next
            total -= current;
        } else {
            // Otherwise, add the current value
            total += current;
        }
    }

    return total;
}
