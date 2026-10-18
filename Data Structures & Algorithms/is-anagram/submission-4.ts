// class Solution {
//     /**
//      * @param {string} s
//      * @param {string} t
//      * @return {boolean}
//      */
//     isAnagram(s: string, t: string): boolean {
//         if(s.length !== t.length) return false;
        
//         let map = new Map<string, number>();
//         // if we use frequency counting method

//         for(let char of s){
//             map.set(char,(map.get(char) || 0) +1)
//         }

//         for(let char of t) {

//             if(!map.has(char)){
//                 return false
//             }
           
//             map.set(char, (map.get(char))-1);

//             if(map.get(char) === 0) {
//                 map.delete(char)
//             }
            
//         }
//         return true 
//     }
// }

// // The time complexity is O(n), and the auxiliary space complexity is O(k), where k is the number of distinct characters.

class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const count = new Array<number>(26).fill(0);

        for(let i=0;i<s.length;i++){
            count[s.charCodeAt(i) - 97]++;
            count[t.charCodeAt(i) - 97]--;
        }

        for(let frequency of count){
            if(frequency !== 0) return false
        }

        return true;
    }
}


