/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
    let write = 0; // Position to write in chars
    let read = 0;  // Position to read in chars

    while (read < chars.length) {
        let char = chars[read]; // Current character
        let count = 0;

        // Count consecutive occurrences of the current character
        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        // Write the character
        chars[write] = char;
        write++;

        // Write the count if greater than 1
        if (count > 1) {
            for (let digit of String(count)) {
                chars[write] = digit;
                write++;
            }
        }
    }

    return write; // New length of the compressed array
};