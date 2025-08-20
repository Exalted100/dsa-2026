// https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

var reverseVowels = function(s) {
    const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    const strArray = [];

    const vowelPositions = [];

    for (i = 0; i < s.length; i++) {
        strArray.push(s[i]);
        if (vowels.includes(s[i])) {
            vowelPositions.push({value: s[i], index: i})
        }
    }

    for (i = 0, e = vowelPositions.length - 1; i < vowelPositions.length; i++, e--) {
        console.log(strArray[vowelPositions[i].index], vowelPositions[e].value)
        strArray[vowelPositions[i].index] = vowelPositions[e].value;
    }

    return strArray.join("");
};

console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));