function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let smallest=arr[i]
        let p=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<smallest){
                smallest=arr[j]
                p=j
            }
        }
        let temp=arr[i]
        arr[i]=arr[p]
        arr[p]=temp
    }
    return arr
}

let data=[12,2,5,3,8,23,21]
console.log(selection(data))