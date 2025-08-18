// https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

const isDivisor = (str, divisor) => {
    if (divisor === "") {
        return true;
    }
    let i = 0;

    while (i < str.length) {
        if (str.slice(i, i + divisor.length) !== divisor) {
            return false;
        }
        i += divisor.length;
    }

    return true;
}

var gcdOfStrings = function(str1, str2) {
    let greatestCommonDivisor = "";

    for (i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return greatestCommonDivisor
        }
        if (isDivisor(str1, str1.slice(0, i + 1)) && isDivisor(str2, str1.slice(0, i + 1))) {
            greatestCommonDivisor = str1.slice(0, i + 1);
        }
    }

    return greatestCommonDivisor;
};

console.log(gcdOfStrings("ABCABC", "ABC"))
console.log(gcdOfStrings("ABABAB", "ABAB"))
console.log(gcdOfStrings("LEET", "CODE"))