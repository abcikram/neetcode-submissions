class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let freq = new Map<number, number>();

        for(let num of nums){
            freq.set(num, (freq.get(num) ?? 0 ) +1)
        }

        // console.log(freq)

        /**
         * make [[a,b],[a1,b1]] like [number, frequency]
        */
          
        const count = [...freq.entries()] 

        // console.log("count",count)

        count.sort((a,b) => b[1]-a[1]) //  [ [ 3, 3 ],[2,2],[1,1] ]

       return count.slice(0,k).map(([num,freq])=> num)
     
    }
}
