/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    const result = []; // Initialize an empty array to hold the rows of Pascal's Triangle

    for (let i = 0; i < numRows; i++) {
        const row = Array(i + 1).fill(1); // Create a row with `i+1` elements, all initialized to 1

        // Update the middle elements of the row
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        result.push(row); // Add the row to the result
    }

    return result; // Return the complete triangle
}