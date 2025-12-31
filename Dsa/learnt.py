#class to create a single node 
class BinaryTree:
    def __init__(self,data):
        self.data=data
        self.left=None
        self.right=None


#class to extends the nodes in root node
class BinaryTreeData:
    def __init__(self,node):
        self.node=node
        self.idx=0


    def create(self):
        if self.idx >= len(self.node) or self.node[self.idx] == 0:
            return None 
        
        obj=BinaryTree(self.node[self.idx])
        self.idx+=1
        obj.left=self.create()
        obj.right=self.create()

        return obj
    


#create the instance of the class BinaryTree
data=[12,2,0,0,45,0,76,4,0,0,45,9865,232,4657]
obj1=BinaryTreeData(data)
value=obj1.create()
print(value)


