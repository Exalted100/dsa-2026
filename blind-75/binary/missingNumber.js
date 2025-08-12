// https://leetcode.com/problems/missing-number/description/?envType=problem-list-v2&envId=oizxjoit

var missingNumber = function(nums) {
    const presentNumbers = {};

    for (i = 0; i < nums.length; i++) {
        presentNumbers[nums[i]] = true;
    }

    for (i = 0; i <= nums.length; i++) {
        if (!presentNumbers[i]) {
            return i;
        }
    }
};

console.log(missingNumber([3,0,1]));
console.log(missingNumber([0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));