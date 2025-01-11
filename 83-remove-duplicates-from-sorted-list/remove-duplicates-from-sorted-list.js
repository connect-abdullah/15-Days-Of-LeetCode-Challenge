/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    let current = head; // Start with the head of the linked list
    
    while (current && current.next) { // Iterate while current and current.next exist
        if (current.val === current.next.val) {
            // If the current value is the same as the next value, skip the next node
            current.next = current.next.next;
        } else {
            // Otherwise, move to the next node
            current = current.next;
        }
    }
    
    return head; // Return the modified list
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = { val: 0, next: null };
    let current = dummy;
    for (let val of arr) {
        current.next = { val, next: null };
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}
