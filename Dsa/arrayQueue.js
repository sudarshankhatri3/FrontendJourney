//create the empty array
let data=[]

// push the every element 
data.push(1)
data.push(2)
data.push(3)
data.push(4)
data.push(5)
data.push(6)
console.log(data)
console.log(data.length)
for(let i=0;i<6;i++){
    console.log(`Before shift ${i}`,data)
    data.shift()
    console.log(`After shift:${i}`,data)
}