// Linked List Data Structure in JavaScript –
// 15 Questions
// 1⃣ Basic Level (1–5)
// Focus: implementing a singly linked list and basic operations.
// 1. Implement a singly linked list with Node and LinkedList classes.
class singlyLinkedData{
    construction(data){
        this.data=data
        this.next=null
    }
    // 2. Implement insertAtEnd(value) to add a node at the end.
    insertAtEnd(value){
        let node=new singlyLinkedData(value)
        let current=this
        while(current!==null){
            current=current.next           
        }
        current.next=node
    }
// 3. Implement insertAtStart(value) to add a node at the beginning.
// 4. Implement deleteValue(value) to remove a node by value.
// 5. Implement printList() to display all elements of the linked list.
// 2⃣ Intermediate Level (6–10)
// Focus: intermediate operations and manipulations.
// 6. Implement insertAtIndex(index, value) to insert a node at a specific position.
// 7. Implement deleteAtIndex(index) to delete a node at a specific position.
// 8. Implement find(value) to search for a node by value.
// 9. Implement getLength() to return the number of nodes in the list.
// 10. Reverse a linked list iteratively.
// 3⃣ Advanced / Higher Level (11–15)
// Focus: algorithmic challenges using linked lists.
// 11. Reverse a linked list recursively.
// 12. Detect a loop in a linked list (Floyd’s Cycle-Finding Algorithm).
// 13. Find the middle node of a linked list in one pass.
// 14. Merge two sorted linked lists into one sorted linked list.
// 15. Remove the Nth node from the end of a linked list.
}


let data1=new singlyLinkedData(2)
console.log(data1.insertAtEnd(45))


