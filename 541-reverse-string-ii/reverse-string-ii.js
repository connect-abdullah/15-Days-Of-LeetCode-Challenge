/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reverseStr(s, k) {
    const arr = s.split(''); // Convert string to array for easy manipulation
    
    for (let i = 0; i < s.length; i += 2 * k) {
        // Reverse the first k characters in every 2k block
        let left = i;
        let right = Math.min(i + k - 1, s.length - 1); // Ensure we don't go out of bounds
        
        // Reverse the segment [left, right]
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap
            left++;
            right--;
        }
    }

    return arr.join(''); // Convert array back to string
}
