// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75

var findDifference = function(nums1, nums2) {
    const presentMap = {};
    const nums1Map = {};
    const nums2Map = {};
    const nums1Distinct = [];
    const nums2Distinct = [];
    for (i = 0; i < nums1.length; i++) {
        nums1Map[nums1[i]] = true;
    }

    for (i = 0; i < nums2.length; i++) {
        if (!nums1Map[nums2[i]] && !nums2Map[nums2[i]]) {
            nums2Distinct.push(nums2[i]);
        }
        nums2Map[nums2[i]] = true;
    }

    for (i = 0; i < nums1.length; i++) {
        if (!nums2Map[nums1[i]] && !presentMap[nums1[i]]) {
            nums1Distinct.push(nums1[i]);
            presentMap[nums1[i]] = true;
        }
    }

    return [nums1Distinct, nums2Distinct];
};

console.log(findDifference([1,2,3], [2,4,6]));
console.log(findDifference([1,2,3,3], [1,1,2,2]));