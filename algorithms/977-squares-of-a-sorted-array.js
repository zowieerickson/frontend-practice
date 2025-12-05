/**
 * =========================== QUESTION ===========================
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order.
 *
 * =========================== TEST CASES ===========================
 * Example 1:
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 *
 * Example 2:
 * Input: nums = [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 * 
 */

const sortedSquares = function(nums) {
    let output = new Array(nums.length).fill(0);
    let left = 0;
    let right = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            output[i] = nums[left] ** 2;
            left++;
        } else {
            output[i] = nums[right] ** 2;
            right--
        }
    }

    return output;
}

// Test cases
// console.log(sortedSquares([-4, -1, 0, 3, 10]))
// console.log(sortedSquares([-7, -3, 2, 3, 11]))

/**
 * =========================== EXPLANATION ===========================
 * We use the two-pointer technique, with the left pointer at the beginning,
 * and the right pointer at the end. We compare the left number and the right number
 * and whichever is largest will be inserted at the end of the output array.
 * 
 */
