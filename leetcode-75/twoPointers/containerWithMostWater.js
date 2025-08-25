// https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75

var maxArea = function(height) {
    let currentMax = 0;

    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const area = (height[left] < height[right] ? height[left] : height[right]) * (right - left);

        currentMax = currentMax > area ? currentMax : area;

        if (height[left] < height[right]) {
            left++
        } else {
            right--;
        }
    }

    return currentMax;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))