// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

var kidsWithCandies = function(candies, extraCandies) {
    const mostCandies = candies.reduce((acc, current) => acc > current ? acc : current, 0);
    const canhaveMostCandies = candies.map(val => val + extraCandies >= mostCandies ? true : false);
    return canhaveMostCandies;
};

console.log(kidsWithCandies([4,2,1,1,2], 1))
console.log(kidsWithCandies([12,1,12], 10))