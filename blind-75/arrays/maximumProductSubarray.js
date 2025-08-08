// https://leetcode.com/problems/maximum-product-subarray/description/?envType=problem-list-v2&envId=oizxjoit

var maxProduct = function(nums) {
    let result = nums[0], previousMax = nums[0], previousMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentMin = Math.min(nums[i], nums[i] * previousMin, nums[i] * previousMax);
        currentMax = Math.max(nums[i], nums[i] * previousMin, nums[i] * previousMax);

        previousMin = currentMin;
        previousMax = currentMax;
        result = Math.max(previousMax, result);
    }

    return result;
};

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));
console.log(maxProduct([2,3,-2,-2,-2,4]));
console.log(maxProduct([0,2]));