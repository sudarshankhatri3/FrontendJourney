class binarySearch{
    constructor(data){
        this.data=data
    }

    // search the value 
    search(value){
        let min=0
        let max=this.data.length-1
        while (min<=max){
            let midpoint=Math.floor((min+max)/2)
            if(value>this.data[midpoint]){
                min=midpoint+1
            }else if(value<this.data[midpoint]){
                max=midpoint-1
            }else{
                return `value ${value} find at the index ${midpoint}`
            }
        }
    }
}

let ar=[
    1, 12, 23,  24,  34,
   56, 57, 89, 434, 567,
  676
]

obj=new binarySearch(ar)
console.log(obj.search(24))
console.log(obj.search(434))
console.log(obj.search(676))
console.log(obj.search(1))