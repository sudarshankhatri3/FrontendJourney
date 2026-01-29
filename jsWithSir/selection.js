class selection{
    constructor(data){
        this.data=data
    }

    // sort using selection sort
    sort(){
        for(let i=0;i<this.data.length;i++){
            let min=this.data[i]
            let p=i
            for(let j=i+1;j<this.data.length;j++){
                if(min>this.data[j]){
                    min=this.data[j]
                    p=j
                }
            }
            let temp=this.data[i]
            this.data[i]=this.data[p]
            this.data[p]=temp
        }
        return this.data
    }
}


let ar=[12,1,434,56,23,57,89,34,567,24,676]
obj=new selection(ar)
console.log(obj.sort())