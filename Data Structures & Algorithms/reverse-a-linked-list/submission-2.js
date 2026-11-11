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
        let current = head;

        while(current != null){
            // store the next node
            const temp = current.next;
            // reverse the pointer
            current.next = prev;
            //move prev forever
            prev = current;
            // move current forever
            current = temp;
        }
        return prev;
    }
}
