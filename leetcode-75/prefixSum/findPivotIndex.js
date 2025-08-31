// https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan-v2&envId=leetcode-75

var pivotIndex = function(nums) {
  const total = nums.reduce((acc, current) => acc + current, 0);
  let currentSum = 0;

  for (i = 0; i < nums.length; i++) {
    if ((total - nums[i]) / 2 === currentSum) {
        return i;
    }
    currentSum += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]))
console.log(pivotIndex([1,2,3]))
console.log(pivotIndex([2,1,-1]))
console.log(pivotIndex([-1,-1,-1,-1,-1,0]))