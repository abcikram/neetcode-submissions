class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {

        /**
         *  This is for the when all array of numbers are sorted , so in this approch we use two pointer ( not hashmap)
        */

        let left = 0;
        let right = numbers.length-1;

        while(left<right){
            let sum = numbers[left] + numbers[right];

            if(sum === target){
                /**
                 * we need to find the position of array that is index+1
                 */
                return [left+1, right+1];
            }
            else if(sum>target){
                right--;
            }else{
                left++;
            }
        }

        return []
    }
}

/**
 * we use hashmap 
 * TC :- O(n)
 * SC :- O(1)
 */
