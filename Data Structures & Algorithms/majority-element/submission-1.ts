class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        
        let map = new Map<number, number>();
        let n = nums.length;

        for(let num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        } 
        for(let [key, value] of map){
            if(value> Math.floor(n/2)){
                return key
            }
        }
    }
}
