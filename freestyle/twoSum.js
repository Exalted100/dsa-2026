// https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=oizxjoit

// var twoSum = function(nums, target) {
//     for (i = 0; i < nums.length; i++) {
//         for (e = i + 1; e < nums.length; e++) {
//             if (nums[i] + nums[e] === target) {
//                 return [i, e];
//             }
//         }
//     }
// };


// var twoSum = function(nums, target) {
//     const map = {};

//     for (i = 0; i < nums.length; i++) {
//         const remainder = map[target - nums[i]];
//         if (remainder?.present) {
//             return [remainder.index, i];
//         } else {
//             map[nums[i]] = {
//                 present: true,
//                 index: i,
//             }
//         }
//     }
// };

var twoSum = function(nums, target) {
    const sortedNums = [...nums].sort((a, b) => a - b);

    let left = 0, right = nums.length - 1;
    const numbers = [];

    while (right > left) {
        if (sortedNums[left] + sortedNums[right] === target) {
            numbers.push(...[sortedNums[left], sortedNums[right]]);
            break;
        } else if (sortedNums[left] + sortedNums[right] > target) {
            right--;
        } else {
            left++;
        }
    }

    return [nums.indexOf(numbers[0]), nums.lastIndexOf(numbers[1])];
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))