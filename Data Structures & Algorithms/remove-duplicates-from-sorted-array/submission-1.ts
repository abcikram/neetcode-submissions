class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
       let slow = 0;
       /**
        * take slow and fast pointer , if(nums[slow] != nums[fast]) means unique, then slow ++ ;nums[slow] = nums[fast] 
        */
       for(let fast =1;fast<nums.length;fast++){
           /**
            * unique
            */
           if(nums[slow]!=nums[fast]){
              slow++;
              nums[slow] = nums[fast];  
           }
       }
       /**
        * use need only unique element ,and also slow is index so index+1 means slow+1
        */
       return slow+1 
    }
}
