/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charIndex = new Map(); // Stores the last index of each character
    let maxLength = 0; // Maximum length of substring
    let start = 0; // Left pointer of the sliding window

    for (let end = 0; end < s.length; end++) {
        // If the character is already in the map and within the current window
        if (charIndex.has(s[end]) && charIndex.get(s[end]) >= start) {
            start = charIndex.get(s[end]) + 1; // Move start to avoid repeating
        }

        charIndex.set(s[end], end); // Update the last seen index of the character
        maxLength = Math.max(maxLength, end - start + 1); // Update max length
    }

    return maxLength;
};

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
