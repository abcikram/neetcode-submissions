class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        
        let map = new Map<string, number>();
        // if we use frequency counting method

        for(let char of s){
            map.set(char,(map.get(char) || 0) +1)
        }
        console.log(map)

        for(let char of t) {

            if(!map.has(char)){
                return false
            }
           
            map.set(char, (map.get(char))-1);

            if(map.get(char) === 0) {
                map.delete(char)
            }
            
        }
        return true 
    }
}

// The time complexity is O(n), and the auxiliary space complexity is O(k), where k is the number of distinct characters.
