class queue:
    def __init__(self):
        self.q=[]
        self.rear=-1
        self.front=-1

    def enqueue(self,value):
        if(self.rear==-1):
            self.rear+=1
            self.q.insert(self.rear,value)
        else:
            self.rear+=1
            self.q.append(value)
        return self.q
        

    def deque(self):
        if(self.rear==-1):
            print('queue is empty !!!!!')
        else:
            self.q.pop(0)
        return self.q
        

    def enqueueAtFront(self,value):
        if(self.front==-1):
            print('stack empty')
        self.front+=1
        self.q.insert(0,value)
        return self.q


    def dequeAtRear(self):
        if(self.front==-1):
            print('empty queue')
        else:
            self.q.pop()
        return self.q

#create an instance :
obj=queue()
obj.enqueue(2332)
obj.enqueue(5656)
print(obj.enqueue(5656))


print(obj.deque())


obj.enqueueAtFront(43534534534)
obj.enqueueAtFront(34344334)
obj.enqueueAtFront(23323)
print(f'Enqueue at front:{obj.enqueueAtFront(3434)}')

obj.dequeAtRear()
obj.dequeAtRear()
print(f'Enqueue at rear:{obj.dequeAtRear()}')

