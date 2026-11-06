class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let row = matrix.length;
        let col = matrix[0].length;

        let left = 0, right = row*col - 1;

        while(left<=right){
            let mid = Math.floor(left+(right-left)/2);

            // console.log("mid", mid, "left", left, "right", right)

            const currRow = Math.floor(mid/col);
            const currCol = mid%col;
            
            if(matrix[currRow][currCol] === target){
                return true;
            }else if(matrix[currRow][currCol] < target){
                left = mid + 1;
            }else {
                right = mid - 1;
            }
        }

        return false;

    }
}
