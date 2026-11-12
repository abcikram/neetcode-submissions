/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while(curr != null){
            let temp = curr.next;

            /**
             * reverse the arrow [null <- 1]
            */

            curr.next = prev;

            prev = curr;
            
            curr = temp;
        }

        return prev;
    }
}
