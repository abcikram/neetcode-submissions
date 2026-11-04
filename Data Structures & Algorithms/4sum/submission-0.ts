class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums: number[], target: number): number[][] {
        nums.sort((a,b) => a-b);
        let result = []

        for(let i=0;i<nums.length-3;i++){
             
            if(i>0 && nums[i] === nums[i-1]) continue;

            for(let j=i+1;j<nums.length-2;j++){
                
                if(j>i+1 && nums[j] === nums[j-1]) continue;
                
                let k = j+1;
                let right = nums.length-1;

                while(k<right){
                    let sum = nums[k] + nums[right] + nums[i] + nums[j];

                    if(sum === target){
                        result.push([nums[k] , nums[right] , nums[i] , nums[j]])
                        k++;
                        right--;
                    

                    // duplicate check 
                    while(k<right && nums[k] == nums[k-1]) {k++};
                    while(k<right && nums[right] == nums[right+1]) {right--};
                    }
                    else if(sum<target){
                        k++;
                    }else{
                        right--;
                    }
                }

            }
        }

        return result;
    }
}
