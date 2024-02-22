const { count } = require("console");

/*
1) Move Zeroes:
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/
var nums
function moveZeroToEnd(nums) {
    for (let i = 0, j = 0; i < nums.length; i++) {
        while (nums[j] === 0) j++; // skip zeroes
        nums[i] = nums[j++] ?? 0;
    }
    console.log(nums);
}
moveZeroToEnd([0,1,0,3,12]);
moveZeroToEnd([0]);
/*
2) Array intersection
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
Example 1: 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/
   
let nums1;
let nums2;
function findIntersection(nums1, nums2) {
    console.log(`Array values before intersect ${nums1} and ${nums2}`);
    const intersection = [];
    for (let i = 0; i < nums1.length; i++) {
      const element = nums1[i];
      if (nums2.indexOf(element) !== -1 && intersection.indexOf(element) === -1) {
        intersection.push(element);
      }
    }
    console.log(intersection);
  }
findIntersection([1,2,2,1], [2,2]);
findIntersection([4,9,5], [9,4,9,8,4]);

/*
3) Find the maximum and minimum:
Given an integer array, find the maximum amd minimum elements in an array and return their indices.
Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1 */

let arrayOfNumbers = [34, 7, 21, 89, 54, 10, 91, 67];
console.log("Given array of numbers are", arrayOfNumbers);

let maxindex = Math.max(...arrayOfNumbers);
console.log(`Maximum array value is - ${Math.max(...arrayOfNumbers)} and found at ${arrayOfNumbers.indexOf(maxindex)} th index`);

let minindex = Math.min(...arrayOfNumbers);
console.log(`Mnimum array value is - ${Math.min(...arrayOfNumbers)} and found at ${arrayOfNumbers.indexOf(minindex)} th index`);

/* 4) Remove Duplicates:
Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.
Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]
*/
let inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
console.log(`\nInput Array values are ${inputArray}`)
function removeDuplicateFromArr(arr) {
    let resultArray = [];
    for (i = 0; i < inputArray.length; i++) {
        if (resultArray.indexOf(inputArray[i]) === -1) {
            resultArray.push(inputArray[i]);
        }
    }
   console.log(`Result Array after removing duplicates -> ${resultArray}`);
}
removeDuplicateFromArr(inputArray);

/*
1) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count
*/
const anums = [2,4,5,2,1,2];
const k=2;
let cnt = 0;
for (const element of anums) {
  if (element === k) {
    cnt += 1;
  }
}
console.log(`\n Find the number of occurences for value ${2} is : ${cnt}`);

/*2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)
*/
const arrnums = [2, 4, 7, 8, 11, 14];
const target = 18;
let total = 0;
function twosum(arrnums, target) {
    for (let i = 0; i <= arrnums.length - 1; i++) {
        for (let j = i + 1; j <= arrnums.length - 1; j++) {
            total = arrnums[i] + arrnums[j];
            if (total == target) {
                console.log([arrnums.indexOf(arrnums[i]), arrnums.indexOf(arrnums[j])]);
            }
        }
    }
}
twosum(arrnums, target);