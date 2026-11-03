class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let window = new Set<string>();
        let maxLength = 0;
        let left = 0

        for(let right =0;right<s.length;right++){
            const char = s[right]
            while(window.has(char)){
                /**
                 * window theke left side delete korbo, left++ korbo
                */
                window.delete(s[left]);
                // console.log("s[left]", s[left], "left", left)
                left++;
                // console.log("left++", left, "right", right)
            }

            window.add(char);

            // console.log(s[left], char)

            const length = right-left+1;

            // console.log(right,">>>", left)

            maxLength = Math.max(maxLength, length);

            // console.log(maxLength)
        }
        
        return maxLength;
    }
}
