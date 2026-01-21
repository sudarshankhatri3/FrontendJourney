class Node:
    def __init__(self,data):
        self.left=None
        self.right=None
        self.data=data

# perform the preorder traversal
def preorderTraversal(root):
    if root is not None:
        print(root.data,end=" ")
        preorderTraversal(root.left)
        preorderTraversal(root.right)

#perform the Inorder Traversal
def inorderTraversal(root):
    if root is not None:
        inorderTraversal(root.left)
        print(root.data,end=" ")
        inorderTraversal(root.right)
    

#perfom the postOrderTraversal
def postorderTraversal(root):
    if root is not None:
        postorderTraversal(root.left)
        postorderTraversal(root.right)
        print(root.data,end=" ")


#instance of class node 
root=Node(45)
root.left=Node(43)
root.left.left=Node(41)
root.left.left.left=Node(40)
root.right=Node(48)
root.right.right=Node(49)
root.right.right=Node(55)
root.right.right.left=Node(53)
root.right.left=Node(50)
root.left.right=Node(34)
root.left.left.right=Node(42)


print('Preorder Traverasal:')
preorderTraversal(root)
print("\n")---------
print('Inorder Traversal:')
inorderTraversal(root)
print("\n")
print('PostOrder Traversal')
postorderTraversal(root)
print("\n")


