// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=problem-list-v2&envId=oizxjoit

var maxProfit = function(prices) {
    let maxProfit =  0;

    for (let first = 0, second = 1; second < prices.length; null) {
        if (prices[second] - prices[first] > maxProfit) {
            maxProfit = prices[second] - prices[first];
        }

        if (prices[first] > prices[second]) {
            first = second;
        }

        second++;
    }

    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]))