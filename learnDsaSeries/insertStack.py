class stack:
    def __init__(self):
        self.s=[]


    def length(self):
        return len(self.s)
    
    # insert element in the o index
    def push(self,value):
        return self.s.insert(0,value)
    
    #check the stack is empty or not 
    def empty(self):
        if len(self.s)==0:
            return f'stack is empty'
        else:
            return f'stack is not empty'
        
    #check the value at peek
    def peek(self):
        if len(self.s)==0:
            raise Exception(f'No data in stack')
        else:
            return self.s[0]
        
    #pop the element that is insert at last
    def popElement(self):
        return self.s.pop(0)
    

#create an instance of class
obj1=stack()

obj1.push(34)
obj1.push(45)
obj1.push(56)
obj1.push(89)
obj1.push(4545)

print(obj1.empty())
print(obj1.peek())
print(obj1.popElement())
print(obj1.length())