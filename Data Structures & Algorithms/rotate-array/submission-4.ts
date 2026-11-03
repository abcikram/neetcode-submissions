class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        let n = nums.length;
        
        if(n<=1) return;

        k=k%n;

        this.reverse(nums,0,n-1);
        this.reverse(nums,0,k-1);
        this.reverse(nums,k,n-1);
    }

    reverse(nums:number[], left:number, right:number){
        while(left<right){
            let temp = nums[left];
            nums[left]=nums[right];
            nums[right]=temp;

            left++;
            right--;
        }
        return nums;
    }
}
