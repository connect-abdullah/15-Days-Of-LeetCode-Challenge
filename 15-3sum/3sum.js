/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Step 1: Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for the current element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // Found a triplet
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for left and right pointers
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // Increase sum by moving the left pointer
            } else {
                right--; // Decrease sum by moving the right pointer
            }
        }
    }

    return result;
}

