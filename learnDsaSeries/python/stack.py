class stack:
    def __init__(self,arr):
        self.arr=arr


    # push the data in the stack 
    def push(self,value):
        self.arr.append(value)
        return self.arr
    
    # insert at the start of the stack 
    def insertAtStart(self,value):
        self.arr.insert(0,value)
        return self.arr
    
    # pop the value from the stack 
    def popItem(self):
        self.arr.pop(0)
        return self.arr
    
    # pop element from the last index
    def popAtEnd(self):
        self.arr.pop()
        return self.arr
    




if __name__=="__main__":
    stk=[]
    obj=stack(stk)


    # insert at the end of the stack  and remove from start
    print(f'insert item')
    print(obj.push(234))
    print(obj.push(34))
    print(obj.push(456))
    print(obj.push(78))
    print(obj.push(90))
    print(f'Remove from stack')
    print(obj.popItem())
    print(obj.popItem())


    #insert element at the start and remove from the last of stack
    data=[]
    print("\n\n Insert element at the start")
    obj1=stack(data)
    print(obj1.insertAtStart(78))
    print(obj1.insertAtStart(11))
    print(obj1.insertAtStart(890))
    print(obj1.insertAtStart(4567))
    print(obj1.insertAtStart(1234))
    print(obj1.insertAtStart(4567))

    print("remove the data from the stack")
    print(obj1.popAtEnd())
    print(obj1.popAtEnd())
    print(obj1.popAtEnd())