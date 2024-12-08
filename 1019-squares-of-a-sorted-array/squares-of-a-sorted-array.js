/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
    let left = 0, right = nums.length - 1;
    let result = new Array(nums.length);
    let index = nums.length - 1;

    while (left <= right) {
        let leftSquare = nums[left] ** 2;
        let rightSquare = nums[right] ** 2;

        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }
        index--;
    }

    return result;
};

// Example usage:
console.log(sortedSquares([-4, -1, 0, 3, 10])); // Output: [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // Output: [4, 9, 9, 49, 121]
