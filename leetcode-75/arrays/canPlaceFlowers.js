// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

var canPlaceFlowers = function(flowerbed, n) {
    let numberOfSpaces = 0;
    let freeSpaces = 1;

    for (i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            freeSpaces += flowerbed.length - i === 1 ? 2 : 1;
        } else {
            numberOfSpaces += Math.floor((freeSpaces - 1) / 2);
            freeSpaces = 0;
        }
    }
    if (freeSpaces > 2) {
            numberOfSpaces += Math.floor((freeSpaces - 1) / 2);
            freeSpaces = 0;
    }

    return numberOfSpaces >= n;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1));
console.log(canPlaceFlowers([1,0,0,0,1], 2));
console.log(canPlaceFlowers([1,0,0,0,0,1], 2));
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2));