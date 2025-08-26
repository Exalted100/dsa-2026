// https://leetcode.com/problems/max-number-of-k-sum-pairs/description/?envType=study-plan-v2&envId=leetcode-75

var maxOperations = function(nums, k) {
    let actions = 0;
    let storeMap = {};

    for (i = 0; i < nums.length; i++) {
        const remainder = k - nums[i];
        if (storeMap[remainder]) {
            actions++;
            storeMap[remainder] = storeMap[remainder] - 1;
        } else {
            storeMap[nums[i]] = storeMap[nums[i]] ? storeMap[nums[i]] + 1 : 1;
        }
    }

    return actions;
};

console.log(maxOperations([1,2,3,4], 5))
console.log(maxOperations([3,1,3,4,3], 6))