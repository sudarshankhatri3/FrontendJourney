const data=[1,2,3,,45,6,4,3,23,3,43,4,3,23,2,2,3]
console.log(`Data:${data}`)
const copy=[...data]
console.log(copy)


let data1=[1,2,3,4,5,6]
let data2=[12,13,15,34]
let mergeData=[...data1,...data2]
console.log(mergeData)

function sum(a,b,c){
    return a+b+c
}
let sm=[12,34,53]
console.log(sum(...sm))