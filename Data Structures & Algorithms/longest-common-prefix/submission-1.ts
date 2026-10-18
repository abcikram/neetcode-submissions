class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        /*
        pattern :- Remember the pattern: Fix a character index, compare it across all strings, and return the prefix at the first mismatch.
        Let \(n\) be the number of strings and \(m\) the length of the shortest string.
        Tc :- O(m*n)
        Sc :- O(1)
        */

        if(strs.length ===0) return "";

        for(let i=0;i<strs[0].length;i++){
            let firstStr = strs[0];
            
            for(let j=1;j<strs.length;j++){
               if(i>=strs[j].length || firstStr[i] !== strs[j][i]){
                return firstStr.slice(0,i)
               }
            }
        }

        return strs[0]
    }
}
