// https://leetcode.com/problems/group-anagrams/description/?envType=problem-list-v2&envId=oizxjoit

var groupAnagrams = function(strs) {
    const groups = [];
    const groupMaps = {};

    for (i = 0; i < strs.length; i++) {
        const sortedString = strs[i].split('').sort().join('');

        if (groupMaps[sortedString]?.present) {
            groups[groupMaps[sortedString].index].push(strs[i]);
        } else {
            groupMaps[sortedString] = { present: true, index: groups.length };
            groups.push([strs[i]]);
        }
    }

    return groups;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));