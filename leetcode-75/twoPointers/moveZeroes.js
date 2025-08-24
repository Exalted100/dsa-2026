// https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75

var moveZeroes = function(nums) {
    let length = nums.length;

    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            length--;
        }
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0]))