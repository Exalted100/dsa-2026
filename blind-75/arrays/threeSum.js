// https://leetcode.com/problems/3sum/description/?envType=problem-list-v2&envId=oizxjoit

var threeSum = function(nums) {
    const map = {};
    const existingTriplets = {};
    const triplets = [];
    for (i = 0; i < nums.length; i++) {
        for (e = i + 1; e < nums.length; e++) {
            const remainder = 0 - (nums[i] + nums[e]);
            if (map[remainder]) {
                const entry = [remainder, nums[i], nums[e]].sort();
                if (!existingTriplets[entry]) {
                    triplets.push([remainder, nums[i], nums[e]]);
                    existingTriplets[entry] = true;
                }
            }
        }
        map[nums[i]] = true;
    }

    return triplets;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,1,1]));
console.log(threeSum([0,0,0]));