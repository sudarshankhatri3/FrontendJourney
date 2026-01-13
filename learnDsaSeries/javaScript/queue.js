class Queue{
    constructor(){
        this.que=[]
        this.front=-1
        this.rear=-1
    }

    enqueue(value){
        this.rear++
        this.que[this.rear]=value
    }

    // delete the insert from the queue
    deque(){
        if(this.que.length-1===-1){
            console.log("que is empty")
        }else{
            this.que.shift()
            this.front++
        }
    }
    display(){
        for(let i=0;i<this.que.length;i++){
            console.log(this.que[i])
        }
    }

}


let data=new Queue()
data.enqueue(34)
data.enqueue(45)
data.enqueue(56)
data.enqueue(545)
data.enqueue(789)
// data.deque()
// data.deque()
data.display()