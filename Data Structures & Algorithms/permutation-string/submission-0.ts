class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let k = s1.length;

        if(k>s2.length) return false;
        /**
         * take s1Map and windowMap for frequency 
         * s1Map has all s1 char frequency 
         * windowMap has window size frequency
         */

        let s1Map = new Map<string, number>();
        let windowMap = new Map<string, number>();

        for(const char of s1){
            s1Map.set(char,(s1Map.get(char)?? 0)+1);
        }

        for(let i=0;i<k;i++){
            const char = s2[i];
            windowMap.set(char,(windowMap.get(char)?? 0)+1);
        }

        if(this.isSame(s1Map, windowMap)) return true;

        /**
         * Now sliding window , left-- , windowMap theke left ar frequency komiye deoa hbe , freq 0 hole deleate kora hbe 
         * ar right ++ kora hbe , reght ke windowMap a add kora hbe
         */

        for(let right = k;right<s2.length;right++){
            const leftChar = s2[right-k];

            let leftCount = windowMap.get(leftChar)!-1;

            if(leftCount === 0){
                windowMap.delete(leftChar);
            }else{
                 // decrease left frequency
                windowMap.set(leftChar,leftCount);
            }

            /**
             * after decrease left , window increase right side
             * right++
             */

            let rightChar = s2[right];
            
            windowMap.set(rightChar,(windowMap.get(rightChar)?? 0)+1);
            
            /**
             * then check isSame() or not
             */

            if(this.isSame(s1Map, windowMap)) return true;

        }

        return false;
    }

    isSame(s1Map: Map<string, number>, windowMap: Map<string, number>): boolean {
        if(s1Map.size !== windowMap.size) return false;

        for(const [char, value] of s1Map){
            if(windowMap.get(char)!== value){
                return false;
            }
        }

        return true;
    }
}

