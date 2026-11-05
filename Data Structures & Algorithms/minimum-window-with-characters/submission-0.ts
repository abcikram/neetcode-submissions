class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const n = s.length;
        if(t.length === 0 || t.length > n) return "";

        const map = new Map<string,number>();

        /**
         * store frequency of t
         */

        for(const char of t){
            map.set(char,(map.get(char) ?? 0)+1);
        }

        let requiredCount = t.length;

        let left = 0;
        let right = 0;

        let minWindowSize = Infinity;
        let minStart = 0;

        /**
         * expand the window 
        */

        while(right<n){
          const rightChar = s[right];
          /**
           * t map count 
           */
          const count = map.get(rightChar) ?? 0;

          if(count > 0){
            requiredCount--;
          }

          map.set(rightChar,count-1);

          /**
           * shink the window when valid
           */
          while(requiredCount === 0){
            const currentWindowSize = right - left +1 ;
            
            // update minimum window 
            if(minWindowSize > currentWindowSize){
                minWindowSize = currentWindowSize;
                minStart = left;
            }

            const leftChar = s[left];
            const updatedCount = (map.get(leftChar) ?? 0) + 1;

            map.set(leftChar,updatedCount);

            if(updatedCount > 0){
                requiredCount++;
            }
            
            left++
          }
          right ++;
        }

        /**
         * return minimum substring 
        */

        return minWindowSize === Infinity ? "" : s.substring(minStart, minStart + minWindowSize);
    } 
}
