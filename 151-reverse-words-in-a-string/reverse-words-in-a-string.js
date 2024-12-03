/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Step 1: Trim and split by spaces, filtering out empty words
    let words = s.trim().split(/\s+/);
    
    // Step 2: Reverse the words
    words.reverse();
    
    // Step 3: Join the words with a single space
    return words.join(' ');
};

// Example usage:
console.log(reverseWords("the sky is blue"));        // Output: "blue is sky the"
console.log(reverseWords("  hello world  "));       // Output: "world hello"
console.log(reverseWords("a good   example"));      // Output: "example good a"
