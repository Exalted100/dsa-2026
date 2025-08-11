// https://leetcode.com/problems/number-of-1-bits/description/?envType=problem-list-v2&envId=oizxjoit

var hammingWeight = function(n) {
    const baseTwo = n.toString(2);
    let count = 0;

    for (i = 0; i < baseTwo.length; i++) {
        if (baseTwo[i] == 1) {
            count++;
        }
    }

    return count;
};

console.log(hammingWeight(11))
console.log(hammingWeight(128))
console.log(hammingWeight(2147483645))