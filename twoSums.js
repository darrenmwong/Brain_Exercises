/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
    // nums = array that needs to be iterated through searching for two numbers that add up to the target argument
    let numberArray = new Map();
    let returnArray;
   nums.forEach((num, index) => {
       let compliment = target - num;
       if(numberArray.has(num)) {
           returnArray = [numberArray.get(num), index];
       } else {
           numberArray.set(compliment, index);
       }
   });

   return returnArray;
};

console.log(twoSum([2,7,11,15], 9));


// Twosumtwo is a better optimized solution because of how map.has method looks for the number
// we can change that to if the complimentary is the index.

//@jakesully don’t be happy. It’s because the expected solution is in the early half of the input test cases. So your solution returns early. If I change an example test case from [2,7,11,15], 9 to [11,15,2,7], 9, your solution takes 88ms and the original is 79ms.
//Basically both are similar solution. You are saving the target – current (expected) and checking for its position, and others are saving position while checking for existence of target – current.
//The 52ms is just a LeetCode one-off 🙂 (not consistently reproducible).


//we can assume that if it returns early within the for loop its optimized. if it doesnt then the optimization would be the same as .map is fairly new to es6
// .map for writing style and a bit more clear in terms of reading as a personal opinion
const twoSumtwo = (nums, target) => {
    let mapping = {};
    for (let i = 0; i < nums.length; i++) {
       if(mapping[nums[i]] >= 0) {
           return [ mapping[nums[i]], i];
       }
       mapping[target-nums[i]] = i;
    }
};

console.log(twoSumtwo([2,7,11,15], 9));