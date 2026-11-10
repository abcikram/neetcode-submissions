class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x: number): number {
        if(x<2) return x;
        let left =  0;
        let right = x;
        let ans = 0;

        while(left<=right){
            let mid = left + Math.floor((right-left)/2);
            if(mid * mid <= x){
                ans = mid;
                left = mid + 1
            }else {
                right = mid - 1
            }
        }

        return ans;
    }
}
