// Queue Data Structure in JavaScript – 15
// Questions
// 1⃣ Basic Level (1–5)
// Focus: implementing a simple queue using an array.
// 1. Implement a basic queue using an array with enqueue and dequeue methods.
class queue{
    constructor(){
        this.element={}
        this.head=0
        this.tail=0
    }
    enqueu(element){
        this.element[this.tail]=element
        // 5. Print all elements of a queue from front to rear.
        console.log(`value in  tail::${this.tail} is ${this.element[this.tail]}`)
        this.tail++
        console.log(`index of tail::${this.tail}`)
    }
    dequeue(){
        const item=this.element[this.head]
        console.log(`dequed item::${item}`)
        delete this.element[this.head]
    }
    // 2. Implement peek() to see the front element without removing it.
    peek(){
        const item=this.element[this.head]
        console.log(`value at peak:${item}`)
    }
    // 3. Implement isEmpty() to check if the queue is empty.
    isEmpty(){
        if(this.element.length===0){
            return "queue is empty"
        }else{
            return "queue is not empty"
        }
    }
    queueSize(){
        let size= this.element.length
        return size
    }
}
let dt=new queue()
dt.enqueu(123)
dt.enqueu(121)
dt.enqueu(120)
dt.enqueu(1212)
dt.enqueu(12323)
dt.enqueu(123222)
dt.peek()
console.log(dt.isEmpty())
dt.dequeue()
console.log(dt.isEmpty())
console.log(`Size of queue::${dt.queueSize()}`)







// 2⃣ Intermediate Level (6–10)
// Focus: queue operations and variations.
// 6. Implement a circular queue using an array.
class circularQueue{
    constructor(){
        this.data=[]
        this.head=0
        this.front=0
    }
}
// 7. Implement a priority queue where elements are dequeued based on priority.
// 8. Implement a queue using two stacks.
// 9. Reverse a queue using a stack.
// 10. Implement a double-ended queue (deque) with enqueue and dequeue from both ends.
// 3⃣ Advanced / Higher Level (11–15)
// Focus: algorithmic problems and interview challenges using queue.
// 11. Implement a sliding window maximum problem using a queue.
// 12. Implement a queue that tracks the maximum element in O(1) time.
// 13. Implement a queue to generate binary numbers from 1 to n.
// 14. Implement a round-robin scheduler using a queue.
// 15. Use a queue to implement BFS (Breadth-First Search) traversal in a graph.
