// https://leetcode.com/problems/two-sum/?envType=problem-list-v2&envId=oizxjoit

var twoSum = function(nums, target) {
    const sortedNums = [...nums].sort((a, b) => a - b);
    let first, second;

    for (let left = 0, right = sortedNums.length - 1; right > left; null) {
        if (sortedNums[left] + sortedNums[right] > target) {
            right--;
            continue;
        } else if (sortedNums[left] + sortedNums[right] < target) {
            left++;
            continue;
        } else {
            first = sortedNums[left];
            second = sortedNums[right];
            break;
        }
    }

    const firstIndex = nums.indexOf(first);
    const secondIndex = nums.lastIndexOf(second);

    return [firstIndex, secondIndex];
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));