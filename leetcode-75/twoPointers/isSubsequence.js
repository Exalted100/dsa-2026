// https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75

var isSubsequence = function(s, t) {
    let sPointer = 0;

    for (i = 0; i < t.length; i++) {
        if (t[i] === s[sPointer]) {
            sPointer++;
        }
    }

    if (sPointer === s.length) {
        return true;
    }

    return false;
};

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))