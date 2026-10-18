class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let indexMap = new Map<number, number>();

        for(let i=0;i<nums.length;i++){
            let currentNum = nums[i];
            let complement = target- currentNum;

            if(indexMap.has(complement)){
                return [indexMap.get(complement)!, i];
            }

            indexMap.set(nums[i], i);
        }

        return [-1.-1];
    }
}
