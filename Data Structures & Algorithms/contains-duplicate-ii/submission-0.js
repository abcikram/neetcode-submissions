class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let l = 0;
        let set = new Set();
       
        for(let r = 0;r<nums.length;r++){
            if(set.has(nums[r])){
                return true
            }

            set.add(nums[r]);
            
            // remove itaration
            if(r>=l){
                set.delete(nums[r-k])
            }
        }

        return false;

    }
}
