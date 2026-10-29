class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";

        for(let i=0;i<strs.length;i++){
            result += strs[i].length + "#" + strs[i]
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result:string[] =[];
        let i = 0 ;
        while(i<str.length){
            let j=i;
            while(str[j] !== "#"){
               j++;
            }  
            /**
             *  '5#HELLO'
             * 5 
             */

            const length = Number(str.slice(i, j)); 
            /**
             * 5, ('5#Hello').slice(0,1) => 5 
            */

            const newString = str.slice(j+1, j+1+length)
             
            //  console.log(newString)
             
            /**
            * '5#Hello'.slice(2,7) => Hello
            */
             
            result.push(newString)

            i = j+1+length
            
        }
        return result
    }
}
