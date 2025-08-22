// https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75

var compress = function(chars) {
    const newArray = [];
    let finalCount = 0;
    let currentCount = 0;

    for (i = 0; i < chars.length; i++) {
        if (i === 0) {
            currentCount++;
            continue;
        }

        if (chars[i] === chars[i - 1]) {
            currentCount++;
        } else {
            const splitCount = currentCount.toString().split("");
            const newValues = currentCount === 1 ? [chars[i - 1]] : [chars[i - 1], ...splitCount]
            newArray.push(...newValues);
            finalCount += currentCount === 1 ? 1 : 1 + splitCount.length;
            currentCount = 1;
        }
    }

    const splitCount = currentCount.toString().split("");
    const newValues = currentCount === 1 ? [chars[i - 1]] : [chars[i - 1], ...splitCount]
    newArray.push(...newValues);
    finalCount += currentCount === 1 ? 1 : 1 + splitCount.length;

    chars.length = finalCount;
    for (i = 0; i < finalCount; i++) {
        chars[i] = newArray[i];
    }
    return finalCount;
};

console.log(compress(["a","a","b","b","c","c","c"]))
console.log(compress(["a"]))
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))