// https://leetcode.com/problems/search-in-rotated-sorted-array/?envType=problem-list-v2&envId=oizxjoit

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    if (nums[left] === target) {
        return left;
    }
    if (nums[right] === target) {
        return right;
    }

    while (right > left) {
        if (nums[left] === target) {
            return left;
        }
        if (nums[right] === target) {
            return right;
        }
        if (right - left === 1) {
            break;
        }
        const pivot = Math.floor((left + right) / 2);
        if (nums[pivot] === target) {
            return pivot;
        }
        if (nums[right] > nums[left] && target > nums[pivot]) {
            left = pivot;
        } else if (nums[right] > nums[left] && target < nums[pivot]) {
            right = pivot;
        } else if (nums[pivot] > nums[left] && target > nums[pivot]) {
            left = pivot;
        } else if (nums[pivot] < nums[right] && target < nums[pivot]) {
            right = pivot;
        } else if (nums[pivot] > nums[left] && target < nums[left]) {
            left = pivot;
        } else if (nums[pivot] < nums[right] && target > nums[right]) {
            right = pivot;
        } else if (nums[pivot] > nums[left] && target < nums[pivot]) {
            right = pivot;
        } else if (nums[pivot] < nums[right] && target < nums[right]) {
            left = pivot;
        }
    }

    return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
console.log(search([1], 1));
console.log(search([1, 2], 1));
console.log(search([1, 3, 5], 5));
console.log(search([4,5,6,7,0,1,2], 1));
console.log(search([4,5,6,7,0,1,2], 5));
console.log(search([4,5,6,7,8,1,2,3], 8));
console.log(search([5,1,2,3,4], 1));