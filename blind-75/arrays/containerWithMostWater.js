// https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=oizxjoit

var maxArea = function(height) {
    let maxContent = 0;

    let left = 0, right = height.length - 1;

    while (right > left) {
        const currentContent = height[left] < height[right] ? height[left] * (right - left) : height[right] * (right - left);

        maxContent = maxContent > currentContent ? maxContent : currentContent;

        if (height[right] < height[left]) {
            right--;
        } else {
            left++;
        }
    }

    return maxContent;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));