// https://leetcode.com/problems/linked-list-cycle/description/?envType=problem-list-v2&envId=oizxjoit

var hasCycle = function(head) {
    let slow = head;
    let fast = head?.next?.next;

    while (slow) {
        if (slow.pos === fast.pos) {
            return true;
        }

        slow = slow?.next;
        fast = fast?.next?.next;
    }

    return false;
};