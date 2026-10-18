class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let map = new Map<number, number>();

        for(let i=0;i<nums.length;i++){
            let original = nums[i];
            let sub = target- original;

            if(map.has(sub)){
                return [map.get(sub)!, i];
            }

            map.set(nums[i], i);
        }

        return [-1.-1];
    }
}
