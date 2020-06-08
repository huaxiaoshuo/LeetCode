// class List {
//     constructor(element){
//         this.element = element
//         this.head = null // 第一个
//         let Node = function (element) {
//             this.val = element
//             this.next = null
//         }
//         return this.element
//     }
//     reverse () {
        
//     }
    
// }
// let node = new List([1, 2, 3, 4])
// console.error(node)

// var reverseList = function(head) {
//     if (!head || !head.next) return head
//     let copyHead = head,
//     node = null;
//     while (copyHead) {
//         let nextVal = copyHead.next
//         copyHead.next = node
//         node = copyHead
//         copyHead = nextVal
//     }
//     head = node
//     return head
// };

// var removeElements = function(head, val) {
//     let preNode = new ListNode(null)
//     preNode.next = head
//     let copyHead = preNode
//     while (copyHead) {
//         if (copyHead.next && copyHead.next.val === val) {
//             copyHead.next = copyHead.next.next
//         } else {
//             copyHead = copyHead.next
//         }
//     }
    
//     return preNode.next
// };
// let data = {val: 1; next: {val: 1; next:{val: 2; next: null}}
let data = {val: 1, next: {val: 1, next:{val: 2, next: null}}};

var deleteDuplicates = function(head) {
    let preNode = new ListNode(null),
    valList = [];
    preNode.next = head;
    let copyHead = preNode
    while (copyHead) {
       if (copyHead.next && valList.includes(copyHead.next.val)) {
            copyHead.next = copyHead.next.next
       } else {
            copyHead.next &&  valList.push(copyHead.next.val)
            copyHead = copyHead.next
       }
    }
    return preNode.next
};
console.error(deleteDuplicates(data))