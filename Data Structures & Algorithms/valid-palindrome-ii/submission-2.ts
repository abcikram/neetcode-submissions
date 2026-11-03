class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length-1;

        while(left<right){
            if(s[left] !== s[right]){
                if(this.palindrome(s,left+1, right)||
                this.palindrome(s,left,right-1)) return true
                else return false;
            }

            left++;
            right--;
        }

        return true

    }

    palindrome(s:string,left:number, right:number):boolean {

        while(left<right){
            if(s[left] !== s[right]){
                return false
            }

            left++;
            right--;
        }

        return true;
    }
}
