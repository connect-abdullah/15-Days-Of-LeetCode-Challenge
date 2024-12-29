/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (const char of s) {
        if (char in map) {
            // If it's a closing bracket
            const top = stack.pop(); // Get the top of the stack
            if (top !== map[char]) return false; // Check if it matches
        } else {
            // If it's an opening bracket
            stack.push(char);
        }
    }

    return stack.length === 0; // If stack is empty, all brackets matched
};