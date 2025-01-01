/**
 * @param {number[]} nums
 * @return {number}
 */

const jump = (nums) => {
    let jumps = 0; // To count the number of jumps
    let currentEnd = 0; // The farthest index reachable with the current number of jumps
    let farthest = 0; // The farthest index reachable overall

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]); // Update the farthest reachable index
        
        // When we reach the end of the current jump range
        if (i === currentEnd) {
            jumps++; // Increment the jump count
            currentEnd = farthest; // Update the range for the next jump
        }
    }

    return jumps;
};
