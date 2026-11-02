class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length-1;
        let maxWater = 0;

        while(left<right){
            const width = right-left;
            const minHeight = Math.min(heights[left], heights[right]);
            const area = minHeight * width ;

            maxWater = Math.max(area,maxWater);

            if(heights[left]<heights[right]){
                left++;
            }else{
                right--;
            }
        }

        return maxWater;
    }
}

/**
 * time complexity :- O(n)
 * space complexity :- O(1) 
 */
