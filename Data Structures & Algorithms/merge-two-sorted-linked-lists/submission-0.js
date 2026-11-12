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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let result;

        //base condition 
        if(list1 === null) return list2;
        if(list2 === null) return list1;

        if(list1.val < list2.val){
            result = list1;
            result.next = this.mergeTwoLists(list1.next, list2)
        }else {
            result = list2;
            result.next = this.mergeTwoLists(list1, list2.next)
        }


        return result;
    }
}
