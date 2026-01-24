class Node:
    def __init__(self,data):
        self.left=None
        self.right=None
        self.data=data

    def preorderTraversal(self,root):
        if root is not None:
            print(root.data,end=" ")
            self.preorderTraversal(root.left)
            self.preorderTraversal(root.right)

    def inorderTraversal(self,root):
        if root is not None:
            self.inorderTraversal(root.left)
            print(root.data,end=" ")
            self.inorderTraversal(root.right)

    def postorderTraversal(self,root):
        if root is not None:
            self.postorderTraversal(root.left)
            self.postorderTraversal(root.right)
            print(root.data,end=" ")


root=Node(45)
root.left=Node(46)
root.right=Node(58)

root.preorderTraversal(root)
print("\n")
root.postorderTraversal(root)
print("\n")
root.inorderTraversal(root)
print("\n")
