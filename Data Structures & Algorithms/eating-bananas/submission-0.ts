class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        /**
         * minimum banana khaoyar koto speed thakle, h time ar moddhey sob banana khoya shesh korte parbe   
         */

        let left = 0;
        let right = Math.max(...piles);

        while(left<right){
            let mid = left + Math.floor((right-left)/2);

            let totalHours = 0;
            for(let num of piles){
               totalHours += Math.ceil(num/mid);
            }
            

            if(totalHours <=h){
                right = mid;
            }else {
                left = mid + 1;
            }
        }

        return right;
    }
}
