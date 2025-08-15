// https://leetcode.com/problems/longest-repeating-character-replacement/description/?envType=problem-list-v2&envId=oizxjoit

var characterReplacement = function(s, k) {
    let movesUsed = 0;
    let maxSubsequents = 0;
    let point = 0;
    let movingPoint = 0;
    let counter = 0;

    while (point < s.length) {
        if (movingPoint >= s.length || movesUsed > k) {
            if (movesUsed < k && point > 0) {
                counter += k - movesUsed < point ? k - movesUsed : point;
            }
            maxSubsequents = maxSubsequents > counter ? maxSubsequents : counter;
            point++;
            movingPoint = point;
            movesUsed = 0;
            counter = 0;
        } else {
            if (s[point] !== s[movingPoint]) {
                movesUsed++;
            }
            if (movesUsed <= k) {
                movingPoint++;
                counter++;
            }
        }
    }

    return maxSubsequents;
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("ABBB", 2));