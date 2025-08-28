// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75

var maxVowels = function(s, k) {
    const sArray = s.split("");
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxLength = sArray.slice(0, k).reduce((acc, current) => vowels.includes(current) ? acc + 1 : acc, 0);
    if (maxLength === k) {
        return maxLength;
    }
    let currentLength = maxLength;

    for (left = 1, right = k; right < sArray.length; left++, right++) {
        currentLength = currentLength - (vowels.includes(sArray[left - 1]) ? 1 : 0) + (vowels.includes(sArray[right]) ? 1 : 0);

        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));