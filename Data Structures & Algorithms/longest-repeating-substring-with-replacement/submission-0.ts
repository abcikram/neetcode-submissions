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
        let freq = new Array(26).fill(0);

        // console.log(freq)

        for(let right=0;right<s.length;right++){
           
           const index = s.charCodeAt(right) - 65;
            
           freq[index]++;

           maxFreq = Math.max(maxFreq, freq[index])
        
        //    console.log(freq, maxFreq)

           /**
            * Check Replacement needed or not 
            */
            //if needed , the window srinked
            if((right-left+1) - maxFreq > k){
                const leftIndex = s.charCodeAt(left) - 65;
                freq[leftIndex]--;
                left++;
            }

            maxLength = Math.max(maxLength, right-left+1);
           //
        } 

        return maxLength;
    }
}
