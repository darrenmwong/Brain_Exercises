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
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next);
    }
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

let l3 = new ListNode(9);
l3.next = new ListNode(9);
l3.next.next = new ListNode(9);
l3.next.next.next = new ListNode(9);
l3.next.next.next.next = new ListNode(9);
l3.next.next.next.next.next = new ListNode(9);
l3.next.next.next.next.next.next = new ListNode(9);

let l4 = new ListNode(9);
l4.next = new ListNode(9);
l4.next.next = new ListNode(9);
l4.next.next.next = new ListNode(9);

const addTwoNumbers = (l1, l2) => {
    let combinedNumbers;
    let remainder = 0;
    let current = new ListNode(0);
    let result = current;
    
    while(l1 || l2) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        combinedNumbers = val1 + val2 + remainder;

        //reset the remainder afer combining values
        remainder = 0;

        // find the remainder of the number and add to the next
        if(combinedNumbers > 9) {
            remainder = 1;
        }

        // so the setters wont throw an error if the node list are uneven
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null

        current.next = new ListNode(combinedNumbers % 10);
        current = current.next;
    }

    // If everything is left and a remainder is still initialized its 1 digit higher.
    // We can probably of optimized the solution by always setting 1 as the remainder because we know
    // that it can ONLY be two single digits combining together which will always be remainder 1.
    if(remainder) {
        current.next = new ListNode(remainder);
    }

    return result.next;
};

console.log(addTwoNumbers(l1,l2));
console.log(addTwoNumbers(l3,l4));