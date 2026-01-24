class Node:
    def __init__(self,data):
        self.left=None
        self.right=None
        self.data=data

    
    def insert(self,root,value):
        if root is None:
            return Node(value)
        if root.data>value:
            root.right=self.insert(root.right,value)
        else:
            root.left=self.insert(root.left,value)
        return root
    

root=None

root=Node(56)

root=root.insert(root,23)
root=root.insert(root,34)
root=root.insert(root,12)
root=root.insert(root,11)
root=root.insert(root,56)

root.insert(root,45)

res=[12,23,454,67,43,678,5654]

for index,value in enumerate(res):
    print(f'{index}  and {value}')



