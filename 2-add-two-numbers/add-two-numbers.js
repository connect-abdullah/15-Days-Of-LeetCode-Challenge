/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const addTwoNumbers = (l1, l2) => {
    let dummy = new ListNode(0); // Dummy node to simplify result list creation
    let current = dummy; // Pointer to build the result list
    let carry = 0; // Initialize carry to 0

    while (l1 !== null || l2 !== null || carry > 0) {
        // Get values from l1 and l2, or 0 if the list has ended
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        // Calculate sum and new carry
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // Carry is the tens digit
        let digit = sum % 10; // Current digit is the ones digit

        // Add the digit to the result list
        current.next = new ListNode(digit);
        current = current.next;

        // Move to the next nodes in l1 and l2 if they exist
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next; // Return the result list (skip the dummy node)
};
