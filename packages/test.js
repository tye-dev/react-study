// 实现链表结构
function ListNode(val, next) {
	this.val = val;
	this.next = next;
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
console.log(node1);
