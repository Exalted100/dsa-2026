// https://leetcode.com/problems/find-closest-person/description/?envType=daily-question&envId=2025-09-04

var findClosest = function(x, y, z) {
    const xDistance = z > x ? z - x : x - z;
    const yDistance = z > y ? z - y : y - z;

    return xDistance < yDistance ? 1 : yDistance < xDistance ? 2 : 0;
};

console.log(findClosest(2, 7, 4));
console.log(findClosest(2, 5, 6));
console.log(findClosest(1, 5, 3));