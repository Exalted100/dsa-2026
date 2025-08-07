// https://leetcode.com/problems/product-of-array-except-self/description/?envType=problem-list-v2&envId=oizxjoit

var productExceptSelf = function(nums) {
    const prefix = [1];
    const postfix = [1];

    for (let i = 0; i < nums.length - 1; i++) {
        prefix.push(prefix[i] * nums[i]);
    }

    for (let i = nums.length - 1; i > 0; i--) {
        postfix.unshift(postfix[0] * nums[i]);
    }

    const finalArray = prefix.map((val, index) => val * postfix[index]);

    return finalArray;
};

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))