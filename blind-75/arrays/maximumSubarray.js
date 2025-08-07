// https://leetcode.com/problems/maximum-subarray/description/?envType=problem-list-v2&envId=oizxjoit

var maxSubArray = function(nums) {
    let maxSum = nums[0], current = nums[0];

    for (let i = 1; i < nums.length; i++) {
        current = current > 0 ? current + nums[i] : nums[i];

        maxSum = maxSum > current ? maxSum : current;
    }

    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));
console.log(maxSubArray([-2,1]));
console.log(maxSubArray([-1,0,-2]));