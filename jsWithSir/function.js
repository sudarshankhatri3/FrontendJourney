var data=122232323
console.log(`Before use in function:${data}`)
function add(value1){
    let res=data-value1
    data-=res
    return [res,data]
}
console.log(`After use in function:${data}`)
console.log(add(23))



//make a function that takes an array aand loops through it to console its items 
function comp(val){
    for(let i=0;i<val.length;i++){
        console.log(val[i])
    }
}

comp([12,2,34,56,78,23,68,45,7878])
