class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;

        while(left<=right){
            let mid = left + Math.floor((right-left)/2);
            console.log("mid", mid, nums[mid], target)
            
            if(nums[mid] === target){
                return mid;
            }

            // if left side sorted
            if(nums[left]<= nums[mid]){
                if(target < nums[mid] && target >= nums[left]){
                    right = mid - 1
                }else {
                    left = mid + 1
                }
                console.log("hello", right,"nu0ms_r", nums[right], left)
            }
            //if right side sorted 
            else {
                console.log("hello1111")
                if(target > nums[mid] && target <= nums[right]){
                    left = mid + 1;
                }else {
                    right = mid -1 
                }
            }
        }

        return -1;
    }
}
