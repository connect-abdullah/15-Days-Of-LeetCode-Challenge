/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    // Use two pointers to compare characters from both ends
    let left = 0, right = cleanedString.length - 1;
    
    while (left < right) {
        if (cleanedString[left] !== cleanedString[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}
