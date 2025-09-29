/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseBetween(ListNode* head, int left, int right) {
        if (!head || left == right) return head;

        // Dummy node to simplify edge cases
        ListNode dummy(0);
        dummy.next = head;
        ListNode* prev = &dummy;

        // Step 1: Move prev to node before 'left'
        for (int i = 1; i < left; i++) {
            prev = prev->next;
        }

        // Now 'prev' points to node before the sublist
        ListNode* current = prev->next;    // first node of sublist
        ListNode* next = nullptr;

        // Step 2: Reverse sublist using prev/current/next
        for (int i = 0; i < right - left; i++) {
            next = current->next;
            current->next = next->next;
            next->next = prev->next;
            prev->next = next;
        }

        return dummy.next;
    }
};
