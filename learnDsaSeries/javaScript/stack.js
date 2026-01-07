class stack{
    constructor(){
        this.s=[]
    }
    length(){
        return this.s.length
    }

    // insert the data in the stack
    insert(value){
        this.s.push(value)
        return this.s
    }
    //check the stack is empty or not 
    empty(){
        if(this.s.length===0){
            return "stack is empty"
        }else{
            return "stack is not empty"
        }
    }

    // check the value in  peek
    peek(){
        return this.s[this.s.length-1]
    }

    //delete the data inserted at last
    delete(){
        return this.s.pop()
    }
}



const myStack=new stack()


//call function to insert data in the stack
myStack.insert(45)
myStack.insert(67)
myStack.insert(78)
myStack.insert(89)
myStack.insert(12)
myStack.insert(2323)

console.log(myStack.insert(56))


// call function to check the stack is empty or not 
console.log(myStack.empty())

//call the function to  find the value at peek
console.log(`Data at peek:${myStack.peek()}`)

//call the function to pop the data from stack 
console.log(`Data removed from stack:${myStack.delete()}`)


// call  function to check the  length of stack
console.log(`Length of stack:${myStack.length()}`)