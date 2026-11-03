class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {

        let left = 0;
        let maxLength = 0;
        let maxFreq = 0;
        let map = new Map<string, number>();

        // console.log(freq)

        for(let right=0;right<s.length;right++){
           
           map.set(s[right], (map.get(s[right]) ?? 0) +1)

           maxFreq = Math.max(maxFreq,map.get(s[right]))
           
           const replacementNeeded = (right-left+1) - maxFreq;

           /**
            * Check Replacement needed or not 
            */
            //if needed , the window srinked
            if(replacementNeeded > k){
                map.set(s[left] , (map.get(s[left]))-1)
                left++;
            }

            maxLength = Math.max(maxLength, right-left+1);
        } 

        return maxLength;
    }
}
