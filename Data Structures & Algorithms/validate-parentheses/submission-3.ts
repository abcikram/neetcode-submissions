class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let map = {
             ')':'(',
             '}':'{',
             ']':'['
        };
        let backet = [];

        for(const char of s){
            if(char === '(' || char === '[' || char === '{'){
                backet.push(char);
            }else {
                let last = backet.pop();
                if(last !== map[char]) return false;
            }
        }

        return backet.length === 0;
    }
}
