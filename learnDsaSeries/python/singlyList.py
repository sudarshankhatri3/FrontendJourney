class Node:
    def __init__(self,data):
        self.data=data
        self.next=None


class singlyLinkedList:
    def __init__(self):
        self.head=None

    #insert at the lastnode
    def insertAtEnd(self,value):
        new_node=Node(value)

        # check the list is empty or not 
        if self.head is None:
            self.head=new_node
            return 
        

        
        temp=self.head
        while(temp.next!=None):
            temp=temp.next
        
        temp.next=new_node
        
    def insertAtStart(self,value):
        temp=Node(value)

        if self.head is None:
            self.head=temp
            return 
        else:
            temp.next=self.head
            self.head=temp


    def insertAtMiddle(self,value,x):
        new_node=Node(value)

        if self.head is None:
            self.head=new_node
            return 
        
        temp=self.head
        while(temp.next!=None):
            if(temp.data==x):
                new_node.next=temp.next
                temp.next=new_node
                return 

            temp=temp.next


    def deleteElement(self,value):
        
        temp=self.head
        prev=temp
        while(temp.next!=None):
            if(temp.data==value):
                prev.next=temp.next
                return 
            else:
                prev=temp 
                temp=temp.next

            
        

    def printsingle(self):
        t1=self.head
        while(t1.next!=None):
            print(t1.data)
            t1=t1.next

obj=singlyLinkedList()

obj.insertAtEnd(54)
obj.insertAtEnd(67)
obj.insertAtEnd(12) 
obj.insertAtStart(45)
obj.insertAtStart(890)
obj.insertAtMiddle(56,54)
obj.deleteElement(67)
obj.printsingle()
