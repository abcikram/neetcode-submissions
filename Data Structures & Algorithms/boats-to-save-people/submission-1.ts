class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people: number[], limit: number): number {
        /**
         * first sort the array
         */
        people.sort((a,b) => a-b);

        let l = 0;
        let r = people.length-1;
        let boat = 0;

        while(l<=r){
           if(people[l]+people[r] <= limit){
                l++;
           }
           r--;
           boat++;
        }
        
        return boat;
    }
}
