// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=problem-list-v2&envId=oizxjoit

var lengthOfLongestSubstring = function(s) {
    let point = 0;
    let map = {};
    let maxSubstring = 0;
    let counter = 0;
    let movingPoint = 0;

    while (point < s.length) {
        if (map[s[movingPoint]] || movingPoint >= s.length) {
            point++;
            counter = 0;
            movingPoint = point;
            map = {};
        } else {
            map[s[movingPoint]] = true;
            movingPoint++;
            counter++;
        }

        maxSubstring = maxSubstring > counter ? maxSubstring : counter;
    }

    return  maxSubstring;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));