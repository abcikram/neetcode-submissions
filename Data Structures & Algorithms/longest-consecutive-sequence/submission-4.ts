// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number}
//      */
//     longestConsecutive(nums: number[]): number {
//         if(nums.length === 0) return 0;
//         /**
//          * Sorting algorithm
//          */
//         nums.sort((a,b) => a-b);

//         let longest = 1;
//         let currentLength = 1
        
//         for(let i=1;i<nums.length;i++){
//             // if duplicate number
//             if(nums[i] === nums[i-1]) continue;
            
//             if(nums[i] === nums[i-1]+1){
//                currentLength++;
//             }else{
//                 currentLength = 1;
//             }

//             longest = Math.max(longest, currentLength);
//         }
//         return longest;
//     }
// }

/**
 * TC :- O(nlogn)
 */


class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        /**
         * Hash Set Approch   
        */
        let numSet = new Set(nums);
        let longest = 0;
        
        for(let num of numSet){
          /**
           * First we search num-1 exist or not , if exist then we skip, if not exist then first we search n+1, if that exist then use while loop, how much it continue through , thats how we increate cuurent Number and count one , then we find longest count  
           * */ 

           if(!numSet.has(num-1)){
               let currentNum = num;
               let count = 1;

               while(numSet.has(currentNum+1)){
                   currentNum++;
                   count++;
               }

               longest = Math.max(count,longest);
           }
        }

        return longest;
        
    }
}

/**
 * TC :- O(n)
 * SC :- O(n)
 */

