// https://leetcode.com/problems/length-of-last-word/description/

var lengthOfLastWord = function(s) {
    const arr = s.trim().split(/\s+/);
    const lastWord = arr[arr.length - 1];
    return lastWord.length;
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))