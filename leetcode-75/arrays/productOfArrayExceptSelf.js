// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

var productExceptSelf = function(nums) {
    const prefix = [1];
    const postFix = [1];

    for (i = 0; i < nums.length - 1; i++) {
        prefix.push(nums[i] * prefix[prefix.length - 1]);
    }

    for (i = nums.length - 1; i > 0; i--) {
        postFix.unshift(nums[i] * postFix[0]);
    }

    const finalArray = prefix.map((val, index) => val * postFix[index]);
    return finalArray;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]))