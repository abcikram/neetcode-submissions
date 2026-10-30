class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(nums.length === 0) return 0;
        /**
         * Sorting algorithm
         */
        nums.sort((a,b) => a-b);

        let longest = 1;
        let currentLength = 1
        
        for(let i=1;i<nums.length;i++){
            // if duplicate number
            if(nums[i] === nums[i-1]) continue;
            
            if(nums[i] === nums[i-1]+1){
               currentLength++;
            }else{
                currentLength = 1;
            }

            longest = Math.max(longest, currentLength)

        }

        
        
        return longest;
    }
}
