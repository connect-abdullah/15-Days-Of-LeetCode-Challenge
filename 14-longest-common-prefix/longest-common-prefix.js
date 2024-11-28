/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // No strings to compare

    // Sort the array
    strs.sort();

    // Compare the first and last strings in the sorted array
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;

    while (i < first.length && first[i] === last[i]) {
        i++; // Increment while characters match
    }

    // Return the common prefix
    return first.slice(0, i);
}
