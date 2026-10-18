class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n = nums.length

        for(let i=0;i<n;i++){
            nums.push(nums[i])
            // console.log(nums)
        }

        return nums
    }
}
