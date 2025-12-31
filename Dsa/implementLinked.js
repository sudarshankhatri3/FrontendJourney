class linkedList{
    constructor(data){
        this.next=null
        this.data=data
    }
    insert(data){
        let newNode=new linkedList(data)
        if(this.next==null){
            this.next=newNode
        }
        return newNode
    }
    //delete the node of the end
    delete(){
        let current=this.next
    }
    
}


let node1=new linkedList(45)
let node2=node1.insert(34)

console.log(node1)
