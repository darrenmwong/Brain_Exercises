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

