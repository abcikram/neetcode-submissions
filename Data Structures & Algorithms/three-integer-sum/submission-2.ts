class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let result:number[][]=[];

        /**
         * sort the array
        */

        nums.sort((a,b)=> a-b);

        for(let i=0;i<nums.length-2;i++){
            /**
             * skip the first number duplicate
             */
            if(i>0 && nums[i] === nums[i-1]){
                continue;
            }

            /**
             * use two pointer method 
            */
            let left:number = i+1;
            let right:number = nums.length-1;

            while(left<right){
                const sum = nums[i] + nums[left] + nums[right];

                if(sum === 0){
                    /**
                     * result ke push kore dao , leff++ , right-- and skipt left , right duplicate
                     */
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    while(left<right && nums[left] === nums[left-1]){
                        left++;
                    }

                                        while(left<right && nums[right] === nums[right+1]){
                        right--;
                    }
                }else if(sum < 0){
                    left++;
                }else{
                    right--;
                }
            }
        } 

        return result;
    }
}
