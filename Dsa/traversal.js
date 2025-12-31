class Node{
    constructor(data){
        this.left=null
        this.data=data
        this.right=null
    }
}
class BinarySeacrh{
    constructor(root=null){
        this.root=root
    }

    preorder(Node=this.root){
       if(Node===null){
        return 
       }
       console.log(Node.data)
       this.preorder(Node.left)
       this.preorder(Node.right)
    }
    postOrder(Node=this.root){
        if(Node===null){
            return 
        }
        this.postOrder(Node.left)
        this.postOrder(Node.right)
        console.log(Node.data)
    }
    inOrder(Node=this.root){
        if(Node===null){
            return
        }
        this.inOrder(Node.left)
        console.log(Node.data)
        this.inOrder(Node.right)
    }
}


let search=new Node(34)
search.left=new Node(23)
search.right=new Node(56)
search.left.left=new Node(67)
search.left.right=new Node(34)
search.right.left=new Node(789)
search.right.right=new Node(567)
search.left.left.left=new Node(5678)
search.right.right.right=new Node(456778)


let tree=new BinarySeacrh(search)

//preorder implement
console.log("preOrder Traversal")
tree.preorder()

//postOrder implement
console.log("PostOrder Traversal")
tree.postOrder()

//inorder implement
console.log("Inorder Traversal")
tree.inOrder()


