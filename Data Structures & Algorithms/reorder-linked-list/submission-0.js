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
     * @return {void}
     */
    reorderList(head) {
         if(head === null || head.next === null){
            return;
        }

        /**
         * find middle
        */
        
        let slow = head;
        let fast = head.next;

        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        /**
         * middle theke bhenge dilam 
         */
        let second = slow.next;
        slow.next = null;

        // Step 3: Reverse the second half
        let prev = null;

        while(second != null){
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }

        // Step 4: Merge both halves
        let first = head;
        second = prev;

        while(second!==null){
           let temp1 = first.next;
           let temp2 = second.next;

           first.next = second;
           second.next = temp1;

           first = temp1;
           second = temp2; 
        }
          
    }
}
