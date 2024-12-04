/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
    let result = 0;

    // XOR all characters in s and t
    [...s, ...t].forEach(char => {
        result ^= char.charCodeAt(0);
    });

    // Convert the result back to a character
    return String.fromCharCode(result);
};

// Example usage:
console.log(findTheDifference("abcd", "abcde")); // Output: "e"
console.log(findTheDifference("", "y"));         // Output: "y"
