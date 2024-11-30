/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    let words = s.trim().split(" ");
    let lastWord = words[words.length - 1 ]
    return lastWord.length

  }

console.log(lengthOfLastWord ("Hello World"))