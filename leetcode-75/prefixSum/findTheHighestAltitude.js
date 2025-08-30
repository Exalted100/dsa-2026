// https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75

var largestAltitude = function(gain) {
    let maxAltitude = 0;
    let currentAltitude = 0;

    for (i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];

        if (currentAltitude > maxAltitude) {
            maxAltitude = currentAltitude;
        }
    }

    return maxAltitude;
};

console.log(largestAltitude([-5,1,5,0,-7]));
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]));