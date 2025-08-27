// https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75

var findMaxAverage = function(nums, k) {
    let runningVal = nums.slice(0, k).reduce((acc, current) => acc + current, 0);
    let maxVal = runningVal;

    for (let left = 1, right = k; right < nums.length; left++, right++) {
        runningVal = runningVal - nums[left - 1] + nums[right];

        if (runningVal > maxVal) {
            maxVal = runningVal;
        }
    }

    return maxVal / k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
console.log(findMaxAverage([5], 1));