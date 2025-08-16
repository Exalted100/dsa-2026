// https://leetcode.com/problems/reverse-linked-list/description/?envType=problem-list-v2&envId=oizxjoit

var reverseList = function(head) {
    if (!head?.next) {
        return head;
    }

    let first = head;
    let second = head.next;

    while (second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }

    head.next = null;
    head = first;
    
    return head;
};
