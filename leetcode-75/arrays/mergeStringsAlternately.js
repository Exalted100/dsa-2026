// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

var mergeAlternately = function(word1, word2) {
    let mergedString = "";
    let firstIterator = 0;
    let secondIterator = 0;

    while (true) {
        if ((firstIterator > secondIterator || firstIterator >= word1.length ) && secondIterator < word2.length) {
            mergedString += word2[secondIterator];
            secondIterator++;
        } else if ((firstIterator <= secondIterator || secondIterator >= word2.length) && firstIterator < word1.length) {
            mergedString += word1[firstIterator];
            firstIterator++
        } else {
            break;
        }
    }

    return mergedString;
};

console.log(mergeAlternately("abc", "pqr"))
console.log(mergeAlternately("ab", "pqrs"))
console.log(mergeAlternately("abcd", "pq"))