class BinaryTreeNode{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}

class BinaryTreeCreate{
    constructor(node){
        this.node=node
        this.idx=0
    }
    create(){
        if(this.idx>=this.node.length || this.node[this.idx]===0){
            this.idx++
            return null
        }
        let root=new BinaryTreeNode(this.node[this.idx])
        this.idx++
        root.left=this.create()
        root.right=this.create()

        return root

    }
}

let data=[23,34,56,0,0,0,67,78,0,43,0,5,76,0,3,4343,0]


let rt=new BinaryTreeCreate(data)
let bin=rt.create()

console.log(bin)
