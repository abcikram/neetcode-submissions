class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let left = 0;
        let total = 0, minWindow = Infinity;

        for(let right =0;right<nums.length;right++){
            total += nums[right];
        

            // console.log(total, "rs", window,"right", right, "left", left , minWindow)
            
            while(total>=target){
               let window = right - left + 1;
               minWindow = Math.min(minWindow, window)

               total -=nums[left];
               left++;
            }
        }
        return minWindow === Infinity ? 0 : minWindow ;
    }
}
