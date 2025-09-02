// https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75

var uniqueOccurrences = function(arr) {
    const mapping = {};

    for (i = 0; i < arr.length; i++) {
        mapping[arr[i]] = mapping[arr[i]] ? mapping[arr[i]] + 1 : 1;
    }

    const values = Object.values(mapping);

    const repetitionMap = {};
    for (i = 0; i < values.length; i++) {
        if (repetitionMap[values[i]]) {
            return false;
        }
        repetitionMap[values[i]] = true;
    }

    return true;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));
console.log(uniqueOccurrences([1,2]));
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));