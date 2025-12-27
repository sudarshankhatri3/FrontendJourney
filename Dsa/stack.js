// Implement the stack using the ES6
class Stack{
    constructor(){
        this.items=[]
        // this.top=0
    }
    
    // Push the item in empty stack
    push(element){
        this.items.push(element)
        return this.items
        // return this.items[top++]=element
    }

    // pop function to remove the element from top of the stack
    pop(){
        return  this.items.pop()
    }

    //peek of the stack:return the top of stack 
    peek(){
        return this.items[this.items.length-1]
    }
    
    //isEmpty:return true if the stack is empty,false otherwise
    isEmpty(){
        return this.items.length===0
    }

    // size: return the length of the stack
    size(){
        return this.items.length
    }

    // clear:removes all the elements of the stack
    clear(){
        return this.items = [];   // reset
    }
}


// create the object of the stack classss
let st=new Stack()


// show the push element 
st.push(5)
st.push(12)
st.push(51)
st.push(52)
st.push(53)
st.push(54)
st.push(55)
st.push(56)
st.push(521)
st.push(5565)
st.push(12)
st.push(21)
st.push(89)
st.push(0)
console.log(`Items in stack:${st.push(34)}`)

//pop the element from stack
res_1=st.pop()
res_2=st.pop()
console.log(`popped item: ${res_1}`)
console.log(`popped item: ${res_2}`)

//check the element at the peek of the stack
result=st.peek()
console.log(`Item at peek: ${result}`)


//check the stack is empty or not
res=st.isEmpty()
console.log(`check item:${res}`)


//check the size of stack
rst=st.size()
console.log(`size of stack:${rst}`)


//clear the stack
clr=st.clear()
console.log(clr)




// Implement Stack Data Structure in
// JavaScript (15 Questions)
// 1. Implement a stack using an array with push and pop.
let stk=[]
stk.push(123)
stk.push(321)
stk.push(345)
stk.push(567)
stk.push(57)
for(let i=0;i<stk.length;i++){
    console.log(`Top of stack::${stk[i]}`)
}

// 2. Implement peek to see the top element without removing it.
let peekValue=stk[stk.length-1]
console.log(`Data at the top of stack::${peekValue}`)
// 3. Implement isEmpty to check if the stack is empty.
let stkIsEmpty=stk.length
if(stkIsEmpty===0){
    console.log(`Stack is empty`)
}else{
    console.log(`Stack is not empty`)
}
// 4. Implement size to get the number of elements.
let size=stk.length
for(let i=0;i<size;i++){
    console.log(stk[i])
}
// 5. Reverse a string using a stack.
let stData="sudarshan khatri"
let splt=stData.split("")
console.log(splt)
let rData=splt.reverse()
console.log(rData)
let jData=rData.join("")
console.log(jData)
// 6. Check for balanced parentheses using a stack.
// 7. Implement min() to return the minimum element in the stack in O(1).
let Data=[34,2,44,343,67,84,1,67,3]
let min=Data[0]
for(let i=1;i<Data.length;i++){
    if(Data[i]<min){
        min=Data[i]
    }
}
console.log(min)
// 8. Implement max() to return the maximum element in the stack in O(1).
function maximum(arr){
    let max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
let maxData=[1,2323,11,3434,5656,343,6767,3434,334]
console.log(maximum(maxData))
// 9. Implement a stack using a linked list.
// 10. Implement a stack that supports getMiddle() in O(1).
// 11. Sort a stack using another stack.

// 12. Implement two stacks in a single array.
let mD=[20,23,34,6]
for(let i=0;i<maxData.length;i++){
    mD.push(maxData[i])
}
console.log(mD)
// 13. Evaluate a postfix expression using a stack.
// 14. Convert an infix expression to postfix using a stack.
// 15. Implement undo functionality using a stack.
 


