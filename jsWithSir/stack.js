class stack{
    constructor(arr){
        this.arr=arr
    }
    // insert element at the top of stack
    insert(val){
        this.arr.push(val)
        return this.arr
    }

    size(){
        return this.arr.length
    }

    // check that the stack is empty or not 
    isEmpty(){
        if(this.arr.length===0){
            return "Stack is empty"
        }else{
            return "stack is not empty"
        }
    }


    // find the value at peek 
    peek(){
        let len=this.arr.length
        return this.arr[len-1]
    }

    //pop from the top of stack 
    delete(){
        if(this.arr.length===0){
            return "stack is underflow"
        }else{
            this.arr.pop()
            return this.arr
        }
    }
}
let data=[]
data=new stack(data)
for(let i=0;i<10;i++){
    let rand = Math.floor(Math.random() * 10000)
    console.log(data.insert(rand))
}
console.log(data.size())
console.log(data.isEmpty())
console.log(data.peek())
console.log(data.delete())