// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/?envType=problem-list-v2&envId=oizxjoit

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (right > left) {
        if (nums[right] > nums[left]) {
            return nums[left];
        } else if (right - left === 1) {
            return nums[right];
        } else {
            const pivot = Math.floor((right + left) / 2);
            if (nums[pivot] > nums[left] && nums[pivot] > nums[right]) {
                left = pivot;
            } else {
                right = pivot;
            }
        }
    }

    return nums[right];
};

console.log(findMin([11,13,15,17]));
console.log(findMin([3,4,5,1,2]));
console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([2,1]));
console.log(findMin([2,3,1]));
console.log(findMin([2,3,4,5,1]));
console.log(findMin([5,6,7,8,9,1,2,3,4]));