// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75

var reverseWords = function(s) {
    const wordsArray = s.trim().split(/[ ]+/);

    const reversedWordsArray = [];

    for (i = wordsArray.length - 1; i >= 0; i--) {
        reversedWordsArray.push(wordsArray[i]);
    }

    return reversedWordsArray.join(" ");
};

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))