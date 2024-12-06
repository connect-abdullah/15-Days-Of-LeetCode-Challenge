/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    const charCount = {}; // To store character frequencies

    // Count the frequency of each character
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a frequency of 1
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i; // Return the index of the first unique character
        }
    }

    return -1; // No unique character found
};

// Example usage:
console.log(firstUniqChar("leetcode"));     // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb"));         // Output: -1
