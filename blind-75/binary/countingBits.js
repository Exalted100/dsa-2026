// https://leetcode.com/problems/counting-bits/description/?envType=problem-list-v2&envId=oizxjoit

var countBits = function(n) {
    const baseTenDerivatives = [];

    for (i = 0; i <= n; i++) {
        baseTenDerivatives.push(i);
    }

    const derivatives = baseTenDerivatives.map(number => number.toString(2).split('').reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue),
  0));

    return derivatives;
};

console.log(countBits(5));
console.log(countBits(2));