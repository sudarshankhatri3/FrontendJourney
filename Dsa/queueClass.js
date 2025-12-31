class queue{
    constructor(){
        this.data=[]
    }
    enqueue(value){
       this.data.push(value)
       return this.data
    }
    dequeue(){
        if(this.data.length===0){
            console.log("queue is empty")
        }else{
            let res=this.data.shift()
            return res
        }
    }
    peak(){
        return this.data[0]
    }
    isEmpty(){
        if(this.data.length===0){
            return true
        }
    }
    size(){
        return this.data.length
    }
}

//create the instance of the queue
let obj=new queue()
//call the function enqueue
obj.enqueue(12)
obj.enqueue(21)
obj.enqueue(234)
obj.enqueue(1234)
obj.enqueue(456)

console.log(`Enqueue data:${obj.enqueue(34)}`)

//deque the obj
console.log(`Dequed item:${obj.dequeue()}`)
let rmv=obj.dequeue()
console.log(rmv)

//check the data in the peak
console.log(obj.peak())

//check the queue is empty or not 
console.log(obj.isEmpty())

//size of the queue
console.log(obj.size())





