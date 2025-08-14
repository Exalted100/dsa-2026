// https://leetcode.com/problems/palindromic-substrings/description/?envType=problem-list-v2&envId=oizxjoit

const isPalindrome = (string) => {
    for (i = 0, e = string.length - 1; i < string.length; i++, e--) {
        if (string[i] !== string[e]) {
            return false;
        }
    }

    return true;
}

var countSubstrings = function(s) {
    let point = 0;
    let counter = 1;
    let substrings = s.length;

    while (point < s.length - 1) {
        if (isPalindrome(s.slice(point, counter + 1))) {
            substrings++;
        }
        counter++;

        if (counter > s.length - 1) {
            point++;
            counter = point + 1;
        }
    }

    return substrings;
};

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));
console.log(countSubstrings("aba"));