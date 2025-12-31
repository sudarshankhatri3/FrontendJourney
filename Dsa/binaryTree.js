class BinaryTree{
    constructor(data){
        this.left=null
        this.data=data
        this.right=null
    }
}

//creates a multiple nodes
let bt=new BinaryTree(34)
bt.left=new BinaryTree(45)
bt.right=new BinaryTree(46)
bt.left.left=new BinaryTree(56)
bt.left.right=new BinaryTree(61)
bt.right.left=new BinaryTree(567)
bt.right.right=new BinaryTree(789)

console.log(bt)