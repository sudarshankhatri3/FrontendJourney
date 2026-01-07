class stack:
    def __init__(self):
        self.s=[]


    #check the length of the stack 
    def length(self):
        return len(self.s)
    
    #insert the element usign append
    def insert(self,value):
        return self.s.append(value)
    
    #check the stack is empty or not 
    def checkEmpty(self):
        if len(self.s)==0:
            return f'Stack is empty'
        else:
            return f'stack is not empty'
        
    # check the peek element 
    def peek(self):
        if len(self.s)==0:
            raise Exception(f'Stack is empty')
        else:
            return self.s[-1]
        
    #pop the last element 
    def popElement(self):
        return self.s.pop()
    

#create an instance of class
obj=stack()
print(obj)
print(obj.length())
obj.insert(45)
obj.insert(56)
obj.insert(12)
obj.insert(67)
obj.insert(89)
obj.insert(12)

print(obj.checkEmpty())
print(obj.peek())
print(obj.popElement())
