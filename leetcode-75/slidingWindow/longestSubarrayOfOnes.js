// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/?envType=study-plan-v2&envId=leetcode-75

var longestSubarray = function (nums) {
    let maxCount = 0;
    let pivot = 0;
    let currentCount = 0;
    let hasDeleted = false;

    for (i = 0; i < nums.length; null) {
        if (nums[i] === 0 && !hasDeleted) {
            hasDeleted = true;
            pivot = i + 1;
            i++;
        } else if (nums[i] === 0 && hasDeleted) {
            i = (pivot === 0 || currentCount === 0) ? i + 1 : pivot;
            hasDeleted = false;
            currentCount = 0;
        } else {
            currentCount++;
            const realCount = hasDeleted || nums[i + 1] === 0 || nums[pivot - 1] === 0 ? currentCount : currentCount - 1;
            if (realCount > maxCount) {
                maxCount = realCount;
            }
            i++;
        }
    }

    return maxCount;
};

console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]))
console.log(longestSubarray([1,1,1]))
console.log(longestSubarray([1,1,0,1]))
console.log(longestSubarray([1,0,0,0,0]))
console.log(longestSubarray([0,0,1,1]))
console.log(longestSubarray([1,0]))