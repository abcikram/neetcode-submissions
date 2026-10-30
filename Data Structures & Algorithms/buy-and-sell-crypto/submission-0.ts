class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = Infinity;
        let maxProfit = 0;

        for(let i=0;i<prices.length;i++){
            /**
             * update minprice when current price is less 
             */
            if(prices[i]<minPrice){
                minPrice = prices[i]
            }

            const profit = prices[i] - minPrice;

            maxProfit = Math.max(maxProfit, profit);
        }

        return maxProfit;
    }
}
