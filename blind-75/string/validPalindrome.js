// https://leetcode.com/problems/valid-palindrome/description/?envType=problem-list-v2&envId=oizxjoit

// var isPalindrome = function (s) {
    // const strippedSentence = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // for (i = 0, e = strippedSentence.length - 1; i <= e; i++, e--) {
    //     if (strippedSentence[i] !== strippedSentence[e]) {
    //         return false;
    //     }
    // }

    // return true;
// };

var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        if (!/[a-zA-Z0-9]/.test(s[left])) {
            left++;
            continue;
        }

        if (!/[a-zA-Z0-9]/.test(s[right])) {
            right--;
            continue;
        }

        if (s[left].toLowerCase() != s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));