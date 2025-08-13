// https://leetcode.com/problems/valid-anagram/description/?envType=problem-list-v2&envId=oizxjoit

var isAnagram = function(s, t) {
    const sortedS = s.split('').sort();
    const sortedT = t.split('').sort();

    return sortedS.join('') === sortedT.join('');
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));